const express = require('express');
const { createTask, updateTask, getTasksForProject } = require('../Controller/taskController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /api/tasks/projects/{projectId}/tasks:
 *   post:
 *     tags:
 *       - Task  # This groups the route under the "Task" section
 *     summary: Create a new task for a specific project
 *     description: This endpoint allows the authenticated user to create a new task for a specific project.
 *     security:
 *       - BearerAuth: []  # Indicates that the route requires JWT authentication
 *     parameters:
 *       - name: projectId
 *         in: path
 *         required: true
 *         description: ID of the project to which the task belongs
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - status
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum:
 *                   - 'To Do'
 *                   - 'In Progress'
 *                   - 'Done'
 *                 default: 'To Do'
 *     responses:
 *       200:
 *         description: Task created successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Project not found
 *       500:
 *         description: Server error
 */
router.post('/projects/:projectId/tasks', authMiddleware, createTask);


/**
 * @swagger
 * /api/tasks/tasks/{id}:
 *   put:
 *     tags:
 *       - Task  # This groups the route under the "Task" section
 *     summary: Update an existing task
 *     description: This endpoint allows the authenticated user to update an existing task.
 *     security:
 *       - BearerAuth: []  # Indicates that the route requires JWT authentication
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the task to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum:
 *                   - 'To Do'
 *                   - 'In Progress'
 *                   - 'Done'
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Task not found
 *       500:
 *         description: Server error
 */
router.put('/tasks/:id', authMiddleware, updateTask);

/**
 * @swagger
 * /api/tasks/projects/{projectId}/tasks:
 *   get:
 *     tags:
 *       - Task  # This groups the route under the "Task" section
 *     summary: Get all tasks for a specific project
 *     description: This endpoint retrieves all tasks that are associated with a given project.
 *     security:
 *       - BearerAuth: []  # Indicates that the route requires JWT authentication
 *     parameters:
 *       - name: projectId
 *         in: path
 *         required: true
 *         description: ID of the project whose tasks are to be fetched
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of tasks for the project
 *       404:
 *         description: Project not found
 *       500:
 *         description: Server error
 */
router.get('/projects/:projectId/tasks', authMiddleware, getTasksForProject);

module.exports = router;
