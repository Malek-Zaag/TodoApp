const myController = require("./controller");

module.exports = function (app) {
  app.post("/api/signup", myController.createUser);
};
