const { User } = require("./model");

module.exports.createUser = (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  console.log(firstname, lastname, email, password);
  const user = User.findOne({ email: email })
    .then((response) => {
      console.log(response);
      res.status(400);
      res.send("User found in database");
    })
    .catch((err) => console.log(err));
  if (!user) {
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
  }
};
