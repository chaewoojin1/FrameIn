package org.spring.moviepj.controller;

import java.util.List;
import org.spring.moviepj.entity.MovieEntity;
import org.spring.moviepj.entity.TrailerEntity;
import org.spring.moviepj.repository.MovieRepository;
import org.spring.moviepj.repository.TrailerRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class OpenApiMovieRestController {
  private final MovieRepository movieRepository;
  private final TrailerRepository trailerRepository;

  @GetMapping("/boxOfficeList")
  public List<MovieEntity> boxOfficeList() {

    return movieRepository.findLatestTop10Movies();
  }

  @GetMapping("/trailerList")
  public List<TrailerEntity> trailerList() {
    return trailerRepository.findLatestMovieTrailers(); // 모든 박스오피스 트레일러 데이터 조회
  }
}
