package org.spring.moviepj.config.ws.repository;

import java.util.List;

import org.spring.moviepj.config.ws.entity.AnswerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository extends JpaRepository<AnswerEntity, Long> {

  List<AnswerEntity> findAllByNoIn(List<Long> answerNos);
}

