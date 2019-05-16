const express = require("express");
const router = express.Router();

// User authentication for application state checks
router.get("/current_user", (req, res) => {
  res.send(req.user);
});

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
