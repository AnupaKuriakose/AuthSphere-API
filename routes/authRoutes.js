
//creates a modular route handler using Express.js.
import express from 'express';
import registerUser from '../controllers/authController.js';

const router = express.Router();//This creates a mini-app (a router object) 
// that can handle its own middleware and routes independently of the main server file 


//This defines a route that specifically listens for HTTP POST requests at the /register path
router.post('/register', registerUser);
// we need to connect this router in server.js
export default router;