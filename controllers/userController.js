import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

const authUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    res.send('Invalid username or password');
  }
};

const registerUser = async (req, res) => {
  const { name, username, email, password } = req.body;

  const userExists = await User.findOne({ email, username });

  if (userExists) {
    res.status(400);
    res.send('Invalid username or password');
  }

  const user = await User.create({
    name,
    username,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    res.send('Error creating user');
  }
};

const getUserByEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(401);
    res.send('Not Found');
  }
};

export { authUser, registerUser, getUserByEmail };
