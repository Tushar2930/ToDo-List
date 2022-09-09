
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home-controller");
const List = require("../models/list");

console.log("Router Loaded");
router.get('/', homeController.home);
router.post('/create', homeController.create);
router.get('/delete', homeController.delete);
router.get('/reset', homeController.reset);

module.exports = router;