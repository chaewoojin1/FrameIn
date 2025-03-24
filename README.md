# 🎞Frame In🎞

<br>
~~ <span style="background-color: #F7BE81; color:black">~~~</span>입니다.


~~ <br>
~~<br>
~~<br>

~~ <br>
~~
<br>


## 📌 목차

* [🔎프로젝트 소개](#프로젝트-소개)
  + [✔ 프로젝트 기본설정 ✔](#프로젝트-기본설정)
  + [✔ 기술스택 ✔](#프로젝트-기본설정)
  + [✔ 팀원소개 ✔](#Chatbot-구현)
  + [✔ 팀원소개 ✔](#팀원소개)
  + [✔ DB설계 ✔](#DB설계)
* [⭐프로젝트 시안](#프로젝트-시안)
    + [✔ 게시판 페이지 구현 ✔](#-게시판-페이지-구현-)
    + [✔ Chatbot 구현 ✔](#-chatbot-구현-)
    + [✔ Review 구현 ✔](#-Review-구현-)
    + [✔ ChatRoom 구현 ✔](#-ChatRoom-구현-)
    + [✔ Security 구현 ✔](#-Security-구현-)

<br>

## 🔎프로젝트 소개

<details>
<summary>프로젝트 기본설정</summary>

|제목|내용|
|------|---|
|일정|2025/2/14~2025/3/18|
|주제|영화 예매 사이트|
|프로젝트명|Frame In|
|프로그래밍 언어|JAVA|
|프레임워크|Springboot|
|데이터베이스|MySql8|
|개발툴|


</details>

<details>
<summary> 팀원소개</summary>

<table>
  <tbody>
    <tr>
      <th align="center"><a href=""><img src="이미지주소" width="100px;" alt=""/><br /><sub><b>FE 팀장 : 박**</b></sub></a><br /></th>
</tr>
<tr>

<td>DB설계, 회원CRUD(개인정보), <br>OAuth2, Security </td>
<td> 관리자페이지<br>, Chatbot, <br>강사소개 페이지, <br>INDEX 애니메이션 기능 </td>
<td> 상품목록, 상품상세,<br> 장바구니(시간표), 구매, <br>구매리스트 </td>
<td> 게시판 CRUD,<br> exception </td>
<td> INDEX 페이지 CSS ,<br>1:1 문의내역, 덧글</td>
</tr>
  </tbody>
</table>



</details>

<details>
<summary>타임라인</summary>

![Image](https://github.com/user-attachments/assets/bff463eb-d34f-4a3a-b847-57b2873b754a)

</details>

<details>
<summary> DB설계 </summary>

![Image](https://github.com/user-attachments/assets/52ef9b51-7ebc-4282-93cb-f7a5401e548d)

</details>
<br>

## ⭐프로젝트 시안

### ✔ 게시판 페이지 구현 ✔
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

### ✔ Chatbot 구현 ✔
<details>
<summary>Chatbot 기능 시연 </summary>
  
https://github.com/user-attachments/assets/ae579b70-872b-4846-99b8-60ed7b7efe55


◼ Komoran을 사용한 챗봇 서비스<br>
◼ 영화 정보,영화관 위치 정보,도움말 제공<br>
  
◼ 사용자의 입력 문장에서 Komoran으로 명사를 추출, Data Base에서 추출한 명사가 포함된 정보를 제공<br>
◻ 예)추출한 명사에 영화가 있을 경우 MovieEntity에서 다음 명사가 포함된 데이터를 찾아 제공


</details>


<br>

### ✔ Review 구현 ✔
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

### ✔ ChatRoom 구현 ✔
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

### ✔ Security 구현 ✔
<details>
<summary>Security(JWT) 시연 </summary>


https://github.com/user-attachments/assets/6c54345f-afbc-4cd7-8990-984334ae61fe

◼ 로그인시 LoginSuccessHandler에서 AccessToken,RefreshToken 발급 -> 쿠키에 저장 -> 백 서버에 데이터 요청시 쿠키에 저장된 AccessToken을 검증<br>
◼ AccessToken은 탈취당할 위험이 있어 유지기간이 짧음-> AccessToken이 만료된 경우 RefreshToken을 검증하여 AccessToken을 재발급<br>
◼ JwtAxios 사용

</details>

