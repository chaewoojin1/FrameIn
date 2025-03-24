# 🛍Frame In

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
<summary> 타임라인</summary>

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

![게시판 페이지 시안영상](https://github.com/user-attachments/assets/6122f0a9-5e49-4094-801a-fe9230d65b5b)

- 로그인되어 있을 경우 본인 게시글 업로드,수정,삭제 가능
- 공지사항은 ADMIN만 작성 가능
- 카테고리 클릭시 카테고리에 맞는 게시글 리스트 정렬(기본적으로 최신순)
- 검색기능, 페이징 처리
- 댓글 추가(좋아요 기능)
- 파일 처리

</details>


<br>
### ✔ Chatbot 구현 ✔
<details>
<summary>Chatbot 구현 시연 영상</summary>
![chatBot](https://github.com/user-attachments/assets/fe60f6bd-6635-4dc0-97f2-3b7bed38385e)





</details>
<details>
<summary>Chatbot 구현 시안 설명</summary>

<img src="이미지주소" width="700" height="400"/>

- websocket은 기존의 단방향 HTTP프로토콜과 호환되어 양방향 통신을 제공하기 위해 개발된 프로토콜
- websocket 라이브러리를 주입하여 사용
- configureMessageBroker() 메서드는 메시지 브로커를 설정하고 /app2가 붙으면 서버로 전송, /topic이 붙으면 클라이언트에게 메세지 보내도록 활성화
- registerStompEndpoints() 메서드로 클라이언트와 서버간의 웹소켓 연결을 활성화

<img src="이미지주소" width="700" height="400"/>

- @MessageMapping() 주소로 메세지가 오면 해당 매서드가 구현되며 @Sendto() 주소로 클라이언트에게 전송
- 처음 소켓연결시 연결이 성공하면  /app2/hello주소로 메세지를 보내 hello메서드를 실행시키도록 하여 기업소개, 상품소개를 선택할수있게 했으며 이는 topic/greetings주소로 클라이언트에게 전송
-
<img src="이미지주소" width="700" height="400"/>

- 기업소개 또는 상품소개 버튼을 클릭시 /app2/message주소로 메세지를 보내 message매서드를 실행시켜 그에대한 응답내용이 나오도록 함

</details>
<br>
<br>

### ✔ Review 구현 ✔
<details>
<summary>Review 페이지 시연 영상</summary>

![리뷰1](https://github.com/user-attachments/assets/9a7887da-eca8-4454-8fc6-c8f740b666b0)


</details>
<details>
<summary>강사 소개 페이지 시안 설명</summary>

  <img src="이미지주소"  width="700" height="400"/>

- 강사 페이지는 모든 사용자가 선생님의 프로필을 볼수있도록 한 페이지

<img src="이미지주소"  width="700" height="400"/>

설명

</details>
<br>
<br>

### ✔ ChatRoom 구현 ✔
<details>
<summary>ChatRoom 시연 영상</summary>

![채팅방2](https://github.com/user-attachments/assets/3b8c8fd4-b0a8-4b53-ad1a-d0694dcc0b3d)


</details>
<details>
&nbsp;<summary>INDEX 애니메이션 기능 시안 설명</summary>

  <img src="이미지주소"  width="700" height="400"/>
</details>
<br>
<br>

### ✔ Security 구현 ✔
<details>
<summary>Security(JWT) 시연 영상</summary>

![JWT](https://github.com/user-attachments/assets/24e0317d-f9fb-4e08-8a53-beb38fa425fb)


</details>
<details>
&nbsp;<summary>INDEX 애니메이션 기능 시안 설명</summary>

  <img src="이미지주소"  width="700" height="400"/>
</details>
