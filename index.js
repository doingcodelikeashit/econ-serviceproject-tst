const userRoutes = require("./user/userRoutes");
const adminRoutes = require("./adminRoutes");
const express = require("express");
const router = express.Router();
router.use("/user", userRoutes);
router.use("/admin", adminRoutes);
module.exports = router;
