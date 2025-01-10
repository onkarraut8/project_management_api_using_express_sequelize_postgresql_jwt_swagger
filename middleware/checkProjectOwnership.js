const { Project } = require('../models');

const checkProjectOwnership = async (req, res, next) => {
    try {
      const projectId = req.params.id;  // Get project ID from route params
      const project = await Project.findByPk(projectId);
  
      if (!project) {
        return res.status(404).json({ error: 'Project not found.' });
      }
  
      // Check if the logged-in user is the owner of the project
      if (project.ownerId !== req.user.id) {
        return res.status(403).json({ error: 'You do not have permission to access this project.' });
      }
  
      next();  // Proceed to next middleware or route handler
    } catch (error) {
      res.status(500).json({ error: 'Error checking project ownership.' });
    }
  };
  
  module.exports = { checkProjectOwnership };
  