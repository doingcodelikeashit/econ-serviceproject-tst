const express = require("express");
const { authenticateJWT } = require("../middleware/auth");
const {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} = require("./orderController");
const validateRequest = require("../middleware/validationMiddleware");
const createOrderSchema = require("./orderSchema");
const router = express.Router();
router.post(
  "/createorder",
  validateRequest(createOrderSchema),
  authenticateJWT(),
  createOrder
);
router.get("/getorders", authenticateJWT(), getOrders);
router.post("/updateorder", authenticateJWT(["admin"]), updateOrder);
router.delete("/deleteorder", authenticateJWT(["admin"]), deleteOrder);
module.exports = router;