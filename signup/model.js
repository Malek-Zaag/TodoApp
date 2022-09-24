const mongoose = require("mongoose");
const md5 = require("md5");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "please enter a first name"],
  },
  lastname: {
    type: String,
    required: [true, "please enter a last name"],
  },
  email: {
    type: String,
    required: [true, "please enter an email"],
    lowercase: true,
    unique: [true, "please enter another email"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minlength: [6, "minimum password length is 6 "],
  },
});

userSchema.pre("save", async function (next) {
  this.password = md5(this.password);
  next();
});
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    var auth;
    if (md5(password) === user.password) auth = true;
    else auth = false;
    if (auth) {
      return user;
    }
    throw Error("Incorrect password");
  }
  throw Error("We cannot find this email");
};

module.exports.User = mongoose.model("User", userSchema);
