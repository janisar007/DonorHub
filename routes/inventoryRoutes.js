const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarController,
  getHospitalController,
  getOrganisationController,
} = require("../controllers/inventoryController");

const router = express.Router();

// Add Inventory || POST method
router.post("/create-inventory", authMiddleware, createInventoryController);

// Get Inventory || GET method
router.get("/get-inventory", authMiddleware, getInventoryController);

// Get Donar || GET method
router.get("/get-donar", authMiddleware, getDonarController);

// Get Hospitals || GET method
router.get("/get-hospital", authMiddleware, getHospitalController);

// Get Organisations || GET method
router.get("/get-organisation", authMiddleware, getOrganisationController);

module.exports = router;
