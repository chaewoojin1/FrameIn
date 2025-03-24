import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Hangul from "es-hangul";
import "../../css/Search.css";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialSearchQuery = queryParams.get("query") || "";
  const initialSearchType = queryParams.get("searchType") || "normal";
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [searchType, setSearchType] = useState(initialSearchType);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageRange = 5;
  const [totalPages, setTotalPages] = useState(0);
  const [sortOption, setSortOption] = useState("release"); // 기본값은 개봉일 순

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    setPage(newPage - 1); // 백엔드에 보낼 page는 0부터 시작
  };

  const rangeStart = Math.floor((currentPage - 1) / pageRange) * pageRange + 1;
  const rangeEnd = Math.min(rangeStart + pageRange - 1, totalPages);

  const isChosungOnly = (text) => {
    const chosungRegex = /^[ㄱ-ㅎ]+$/;
    return chosungRegex.test(text);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        let response;

        if (!searchQuery) {
          response = await axios.get(
            `http://43.201.20.172:8090/api/searchList?page=${page}&sortOption=${sortOption}`
          );
        } else {
          let queryToUse = searchQuery.trim(); // 검색어 공백 제거
          let currentSearchType = searchType;

          if (isChosungOnly(queryToUse)) {
            queryToUse = Hangul.getChoseong(queryToUse);
            currentSearchType = "chosung";
            setSearchType(currentSearchType);
          } else {
            currentSearchType = "normal";
            setSearchType(currentSearchType);
          }

          response = await axios.get(
            `http://43.201.20.172:8090/api/search?query=${encodeURIComponent(
              queryToUse
            )}&searchType=${currentSearchType}&page=${page}&sortOption=${sortOption}`
          );
        }

        const { content, totalPages } = response.data;

        setMovies(content);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("영화 검색 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery, searchType, page, sortOption]);

  useEffect(() => {
    setSearchQuery(initialSearchQuery);
    setSearchType(initialSearchType);
    setPage(0);
  }, [initialSearchQuery, initialSearchType]);

  const formatMovieTitle = (title) => {
    if (!title) return "";

    if (title.includes(":")) {
      const parts = title.split(":");
      return (
        <span>
          {parts[0]}:{/* 첫 번째 부분 */}
          <br />
          {parts[1]} {/* 두 번째 부분 */}
        </span>
      );
    }

    return <span>{title}</span>;
  };

  const handleMovieClick = (movieCd) => {
    navigate(`/movie/detail/${movieCd}`);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setPage(0); // 정렬 옵션 변경 시 페이지를 0으로 초기화
  };

  return (
    <div className="search-content">
      <div className="sort-options">
        <select value={sortOption} onChange={handleSortChange}>
          <option value="release">개봉일 순</option>
          <option value="alphabetical">가나다 순</option>
        </select>
      </div>
      {isLoading && <p>검색 중입니다... 조금만 기다려주세요</p>}

      {!isLoading && movies.length > 0 && (
        <ul className="movie-list">
          {movies.map((movie) => (
            <li
              key={movie.movieCd}
              onClick={() => handleMovieClick(movie.movieCd)}
              style={{ cursor: "pointer" }}
            >
              <img
                className="poster"
                src={movie.poster_path}
                alt={movie.movieNm}
                width="100"
              />
              <img
                src={
                  movie.watchGradeNm === "청소년관람불가"
                    ? "./../image/18.png"
                    : movie.watchGradeNm === "15세이상관람가"
                    ? "./../image/15.png"
                    : movie.watchGradeNm === "12세이상관람가"
                    ? "./../image/12.png"
                    : movie.watchGradeNm === "전체관람가"
                    ? "./../image/all.png"
                    : null
                }
                alt={movie.watchGradeNm}
                className="age-rating-icon"
              />
              <span className="movie-title">
                {formatMovieTitle(movie.movieNm)}
              </span>
            </li>
          ))}
        </ul>
      )}

      {!isLoading && movies.length === 0 && searchQuery && (
        <p>"{searchQuery}"에 대한 검색 결과가 없습니다.</p>
      )}

      <div className="pagination">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          처음
        </button>

        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </button>

        {[...Array(rangeEnd - rangeStart + 1)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(rangeStart + index)}
            className={currentPage === rangeStart + index ? "active" : ""}
          >
            {rangeStart + index}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </button>

        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          마지막
        </button>
      </div>
    </div>
  );
};

export default Search;
