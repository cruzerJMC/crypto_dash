const express = require("express");
const router = express.Router();
const coinListController = require("../controllers/coinlist");

router.get("/", coinListController.getCoins);

module.exports = router;
