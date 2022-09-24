const express = require("express");
const app = express();
const cors = require("cors");
const bp = require("body-parser");
require("./config");
require("dotenv").config();

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
  res.send("hello malek from backend2");
});
