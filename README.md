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
<summary>게시판 페이지 구현 시연 영상</summary>


![게시판 페이지 시안영상](https://github.com/user-attachments/assets/6122f0a9-5e49-4094-801a-fe9230d65b5b)


</details>

<details>
<summary>게시판 페이지 구현 시안 </summary>
<img src="https://github.com/user-attachments/assets/5599e421-7d35-4854-8cef-2c0e6b0e3ac6"  width="700" height="400"/>

- 카테고리 필터링 기능
```
 // 카테고리 버튼 클릭 시 카테고리 필터링
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    let filtered = [];
    if (category === "all") {
      filtered = boardList; // 모든 게시글을 다시 표시
    } else {
      filtered = boardList.filter((board) => board.category === category);
    }

    // 게시글을 createTime 또는 updateTime을 기준으로 최신순으로 정렬
    filtered.sort((a, b) => {
      const timeA = a.updateTime || a.createTime;
      const timeB = b.updateTime || b.createTime;
      return new Date(timeB) - new Date(timeA); // 최신순으로 정렬
    });

    setFilteredBoardList(filtered);
    setCurrentPage(1); // 카테고리 필터링 후 첫 페이지로 이동
  };
```
- 검색 기능
```
// 검색 버튼 클릭 시 필터링된 게시글 리스트 설정
  const handleSearch = () => {
    const filteredList = boardList.filter((board) => {
      switch (searchOption) {
        case "title":
          return board.title.toLowerCase().includes(searchQuery.toLowerCase());
        case "content":
          return board.content
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        case "nickname":
          return board.memberNickName.toLowerCase().includes(searchQuery.toLowerCase());
        default:
          return true;
      }
    });

```
- 페이징 처리
```
   const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages =
    filteredBoardList.slice(indexOfFirstMessage, indexOfLastMessage) || [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalMessages = filteredBoardList.length || 0;
  const totalPages = Math.ceil(totalMessages / messagesPerPage);

  const getPaginationRange = () => {
    const pageLimit = 5;
    const rangeStart =
      Math.floor((currentPage - 1) / pageLimit) * pageLimit + 1;
    const rangeEnd = Math.min(rangeStart + pageLimit - 1, totalPages);
    return { rangeStart, rangeEnd };
  };

  const { rangeStart, rangeEnd } = getPaginationRange();
```
</details>

<details>
<summary>게시글 작성 페이지 구현 시안 </summary>
<img src="https://github.com/user-attachments/assets/3a30e266-3c1a-4658-8283-b12a483c7e4d"  width="700" height="400"/>

- 게시글 작성 핸들러

```
// 폼 제출 처리 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData 객체 생성
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category); // 카테고리 추가
    formData.append("email", loginState.email); // Redux에서 이메일 가져오기
    if (itemFile) {
      formData.append("itemFile", itemFile);
    }

    try {
      // 서버로 데이터 전송 (Content-Type을 명시하지 않음)
      const response = await jwtAxios.post(
        "http://localhost:8090/board/insert",
        formData,
        {
          // "Content-Type"을 명시하지 않으면 브라우저가 자동으로 multipart/form-data로 설정해줌
        }
      );
      // 성공 메시지 처리
      setMessage(response.data);
    } catch (error) {
      // 에러 처리
      setMessage("아이템 추가에 실패했습니다.");
      console.error("Error:", error);
    }
    navigate("/board");
  };
```
</details>
<details>
<summary>게시글 수정 페이지 구현 시안 </summary>
<img src="https://github.com/user-attachments/assets/6c82fa4e-e6d7-4937-9ec9-78dc617f5531"  width="700" height="400"/>

- 게시글 데이터 미리 입력

```
useEffect(() => {
    if (id) {
      const fetchBoardDetail = async () => {
        try {
          const response = await jwtAxios.get(
            `http://localhost:8090/board/detail/${id}`
          );
          setTitle(response.data.title);
          setCategory(response.data.category);
          setContent(response.data.content);
          setItemFile(response.data.itemFile); // If there's an existing file
          setOriginFileName(response.data.itemFile);
          setLoading(false);
        } catch (err) {
          console.error("게시글 상세 정보 불러오기 실패", err);
          setError("게시글 상세 정보를 불러오는 데 실패했습니다.");
          setLoading(false);
        }
      };
      fetchBoardDetail();
    } else {
      setLoading(false); // If there's no id, stop loading
    }
  }, [id]);
