
//creates a modular route handler using Express.js.
import express from 'express';
import {registerUser, loginUser }from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();//This creates a mini-app (a router object) 
// that can handle its own middleware and routes independently of the main server file 


//This defines a route that specifically listens for HTTP POST requests at the /register path
router.post('/register', registerUser);
router.get('/login', loginUser);

// Protected route(Request → authMiddleware → route handler)
router.get('/profile', authMiddleware, (req, res) => {
    res.json({
        message: "Protected profile data",
        user: req.user
    });
});
// we need to connect this router in server.js
export default router;