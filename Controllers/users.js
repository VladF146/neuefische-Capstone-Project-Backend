import dotenv from 'dotenv';

import bcrypt from 'bcryptjs';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import User from '../Models/users.js';

dotenv.config();

const generateJWT = (id) => {
  const token = jwt.sign(
    { id },
    process.env.MY_JWT_SECRET || 'S2T7iqfnSIL1RWP9N8BCCs5jEgDwYRJ0ZbzNA6XF43dO',
    { expiresIn: '24h' },
  );
  return token;
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) return res.status(400).json({ error: 'Email is required!' });
    if (!password) { return res.status(400).json({ error: 'Password is required!' }); }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ error: 'No user with such an email exists!' });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) { return res.status(400).json({ error: 'Password is wrong!' }); }

    const token = generateJWT(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) return res.status(400).json({ error: 'Email is required!' });
    if (!validator.isEmail(email)) { return res.status(400).json({ error: 'Email is not valid.' }); }

    if (!password) { return res.status(400).json({ error: 'Password is required!' }); }
    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return res.status(400).json({
        error:
          'Password should be at least 8 characters long and contain at least one of each: Lower case letter, upper case letter, symbol.',
      });
    }

    let user = await User.findOne({ email });

    if (user) { return res.status(409).json({ error: 'Email address is already used!' }); }

    const hash = await bcrypt.hash(password, 10);

    user = await User.create({ email, password: hash });

    const token = generateJWT(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { signin, signup };
