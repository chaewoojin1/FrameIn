<p align="center">
  <img src="https://raw.githubusercontent.com/R2DSQUAD/movieproject_avengers/refs/heads/dev/frontpj/public/image/logo.png" alt="Frame In Logo" />
</p>
<p align="center">
  <strong>2025.02.14 ~ 2025.03.18</strong>
</p>

---

## 🎬 프로젝트 소개
**"내가 보고 싶은 영화, Frame In"**  
자동화된 영화 데이터와 실시간 예매 시스템을 제공하는 영화 포털 플랫폼입니다.

---

## 📌 주제
- 자동화된 영화 데이터 및 상영 스케줄 관리 시스템  
- 영화 전체 검색 포털 구현

---

## 💡 선정 배경
1. 기존 영화 예매 사이트는 수동으로 상영 일정을 등록하는 번거로움 존재  
2. 최신 영화 정보와 실시간 예매 시스템의 통합 필요

---

## 👥 서비스 사용자
- **일반 사용자** : 최신 박스오피스 순위 영화 예매  
- **영화관 관리자** : 영화 상영 일정 및 데이터 관리

---

## 🎯 개발 목적
1. 효율적인 영화 상영 스케줄 관리 시스템 구축  
2. 관리자 중심의 자동화 기능 제공  
3. 사용자 친화적인 실시간 영화 예매 시스템 구현

---

## 🔧 주요 기능
1. **자동화된 영화 상영 스케줄 관리**  
2. **실시간 영화 예매 기능**  
3. **영화 검색 포털 기능**  
4. **WebSocket, Komoran 기반 챗봇 기능**

---

