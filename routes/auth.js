const passport = require("passport");
const express = require("express");
const router = express.Router();

// Login Routes with Google OAuth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/surveys");
});

// User authentication for application state checks
router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

// Logout
router.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
