const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/sequelizer');
const userRoutes = require('./routes/userRoute');
const projectRoutes = require('./routes/projectRoute');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const taskRoutes = require('./routes/taskRoute');
const authRoutes = require('./routes/authRoute');
const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

// Sync Database
sequelize.sync({ force: false }) // set to `true` to reset the database
    .then(() => {
        console.log('Database synced!');
    })
    .catch((err) => {
        console.error('Error syncing the database:', err);
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






// Swagger Setup
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Project Management API',
            version: '1.0.0',
            description: 'A simple project management system',
        },
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        tags: [
            {
                name: 'Project', // Custom tag for project-related routes
                description: 'Endpoints related to projects',
            },
            {
                name: 'User', // If you have a user-related tag, for example
                description: 'Endpoints related to users',
            },
            // You can add more tags if you have other sections
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
