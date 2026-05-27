
//always load this dotenv in beginning so al;l files can access env variables
import './config/env.js';

import express from 'express'; //Imports the Express framework:Allows you to create a web server and handle HTTP requests easily.
import cors from 'cors';//mports the CORS (Cross-Origin Resource Sharing) package:Allows your frontend application (like React) to securely talk to this backend from a different domain or port
import authRoutes from './routes/authRoutes.js';
import pool from './db/db.js';

const app = express(); //creates express app


app.use(cors()); //app.use -> register middleware : Activates CORS middleware globally for all incoming 
// requests.Prevents browser security errors when external apps try to fetch data from your API.
app.use(express.json()); //middleware -> read json body from requests 
// convert into req.body. Activates the built-in Express JSON parser.
// Extracts incoming JSON data from request bodies and automatically populates the req.body object.

app.get('/', (req, res)=> {//Route Handling: listens specifically for HTTP GET requests sent to the root URL path (/).
    res.send('API running');
});

//POST /api/auth/register
app.use('/api/auth', authRoutes);// this trigger the route in authroutes -> this is called route mounting.



pool.query('SELECT NOW()', (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result.rows);
    }
});
const PORT = 5000;

app.listen(PORT, ()=>{//starts the server on port 5000.
    console.log(`Server running on port ${PORT}`);
});

