const mongoose = require("mongoose");
require("dotenv").config();
const dbURI =
  "mongodb+srv://admin:admin@cluster0.gkmmv.mongodb.net/TodoApp?retryWrites=true&w=majority";

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
