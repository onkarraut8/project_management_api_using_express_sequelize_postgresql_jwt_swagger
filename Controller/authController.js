const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models'); //


exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already in use.' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user. '+ error });
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });

    
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials.' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials.' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in.'+ error });
  }
};


