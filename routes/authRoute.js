const express = require('express');
const { registerUser, loginUser } = require('../Controller/authController');

const router = express.Router();


/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth  # Groups the route under "Auth" category
 *     summary: Register a new user
 *     description: This endpoint allows users to register by providing a username, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The firstName for the new user
 *               lastName:
 *                 type: string
 *                 description: The lastName for the new user
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email of the new user
 *               password:
 *                 type: string
 *                 description: The password for the new user
 *     responses:
 *       200:
 *         description: Successfully registered, returns JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for the registered user
 *       400:
 *         description: Email is already in use
 *       500:
 *         description: Internal server error
 */
// Register a new user
router.post('/register', registerUser);


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth  # Groups the route under "Auth" category
 *     summary: Login an existing user
 *     description: This endpoint allows users to login by providing their email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email of the user
 *               password:
 *                 type: string
 *                 description: The password of the user
 *     responses:
 *       200:
 *         description: Successfully logged in, returns JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for the logged-in user
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
// Login an existing user
router.post('/login', loginUser);

module.exports = router;
