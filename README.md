# AuthSphere API

A secure authentication and authorization REST API built using Node.js and Express.js.

This project demonstrates backend fundamentals including JWT authentication, middleware, password hashing, protected routes, and RESTful API design.

---

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Hashing with bcrypt
- Express Middleware
- REST API Architecture
- Environment Variable Configuration
- Error Handling

---

## Tech Stack

Node.js
Express.js
PostgreSQL
JWT Authentication
bcrypt password hashing

Use cloud hosted postgresql platform like Neon

- Node.js
- Express.js -The foundation of your app. It is a minimal web framework used to create the server, handle different URL routes (like /login or /profile), and manage HTTP requests and responses.
- JWT (jsonwebtoken) Used for user authentication. After a user logs in, this package generates a "token" (a secure string) that the user's browser sends back with every future request to prove they are still logged in.
- bcryptjs - A security tool used to hash passwords. You should never store raw passwords in a database; bcryptjs turns them into unreadable gibberish that is nearly impossible to reverse-engineer.
- dotenv - A configuration tool that loads environment variables from a hidden .env file. It is used to keep sensitive data like your database password or secret API keys out of your main code.
- CORS -: Stands for Cross-Origin Resource Sharing. It is middleware that allows your backend server to accept requests from a different "origin"—for example, allowing a frontend running on localhost:3000 to talk to a backend on localhost:5000.

What These Packages Do:

Package	                Purpose
express	                backend framework
jsonwebtoken	          create JWT token
bcryptjs	              hash passwords
dotenv	                environment variables
cors	                  frontend-backend communication
nodemon	                auto restart server

---

## Folder Structure

```bash
AuthSphere-API/
│
├── controllers/
├── middleware/
├── routes/
├── data/
├── server.js
├── package.json
└── .env
```
server.js: The central entry point. It initializes Express, connects middleware (cors, express.json), loads environment variables via dotenv, and binds the HTTP server to a network port.

env: The environment configuration file. It safely stores sensitive keys, such as JWT_SECRET and database credentials, keeping them out of source control.

routes/ -> : This layer maps incoming HTTP URLs and methods (e.g., POST /api/auth/register) to the correct controller logic. It contains no business logic or database queries; it only defines the API endpoints and directs traffic.

controllers/ -> This layer handles the core business logic. A controller function extracts user input from the request, invokes security operations, and formats the final HTTP response.Example: The authController.js file houses the logic for generating a jsonwebtoken or verifying a hashed password with bcryptjs.Controllers handle the request-response lifecycle and the actual business logic of the application

middleware/ -> Code that executes after a request is received, but before it reaches the controller. It is primarily used for security checks.Example: An authMiddleware.js file intercepts requests to protected routes (like /api/user/profile), checks for a valid JWT in the headers, and blocks access if the token is missing or expired.Middleware provides aspect-oriented security and validation, protecting private endpoints by verifying tokens before the controller ever runs.

data/ -> This layer interacts with your data store. In a basic setup, it might hold a simple JSON file simulating a database. In a production app, this is often renamed to models/ or config/ to hand


JWT Authentication Flow

This teaches:

authentication
token generation
middleware
protected routes
headers
async flow

Login Flow
User logs in
→ Server validates credentials
→ Server creates JWT token
→ Token sent to frontend
→ Frontend stores token
→ Frontend sends token in future requests
→ Protected APIs verify token
---

## API Endpoints

### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

---

### Login User

```http
POST /api/auth/login
```

---

### Get Profile (Protected Route)

```http
GET /api/auth/profile
```

Requires JWT token in Authorization header:

```http
Authorization: Bearer YOUR_TOKEN
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/AuthSphere-API.git
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## Learning Goals

This project was created to strengthen backend development skills and deepen understanding of:

- Node.js fundamentals
- Express.js architecture
- JWT authentication flow
- Middleware handling
- Async programming
- RESTful APIs
- Backend folder organization

---

## Future Enhancements

- MongoDB Integration
- Role-Based Authorization
- Refresh Tokens
- API Validation
- Docker Support
- Deployment
- Swagger Documentation

---

## phase 1:
1. Project Setup
2. Express Server Setup
3. Middleware
4. Modular Routing
5. Register API
6. Login API
7. Auth Middleware
8. Protected Route
9. Error Handling
10. Testing APIs

## Phase 1: Core Backend Fundamentals
1. Project Setup --> Done

Initialized Node.js project using npm, installed Express, JWT, bcrypt, dotenv, cors, pg, and configured nodemon for development.

2. Express Server Setup ---> Done

Created Express server, configured listening port, and built a basic root route to verify server functionality.

3. Middleware -->  

Added global middleware using cors() and express.json() to handle cross-origin requests and parse JSON request bodies.

4. Modular Routing -> done

Separated routes into independent router files using express.Router() and connected them through route mounting.

Phase 1 Current Progress

✅ Project Setup
✅ Express Server Setup
✅ Middleware
✅ Modular Routing
✅ Register API
✅ Login API

Next

➡️ Auth Middleware
➡️ Protected Route

Then

➡️ PostgreSQL setup
➡️ User table
➡️ DB integration

5. PostgreSQL Database Setup

Created cloud PostgreSQL database using Neon, connected Node.js backend using pg, and configured environment variables for DB connection.

6. User Table Creation

Created PostgreSQL users table with fields like id, email, and hashed password using SQL queries.

7. Register API

Built user registration endpoint with request validation, bcrypt password hashing, and database insertion logic.

8. Login API

Implemented login endpoint that validates user credentials and generates JWT authentication tokens.

9. Auth Middleware

Created middleware to verify JWT tokens from request headers before allowing access to protected APIs.

10. Protected Route

Built secured profile endpoint accessible only for authenticated users using token-based authorization.

11. Error Handling

Implemented try/catch blocks and centralized API error responses using proper HTTP status codes.

12. API Testing

Tested APIs using Postman including request bodies, headers, JWT tokens, and protected routes.

## Phase 2: Resume & Production Enhancements
1. Input Validation

Added email/password validation using middleware libraries to improve API security and request validation.

2. Role-Based Authorization

Implemented user roles like admin and user with permission-based route access control.

3. Refresh Token Authentication

Added refresh token mechanism for improved session management and secure authentication flow.

4. Centralized Error Middleware

Created reusable global error-handling middleware for cleaner controller logic and consistent responses.

5. Logging

Integrated request logging middleware to track API activity and simplify debugging.

6. API Documentation

Added Swagger/OpenAPI documentation for professional API endpoint documentation.

7. Deployment

Deployed backend API to cloud platforms like Render or Railway.

8. Database Optimization

Added indexing, query optimization, and improved database structure for better performance.

9. Docker Support

Containerized application using Docker for consistent local and production environments.

10. CI/CD Integration

Configured automated testing and deployment pipelines using GitHub Actions for continuous integration and deployment.

## Author

Built by Anupa
