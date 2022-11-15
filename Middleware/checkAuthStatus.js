import dotenv from "dotenv";

import jwt from "jsonwebtoken";
import User from "../Models/users.js";

dotenv.config();

const checkAuthStatus = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ error: "You must be logged in to make this request!" });
  }

  try {
    const { id } = jwt.verify(
      token,
      process.env.MY_JWT_SECRET ||
        "S2T7iqfnSIL1RWP9N8BCCs5jEgDwYRJ0ZbzNA6XF43dO"
    );

    if (!id) {
      return res.status(401).json({ error: "Token could not be verified!" });
    }

    const user = await User.findOne({ _id: id });
    req.userId = user.id;

    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export default checkAuthStatus;
