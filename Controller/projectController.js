const { Project } = require('../models'); 

// Create a new project
const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const project = await Project.create({
      name,
      description,
      ownerId: req.user.id,  
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error creating project.' });
  }
};


const updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const { name, description } = req.body;
    const project = await Project.findByPk(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }

    // Only the owner can update the project
    if (project.ownerId !== req.user.id) {
      return res.status(403).json({ error: 'You do not have permission to update this project.' });
    }

    project.name = name || project.name;
    project.description = description || project.description;

    await project.save();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error updating project.' });
  }
};


const deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findByPk(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }

    // Only the owner can delete the project
    if (project.ownerId !== req.user.id) {
      return res.status(403).json({ error: 'You do not have permission to delete this project.' });
    }

    await project.destroy();
    res.status(200).json({ message: 'Project deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting project.' });
  }
};

module.exports = {
  createProject,
  updateProject,
  deleteProject,
};
