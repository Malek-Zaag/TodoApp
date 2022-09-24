const { User } = require("./model");
const jwt = require("jsonwebtoken");

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await User.login(email.password);
    if (user) {
      const token = createToken(user._id);
      res.cookie("jwt", token, { maxAge: maxAge * 1000 });
      res.status(200).send(user);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.logoutUser = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
