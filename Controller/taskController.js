const { Task, Project } = require('../models'); // Sequelize models

// Create a new task for a project
const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const projectId = req.params.projectId;
    console.log(projectId);
    const project = await Project.findByPk(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }

    const task = await Task.create({
      title,
      description,
      status,
      projectId, // Associate task with project
    });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error creating task.' });
  }
};


const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, status } = req.body;
    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;

    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error updating task.' });
  }
};


const getTasksForProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const project = await Project.findByPk(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }

    const tasks = await Task.findAll({
      where: { projectId },
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving tasks.' });
  }
};

module.exports = {
  createTask,
  updateTask,
  getTasksForProject,
};
