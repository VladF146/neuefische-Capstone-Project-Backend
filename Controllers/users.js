const bcrypt = require("bcryptjs");
const { isEmail, isStrongPassword } = require("validator");
const jwt = require("jsonwebtoken");
const User = require("../Models/users");

const generateJWT = (id) => {
  const token = jwt.sign(
    { id },
    "S2T7iqfnSIL1RWP9N8BCCs5jEgDwYRJ0ZbzNA6XF43dO" //TODO: 
  );
  return token;
};

const signin = async (req, res) => {
  res.json({ message: "Signed in!" });
};

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) throw Error("Email is required!");
    if (!isEmail(email)) throw new Error("Email is not valid.");

    if (!password) throw Error("Password is required!");
    if (
      !isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    )
      throw new Error(
        "Password should be at least 8 characters long and contain at least one of each: Lower case letter, upper case letter, symbol."
      );

    let user = await User.findOne({ email });

    if (user) throw Error("Email address is already used!");

    const hash = await bcrypt.hash(password, 10);

    user = await User.create({ email, password: hash });

    const token = generateJWT(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signin, signup };
