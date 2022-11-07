var express = require('express');
var router = express.Router();
const userCtrl = require("../controllers/controllers");


router.get("/", userCtrl.getAllusers);
router.post("/", userCtrl.createUser);
router.get("/:id", userCtrl.getUserById);
router.put("/:id", userCtrl.updateUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
