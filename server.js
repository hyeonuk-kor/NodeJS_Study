const fs = require("fs");
// 서버를 띄우기 위한 기본 셋팅
const express = require("express"); //express 라이브러리 셋팅
const app = express(); //객체 만들기
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;

const jsonfile = fs.readFileSync("./password.json");
const password = JSON.parse(jsonfile).value;
let db;
MongoClient.connect(
	"mongodb+srv://hyeonuk:" +
		password +
		"@cluster0.2onwa9n.mongodb.net/?retryWrites=true&w=majority",
	function (에러, client) {
		if (에러) return console.log(에러);
		db = client.db("petpy_db");
		db.collection("post").insertOne(
			{ 이름: "John", 나이: 20 },
			function (에러, 결과) {
				console.log("저장완료");
			}
		);
		app.listen(8080, function () {
			console.log("listening on 8080");
		});
	}
);

// 누군가 /pet으로 방문하면 pet관련된 안내문을 띄워주자.
app.get("/pet", function (요청, 응답) {
	응답.send("펫 용품을 살 수 있는 페이지입니다.");
});

app.get("/beauty", function (요청, 응답) {
	응답.send("뷰티용품사세요");
});

app.get("/", function (요청, 응답) {
	응답.sendFile(__dirname + "/index.html");
});
app.get("/write", function (요청, 응답) {
	응답.sendFile(__dirname + "/write.html");
});

app.post("/add", function (요청, 응답) {
	응답.send("전송완료");
	db.collection("post").insertOne(
		{ 제목: 요청.body.title, 날짜: 요청.body.date },
		function () {
			console.log("저장완료");
		}
	);
});
