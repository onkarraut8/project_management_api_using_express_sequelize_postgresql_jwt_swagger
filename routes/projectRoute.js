const express = require('express');
const { createProject, updateProject, deleteProject } = require('../Controller/projectController');
const { checkProjectOwnership } = require('../middleware/checkProjectOwnership');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /api/projects:
 *   post:
 *     tags:
 *       - Project  # This groups the route under the "Project" section
 *     summary: Create a new project
 *     description: This endpoint allows the authenticated user to create a new project.
 *     security:
 *       - BearerAuth: []  # Indicates the route requires JWT authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Project created successfully
 *       500:
 *         description: Server error
 */
router.post('/', authMiddleware, createProject);

/**
 * @swagger
 * /api/projects/{id}:
 *   put:
 *     tags:
 *       - Project  # This groups the route under the "Project" section
 *     summary: Update an existing project
 *     description: This endpoint allows the authenticated user to update an existing project. Only the owner can update the project.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the project to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Project updated successfully
 *       404:
 *         description: Project not found
 *       403:
 *         description: Unauthorized to update project
 *       500:
 *         description: Server error
 */
router.put('/:id', authMiddleware, checkProjectOwnership, updateProject);


/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     tags:
 *       - Project  # This groups the route under the "Project" section
 *     summary: Delete a project
 *     description: This endpoint allows the authenticated user to delete a project. Only the owner can delete the project.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the project to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Project deleted successfully
 *       404:
 *         description: Project not found
 *       403:
 *         description: Unauthorized to delete project
 *       500:
 *         description: Server error
 */
router.delete('/:id', authMiddleware, checkProjectOwnership, deleteProject);

module.exports = router;
