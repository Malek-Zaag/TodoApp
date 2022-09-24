const { User } = require("./model");
const jwt = require("jsonwebtoken");

const maxAge = 700 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "secretkey", {
    expiresIn: maxAge,
  });
};
module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.login(email, password);
  if (user) {
    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge: maxAge * 1000 });
    res.status(200).send(user);
    console.log("user found");
  } else {
    res.status(400);
    res.send("error happened");
  }
};

module.exports.logoutUser = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200);
  res.send("logout success  ");
};
