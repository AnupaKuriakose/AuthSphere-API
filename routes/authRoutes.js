
//creates a modular route handler using Express.js.
import express from 'express';


const router = express.Router();//This creates a mini-app (a router object) 
// that can handle its own middleware and routes independently of the main server file 


//This defines a route that specifically listens for HTTP POST requests at the /register path
router.post('/register', (req, res) =>{
    res.send('Register route');
});

module.exports = router;