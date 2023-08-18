const mongoose = require("mongoose");
const schema = mongoose.Schema;

//create schema: structure of document
const companySchema = new schema(
  {
    //defination
    name: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    headQuarter: {
      type: String,
      required: true,
    },
    founded: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } //timestamps(created at etc)
);

//export module: apply schema to module
module.exports = mongoose.model("company", companySchema);
