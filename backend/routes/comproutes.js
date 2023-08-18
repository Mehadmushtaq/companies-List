const express = require("express");
const router = express.Router();
const {
  addCompany,
  getCompanies,
  getCompany,
  delCompany,
  updateCompany,
} = require("../controllers/companyController");

// GET all companies details
router.get("/", getCompanies);

// GET single company details
router.get("/:id", getCompany);

// Post a new company details
router.post("/", addCompany);

// Delete single company details
router.delete("/:id", delCompany);

// Update single company details
router.patch("/:id", updateCompany);

module.exports = router;
