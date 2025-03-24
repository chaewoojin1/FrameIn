package org.spring.moviepj.dto;

import java.time.LocalDateTime;

import org.spring.moviepj.entity.CartEntity;
import org.spring.moviepj.entity.PaymentEntity;
import org.spring.moviepj.entity.ScreeningEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartItemDto {

    private Long id;

    private Long cartId;
    private CartEntity cartEntity;

    private String seatNumber;

    private int price;

    private Long screeningId;
    private String screeningDate;
    private String screeningTime;
    private ScreeningEntity screeningEntity;

    private String poster_path;
    private String movieNm;
    private String theaterName;
    private String cinemaName;

    private Long paymentId;
    private PaymentEntity paymentEntity;

    private int status;

    private LocalDateTime createTime;

    private LocalDateTime updateTime;

}