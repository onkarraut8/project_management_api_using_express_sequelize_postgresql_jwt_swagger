const express = require('express');
const { viewUsers, deleteUser } = require('../Controller/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


/**
 * @swagger
 * /api/users/view:
 *   get:
 *     tags:
 *       - User  # Groups the route under "User" category
 *     summary: Retrieve all users
 *     description: This endpoint retrieves a list of all users.
 *     security:
 *       - BearerAuth: []  # Indicates that the route requires JWT authentication
 *     responses:
 *       200:
 *         description: Successfully retrieved list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: User ID
 *                   username:
 *                     type: string
 *                     description: Username of the user
 *                   email:
 *                     type: string
 *                     description: Email of the user
 *       500:
 *         description: Internal server error
 */
router.get('/view', authMiddleware, viewUsers);


/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - User  # Groups the route under "User" category
 *     summary: Delete a user by ID
 *     description: This endpoint deletes a user by their unique ID.
 *     security:
 *       - BearerAuth: []  # Indicates that the route requires JWT authentication
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to be deleted
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
