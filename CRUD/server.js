const express = require("express");
const app = express();
const cors = require("cors");
const bp = require("body-parser");
const mongoose = require("mongoose");
require("./config");
require("dotenv").config();

const myController = require("./controller");

module.exports = function (app) {
  app.post("/api/login", myController.loginUser);
  app.get("/api/logout", myController.logoutUser);
};

const dbURI = process.env.DB_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log(process.env.PORT);
    console.log(`Database listening on ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log("error while connecting to db");
    console.log(err);
  });

const corsOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
require("./routes")(app);
app.get("/", (req, res) => {
  res.send("hello malek from crud");
});
