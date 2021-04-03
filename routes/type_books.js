var express = require('express');

const { get, show, create, update, del  } = require("../controller/type_books/index");
const { bookType,putBookType,runValidator, postValidator, putValidator } = require("../controller/type_books/validation");
const router = express.Router();

router.get("/", get);
router.get("/:id", show);
router.post("/", postValidator, runValidator,bookType, create);
router.put("/", putValidator, runValidator,putBookType, update);
router.delete("/", del);

module.exports = router;
