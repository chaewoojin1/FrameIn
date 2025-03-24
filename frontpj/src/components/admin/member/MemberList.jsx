import React, { useState, useEffect } from "react";
import jwtAxios from "../../../util/jwtUtil";
import "../../../css/admin/MemberList.css";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const size = 10;

  const [searchType, setSearchType] = useState("email");
  const [searchValue, setSearchValue] = useState("");

  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    pw: "",
    nickname: "",
    social: false,
    roleNames: [],
  });

  // 검색 및 페이지네이션 적용하여 회원 목록 조회
  const fetchMembers = async () => {
    try {
      const response = await jwtAxios.get("http://43.201.20.172:8090/admin/members/search", {
        params: {
          page: page,
          size: size,
          [searchType]: searchValue,
        },
      });
      if (response.data && response.data.content) {
        setMembers(response.data.content);
        setTotalPages(response.data.totalPages);
      } else {
        setMembers([]);
        setTotalPages(0);
      }
    } catch (error) {
      console.error("멤버 데이터 가져오기 실패:", error);
      setMembers([]);
      setTotalPages(0);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [page, searchType, searchValue]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(0);
    fetchMembers();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const openEditModal = (member) => {
    setSelectedMember(member);
    setFormData({
      email: member.email,
      pw: "",
      nickname: member.nickname,
      social: member.social,
      roleNames: member.roleNames && member.roleNames.length > 0 ? [member.roleNames[0]] : [],
    });
    setShowModal(true);
  };

  const handleUpdateMember = async () => {
    try {
      await jwtAxios.put(
        `http://43.201.20.172:8090/admin/members/${selectedMember.email}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      fetchMembers();
      setShowModal(false);
      setSelectedMember(null);
      setFormData({ email: "", pw: "", nickname: "", social: false, roleNames: [] });
    } catch (error) {
      console.error("멤버 수정 오류:", error);
    }
  };

  const handleDeleteMember = async () => {
    if (window.confirm("정말로 이 회원을 삭제하시겠습니까?")) {
      try {
        await jwtAxios.delete(`http://43.201.20.172:8090/admin/members/${selectedMember.email}`);
        fetchMembers();
        setShowModal(false);
        setSelectedMember(null);
        setFormData({ email: "", pw: "", nickname: "", social: false, roleNames: [] });
      } catch (error) {
        console.error("멤버 삭제 오류:", error);
      }
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  const startPage = Math.max(0, page - 2);
  const endPage = Math.min(totalPages - 1, page + 2);
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="member-list-container">
      <h2>회원 관리</h2>
      {/* 검색 폼 */}
      <form onSubmit={handleSearchSubmit} className="search-form">
          <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value="email">이메일</option>
            <option value="nickname">닉네임</option>
          </select>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="검색어 입력"
        />
        <button type="submit">검색</button>
      </form>

      {/* 회원 목록 테이블 */}
      <table>
        <thead>
          <tr>
            <th>이메일</th>
            <th>닉네임</th>
            <th>소셜 로그인</th>
            <th>권한</th>
            <th>보기</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.email}>
              <td>{member.email}</td>
              <td>{member.nickname}</td>
              <td>{member.social ? "예" : "아니오"}</td>
              <td>{member.roleNames && member.roleNames.join(", ")}</td>
              <td>
                <span onClick={() => openEditModal(member)}>수정</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div className="pagination">
        <button onClick={() => handlePageChange(0)} disabled={page === 0}>
          처음
        </button>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 0}>
          이전
        </button>

        {pageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={page === pageNum ? "active" : ""}
          >
            {pageNum + 1}
          </button>
        ))}

        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages - 1}>
          다음
        </button>
        <button onClick={() => handlePageChange(totalPages - 1)} disabled={page === totalPages - 1}>
          마지막
        </button>
      </div>

      {/* 수정/삭제 모달 */}
      {showModal && (
        <div className="admin-modal">
          <div className="admin-modal-content">
            <h3>회원 수정/삭제</h3>
            <form>
              <div>
                <span>이메일</span>
                <input type="email" name="email" value={formData.email} disabled />
              </div>
              <div>
                <span>비밀번호 (변경 시 입력, 미입력 시 기존 유지)</span>
                <input
                  type="password"
                  name="pw"
                  value={formData.pw}
                  onChange={handleInputChange}
                  placeholder="새 비밀번호"
                />
              </div>
              <div>
                <span>닉네임</span>
                <input
                  type="text"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <span>권한</span>
                <select
                  name="roleNames"
                  value={formData.roleNames[0] || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      roleNames: [e.target.value],
                    }))
                  }
                >
                  <option value="ADMIN">ADMIN</option>
                  <option value="MANAGER">MANAGER</option>
                  <option value="USER">USER</option>
                </select>
              </div>
              <div>
                <span>소셜 로그인</span>
                <input type="checkbox" name="social" checked={formData.social} disabled />
              </div>
            </form>
            <div className="modal-actions">
              <button onClick={handleDeleteMember}>삭제</button>
              <button onClick={handleUpdateMember}>수정</button>
              <span className="modal-close-btn" onClick={() => setShowModal(false)}>✖</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberList;
