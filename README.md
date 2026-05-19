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

- Node.js
- Express.js
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS

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

## Author

Built by Anupa
