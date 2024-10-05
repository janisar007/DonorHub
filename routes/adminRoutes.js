const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const {
  getDonarsListController,
  getHospitalsListController,
  getOrganisationsListController,
} = require("../controllers/adminController");

const router = express.Router();

//GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarsListController
);

//GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalsListController
);

//GET || ORGANISATION LIST
router.get(
  "/organisation-list",
  authMiddleware,
  adminMiddleware,
  getOrganisationsListController
);

module.exports = router;
