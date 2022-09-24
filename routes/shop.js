var router = require("express").Router();
router.get("/shirts", function (요청, 응답) {
	응답.send("셔츠 파는 페이지입니다.");
});
router.get("/pants", function (요청, 응답) {
	응답.send("바지 파는 페이지입니다.");
});
module.exports = router; // 다른 곳에서 shop.js를 쓰고싶을 때 내보내고 싶은 변수이름
