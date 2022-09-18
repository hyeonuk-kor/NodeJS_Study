// 서버를 띄우기 위한 기본 셋팅
const express = require("express"); //express 라이브러리 셋팅
const app = express(); //객체 만들기

app.listen(8080, function () {
	// 포트번호, 띄운 후 실행할 코드
	console.log("listening on 8080"); // 8080 port로 웹서버를 만들고 들어오면 해당 문장 실행
});

// 누군가 /pet으로 방문하면 pet관련된 안내문을 띄워주자.
app.get("/pet", function (요청, 응답) {
	응답.send("펫 용품을 살 수 있는 페이지입니다.");
});

app.get("/beauty", function (요청, 응답) {
	응답.send("뷰티용품사세요");
});
