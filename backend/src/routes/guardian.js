const express = require("express");
const guardianController = require("../controllers/guardian");
const validator = require("../utils/validator");

const router = express.Router();

router.get("/list", validator.guardianController.getList, guardianController.getList);
router.get("/detail/:articleId(*)", validator.guardianController.getDetail, guardianController.getDetail);

module.exports = router;