## 🔍 벤치마킹
| 참고 사이트 |
|-------------|
| [메가박스](https://www.megabox.co.kr/) |
| [CGV](https://www.cgv.co.kr/) |
| [롯데시네마](https://www.lottecinema.co.kr/) |

- 기존 예매사이트 분석 및 핵심 기능 도출  
- UI 단순화 및 예매 프로세스 개선  
- 관리자 중심 스케줄 관리 시스템 분석  
- 날짜 선택 시 상영 영화 및 시간 필터링 기능 구현

---

## 👨‍💻 팀원 및 담당 파트

| 팀원 | 담당 파트 |
|------|-------------|
| 👩‍💻 김** (팀장) | DB 설계, OpenAPI, 장바구니 및 결제, Security (JWT/OAuth), CI/CD |
| 👨‍💻 강** | OpenAPI, 풀캘린더, 카카오맵 연동, 관리자 페이지 |
| 👨‍💻 강** | 디자인(CSS), Git 연동, 오류 점검, 초성 검색, 예외 처리 및 기능 추가, 밸리데이션 |
| 👨‍💻 채우진 | Security (JWT), WebSocket, Komoran, 게시판 CRUD, 관람평 기능 |

---

## 🗓 프로젝트 일정

| 주차 | 기간 | 주요 작업 |
|------|----------------|---------------------------|
| 1주차 | 2월 17일 ~ 2월 21일 | API 연동, 프론트엔드 UI 개발, 보안 설계 |
| 2주차 | 2월 24일 ~ 2월 28일 | 관리자 페이지 개발, WebSocket 연동 |
| 3주차 | 3월 4일 ~ 3월 10일 | 영화 스케줄링, 예매 시스템 구현 |
| 4주차 | 3월 11일 ~ 3월 15일 | 결제 시스템 구축, UI 디자인 보완 |
| 5주차 | 3월 17일 ~ 3월 21일 | 최종 점검, PPT 작성, 발표 준비 |

---

## 💻 개발 환경

### ✅ Tech Stack

| 분류 | 기술 스택 |
|------|------------|
| FrontEnd | HTML5, JavaScript, CSS, React, Redux, Redux Toolkit |
| BackEnd | Java, Spring, Spring Security, Gradle, WebSocket, JWT, KakaoPay, KakaoMap, KakaoTalk, TossPay, KGINICIS, TMDB, KOFIC, PortOne, MySQL |
| Tools | GitHub, Git, Notion, Docker, AWS, EC2, VSCode |

### ✅ Version

| 항목 | 버전 |
|------|--------|
| Java | 17.0.12 (2024-07-16 LTS) |
| React | 11.14.0 |

---

## ⭐프로젝트 시안

### 🔧 게시판 페이지 구현 
<details>
<summary>게시판 페이지 구현 시연 </summary>



https://github.com/user-attachments/assets/c551c904-4374-4239-af67-aeda5f1f5a16


◼ 로그인되어 있을 경우 본인 게시글 업로드,수정,삭제 가능 <br>
◼ 공지사항은 ADMIN만 작성 가능<br>
◼ 카테고리 클릭시 카테고리에 맞는 게시글 리스트 정렬(기본적으로 최신순)<br>
◼ 검색기능, 페이징 처리<br>
◼ 댓글 추가<br>
◼ 좋아요 기능(좋아요 누른 사용자 확인 가능)<br>
◼ 파일 처리<br>
◼ 댓글개수,조회수,파일여부 확인 가능
</details>

<br>

### 🔧 Chatbot 구현 
<details>
<summary>Chatbot 기능 시연 </summary>
  
https://github.com/user-attachments/assets/ae579b70-872b-4846-99b8-60ed7b7efe55


◼ Komoran을 사용한 챗봇 서비스<br>
◼ 영화 정보,영화관 위치 정보,도움말 제공<br>
◼ 사용자의 입력 문장에서 Komoran으로 명사를 추출, Data Base에서 추출한 명사가 포함된 정보를 제공<br>
◻ 예)추출한 명사에 영화가 있을 경우 MovieEntity에서 다음 명사가 포함된 데이터를 찾아 제공


</details>


<br>

### 🔧 Review 구현 
<details>
<summary>Review 페이지 시연 영상</summary>


https://github.com/user-attachments/assets/3cd37ab8-6e69-413e-ba6a-3b178669abe1

◼ 로그인 안되어 있을 시 리뷰 입력창 대신 로그인 하러 가기 링크<br>
◼ 평점 추가<br>
◼ 공감 버튼(공감 누른 사용자 확인 가능)<br>
◼ 중복 리뷰 작성 불가능<br>
◼ 본인 댓글,ADMIN만 리뷰 삭제 가능<br>
◼ 공감순,최신순 버튼(기본 최신순이며 공감개수가 같을시 더 최신 댓글이 위에서 부터 정렬)

</details>

<br>

### 🔧 ChatRoom 구현 
<details>
<summary>ChatRoom 시연 </summary>



https://github.com/user-attachments/assets/188e2580-7c05-41a4-94aa-42508064fe9c

◼ 로그인 되어있어야 접속 가능<br>
◼ WebSocket을 사용한 실시간 양방향 채팅 서비스<br>
◼ 로그아웃, 새로고침 해도 채팅 내역 남아있도록 Local Storage에 채팅내역 저장(ADMIN만 삭제 가능)<br>
◼ 본인 채팅 내역 확인 가능(Data Base에 저장)<br>
◼ 비속어 사용시 자동으로 필터링(Data Base에 필터링 없이 저장)

</details>

<br>

### 🔧 Security 구현 
<details>
<summary>Security(JWT) 시연 </summary>


https://github.com/user-attachments/assets/6c54345f-afbc-4cd7-8990-984334ae61fe

◼ 로그인시 LoginSuccessHandler에서 AccessToken,RefreshToken 발급 -> 쿠키에 저장 -> 백 서버에 데이터 요청시 쿠키에 저장된 AccessToken을 검증<br>
◼ AccessToken은 탈취당할 위험이 있어 유지기간이 짧음-> AccessToken이 만료된 경우 RefreshToken을 검증하여 AccessToken을 재발급<br>
◼ JwtAxios 사용

</details>

