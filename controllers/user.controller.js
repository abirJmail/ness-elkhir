const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {

  const user = { ...req.body };
  const email = user.email;
  const searchRes = await User.findOne({ email });

  if (searchRes) return res.status(403).json({ msg: "Email already exist" });

  try {


    const newUser = await new User({ ...user });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;

    await newUser.save();

    res.status(201).json({ msg: "User added successfully" });


  } catch (error) {
    console.error("Error", error);
    res.status(401).json({ msg: "User register failed" });
  }
};

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ msg: "Bad credentiel" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ msg: "Bad credentiel" });

  const payload = {
    id: user._id,
    email: user.email,
    username: user.username,
    telephone: user.telephone,
    cin: user.cin,
    city: user.city,
    check: user.check,
  };

  try {
    const token = await jwt.sign(payload, process.env.SECRET_OR_KEY);

    res
      .status(202)
      .json({ msg: "Login with success", token: `Bearer ${token}` });
  } catch (error) {
    console.error("Login failed", error);
    res.status(400).json({ msg: "Login failed" });
  }
};