const { User } = require('../models'); 

// Create a new project
const viewUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error in retriving users.' });
  }
};


const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'user not found.' });
    }


    await user.destroy();
    res.status(200).json({ message: 'user deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user.' });
  }
};

module.exports = {
    viewUsers, deleteUser,
};
