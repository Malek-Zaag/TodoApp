const { User } = require("./model");

module.exports.createUser = (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  console.log(firstname, lastname, email, password);
  User.findOne({ email: email })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  User.create({
    firstname,
    lastname,
    email,
    password,
  })
    .then((response) => res.send("user added successfully to database"))
    .catch((err) => console.log(err));
};
