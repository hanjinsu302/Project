const express = require("express");
const controller = require("../controller/Cmain.js");
/*controller = {
    main : () =>{}, //함수
    comments : () => {}//함수
}*/

const router = express.Router();

//const app = express();
// app.get

router.get("/", controller.main);
router.get("/comments", controller.comments);
router.get("/comment/:id", controller.comment);

module.exports = router;
//이게 없으면 모듈을 찾을 수 없다는 메세지 뜸
