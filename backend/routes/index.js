const express = require("express");
const router = express.Router();

const profileController = require("../controllers").profile;
const userController = require("../controllers").user;
const cryptoController = require("../controllers").crypto;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* Profile Router */
router.get("/api/profile", profileController.list);
router.get("/api/profile/:id", profileController.getById);
router.post("/api/profile", profileController.add);
router.put("/api/profile/:id", profileController.update);
router.delete("/api/profile/:id", profileController.delete);

/* User Router */
router.get("/api/user", userController.list);
router.get("/api/user/:id", userController.getById);
router.post("/api/user", userController.add);
router.put("/api/user/:id", userController.update);
router.delete("/api/user/:id", userController.delete);

/* User Role */
router.get("/api/crypto", cryptoController.list);
router.get("/api/crypto/:id", cryptoController.getById);
router.post("/api/crypto", cryptoController.add);
router.put("/api/crypto/:id", cryptoController.update);
router.delete("/api/crypto/:id", cryptoController.delete);

/* Advance Router */
router.post("/api/cypro/add_user", cryptoController.addUser);

module.exports = router;
