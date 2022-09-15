const myController = require("./controller");

module.exports = function (app) {
  app.post("/signup", myController.createUser);
};
