const express = require("express")
const app = express()
const cors = require("cors")

const corsOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});


app.get("/", (req, res) => {
  res.send("hello malek from backend")
})