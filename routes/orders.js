var express = require('express');

const { create, get } = require("../controller/transactions/index");
const router = express.Router();

router.get("/users", get);
router.post("/", create);

module.exports = router;
