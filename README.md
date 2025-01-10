# Project Management API

## Description
The **Project Management API** is a RESTful API designed to handle basic operations for a project management system. It allows users to manage projects, tasks, and users, with authentication handled via JWT (JSON Web Tokens).

The API provides functionality such as user registration, login, project creation, task management, and more. This API is built with **Express**, **Sequelize**,**JWT** and **PostgreSQL**.

## Features
- User authentication (register, login)
- Project management (create, update, delete)
- Task management (create, update, view)
- project is control with JWT authentication
- Documentation available via Swagger UI

## Technologies
- **Node.js** for the server
- **Express** for building the API
- **Sequelize** for ORM (PostgreSQL as the database)
- **JWT** for user authentication
- **Swagger** for API documentation
- **Bcryptjs** for password hashing

## API Documentation
The API documentation is available at `/api-docs`. This Swagger-based documentation provides detailed information on the available routes, request/response formats, and example responses.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/project-management-api.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd project-management-api
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:
    - Create a `.env` file in the root of the project.
    - Add the following environment variables:
    ```env
    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASS=your_database_password
    DB_NAME=your_database_name
    JWT_SECRET=your_jwt_secret_key
    PORT=5000  # (optional: change the port if necessary)
    ```

5. **Set up the database**:
    - Ensure that your database is set up and running.
    - If you're using PostgreSQL, make sure to create the database.

6. **Run migrations** (optional, if you have a migration setup):
    ```bash
    npx sequelize-cli db:migrate
    ```
7. **Run Seed** (optional, if you have a seeder setup):
    ```bash
   npx sequelize-cli db:seed:all
   ```


8. **Start the server**:

    ```bash
    npm run dev
    ```
    or
    ```bash
    npm start
    ```

The server will now be running at `http://localhost:3000` (or another port if configured in the `.env` file).

## Available Routes

### Swagger Routes
    - **Swagger UI** `/api-docs`: View swagger ui


### Authentication Routes

- **POST** `/api/auth/register`: Register a new user
- **POST** `/api/auth/login`: Login an existing user

### User Routes

- **GET** `/api/users/view`: View all users
- **DELETE** `/api/users/{id}`: Delete a user by ID

### Project Routes

- **POST** `/api/projects`: Create a new project
- **PUT** `/api/projects/{id}`: Update an existing project
- **DELETE** `/api/projects/{id}`: Delete a project by ID

### Task Routes

- **POST** `/api/projects/{projectId}/tasks`: Create a new task for a project
- **PUT** `/api/tasks/{id}`: Update a task
- **GET** `/api/projects/{projectId}/tasks`: View tasks for a specific project

## Authentication

All routes except for `register` and `login` require authentication. You must include a **JWT token** in the `Authorization` header as a `Bearer token`.

Example:
```bash
Authorization: Bearer <your-jwt-token>
```