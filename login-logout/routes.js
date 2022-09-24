const myController = require("./controller");

module.exports = function (app) {
  app.post("/api/login", myController.loginUser);
  app.get("/api/logout", myController.logoutUser);
};