```

- 게시글 수정 핸들러

```
const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("email", loginState.email); // Email from login state
    if (itemFile) {
      formData.append("itemFile", itemFile); // Add the file if any
    }formData.append("originFileName", originFileName);

    try {
      // Send data to the server (Content-Type handled automatically by FormData)
      const response = await jwtAxios.post(
        "http://localhost:8090/board/update",
        formData
      );
      setMessage(response.data);
    } catch (error) {
      setMessage("게시글 수정에 실패했습니다.");
      console.error("Error:", error);
    }
    navigate("/board");
  };
```
- Update 파일 처리
```
   @Override public void boardUpdate(BoardDto boardDto) throws IOException {
    // 1. 게시글 확인
    Optional<BoardEntity> optionalBoardEntity = boardRepository.findById(boardDto.getId());
    if (!optionalBoardEntity.isPresent()) {
        throw new IllegalArgumentException("Fail!-> 상품 !");
    }
    
    // 2. 파일 체크
    Optional<BoardImgEntity> optionalBoardImgEntity = 
        boardImgRepository.findByBoardEntity(BoardEntity.builder().id(boardDto.getId()).build());
    
    if (optionalBoardImgEntity.isPresent()) {
        String newImgName = optionalBoardImgEntity.get().getNewImgName();
        String saveFilePath = "E:/saveFiles/" + newImgName; // 로컬 저장이름
        File deleteFile = new File(saveFilePath);
        if (deleteFile.exists()) {
            deleteFile.delete(); // 파일 삭제 -> 로컬 파일 삭제
            System.out.println("파일을 삭제하였습니다.");
        } else {
            System.out.println("파일이 존재하지 않습니다.");
        }
        // DB파일 삭제
        boardImgRepository.deleteById(optionalBoardImgEntity.get().getId());
    }

    // 3. 게시글 수정
    Optional<MemberEntity> optionalMemberEntity = memberRepository.findByEmail(boardDto.getEmail());
    if (!optionalMemberEntity.isPresent()) {
        throw new IllegalArgumentException("Fail -> 회원아이디!");
    }

    // 파일이 없을 경우와 있을 경우에 따라 처리
    MultipartFile itemFile = boardDto.getItemFile(); // 파일을 받음

    // 파일이 null이거나 비어있으면 게시글만 수정
    if (itemFile == null || itemFile.isEmpty()) {
        BoardEntity boardEntity = BoardEntity.toUpdateBoardEntity(boardDto);
        boardRepository.save(boardEntity);
        System.out.println("파일 없이 게시글만 수정되었습니다.");
    } else {
        // 파일이 있을 경우에는 새로 저장
        String oldImgName = itemFile.getOriginalFilename(); // 원본이미지명
        System.out.println("원본이미지: " + oldImgName);
        UUID uuid = UUID.randomUUID();
        String newImgName = uuid + "_" + oldImgName;
        System.out.println("newImgName: " + newImgName);
        String saveFilePath = "E:/saveFiles/" + newImgName; // 로컬 저장이름
        itemFile.transferTo(new File(saveFilePath)); // 로컬 저장

        // 게시글 정보 업데이트
        BoardEntity boardEntity = BoardEntity.toUpdateFileBoardEntity(boardDto);
        Long itemId = boardRepository.save(boardEntity).getId();
        
        // 상품 이미지 정보 저장 (이미지 테이블)
        Optional<BoardEntity> optionalBoardEntity2 = boardRepository.findById(itemId);
        if (!optionalBoardEntity2.isPresent()) {
            throw new IllegalArgumentException("Fail!-> 상품 !");
        }
        
        BoardImgDto boardImgDto = BoardImgDto.builder()
            .newImgName(newImgName)
            .oldImgName(oldImgName)
            .boardEntity(optionalBoardEntity2.get())
            .build();
        
        BoardImgEntity boardImgEntity = BoardImgEntity.toBoardImgEntity(boardImgDto);
        Long boardId2 = boardImgRepository.save(boardImgEntity).getId();
        updateHit(boardId2); // 조회수 업데이트
    }
}
```
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
