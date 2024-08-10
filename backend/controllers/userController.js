const User = require("../models/User");

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({ name, email, password, role });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
};

const getUsers = async (req, res) => {
  const allUser = await User.find();

  res.status(201).json(allUser);
};

module.exports = { createUser, getUsers };
