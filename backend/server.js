const express = require("express");
require("dotenv").config();
const routes = require("./routes/comproutes");
const mongoose = require("mongoose");

const app = express();

app.use(express.json()); //parse JSON data available in the req.body property

//route
app.use("/api/company/", routes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen requrest
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening to port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
