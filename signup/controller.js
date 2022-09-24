const { User } = require("./model");
const jwt = require("jsonwebtoken");

module.exports.createUser = (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  console.log(firstname, lastname, email, password);
  User.findOne({ email })
    .then((response) => {
      console.log(response);
      if (response == null) {
        User.create({
          firstname,
          lastname,
          email,
          password,
        })
          .then((response) => {
            res.send("User added successfully to database");
            res.status(200);
          })
          .catch((err) => console.log(err));
      } else {
        res.status(400);
        res.send("User found in database");
      }
    })
    .catch((err) => console.log(err));
};
