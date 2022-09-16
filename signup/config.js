const mongoose = require("mongoose");
require("dotenv").config();
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
