const bcrypt = require("bcryptjs");
const { isEmail, isStrongPassword } = require("validator");

const User = require("../Models/users");

const signin = async (req, res) => {
  res.json({ message: "Signed in!" });
};

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) throw Error("Email is required!");
    if (!isEmail(email)) throw new Error("Email is not valid.");

    if (!password) throw Error("Password is required!");
    if (!isStrongPassword(password)) throw new Error("Password is not strong.");

    let user = await User.findOne({ email });

    if (user) throw Error("Email address is already used!");

    const hash = await bcrypt.hash(password, 10);

    user = await User.create({ email, password: hash });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signin, signup };
