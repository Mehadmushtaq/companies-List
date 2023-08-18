const Company = require("../models/companyModel");
const mongoose = require("mongoose");

//get all companies

const getCompanies = async (req, res) => {
  const company = await Company.find({}).sort({ createdAt: -1 });
  res.status(200).json(company);
};

//get specific company detail
const getCompany = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Company Found" });
  }

  const company = await Company.findById(id);

  if (!company) {
    return res.status(404).json({ error: "No Company Found" });
  }
  res.status(200).json(company);
};

//add new company details
const addCompany = async (req, res) => {
  const { name, industry, size, headQuarter, founded } = req.body;
  try {
    const company = await Company.create({
      name,
      industry,
      size,
      headQuarter,
      founded,
    });
    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete specific company details

const delCompany = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Company Found" });
  }

  const company = await Company.findOneAndDelete({ _id: id });

  if (!company) {
    return res.status(404).json({ error: "No Company Found" });
  }
  res.status(200).json(company);
};

//update company
const updateCompany = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Company Found" });
  }

  const company = await Company.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!company) {
    return res.status(404).json({ error: "No Company Found" });
  }
  res.status(200).json(company);
};

module.exports = {
  addCompany,
  getCompanies,
  getCompany,
  delCompany,
  updateCompany,
};
