const User = require("../Models/users");

const signin = async (req, res) => {
  res.json({ message: "Signed in!" });
};
const signup = async (req, res) => {
  res.json({ message: "Signed up!" });
};

module.exports = { signin, signup };
