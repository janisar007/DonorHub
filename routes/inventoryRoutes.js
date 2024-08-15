const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

// Add Inventory || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

// Get Inventory || GET
router.get("/get-inventory", authMiddleware, getInventoryController);

module.exports = router;
