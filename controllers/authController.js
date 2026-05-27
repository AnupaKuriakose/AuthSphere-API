import users from "../data/users.js";
import bcrypt from 'bcryptjs';//s the third-party bcryptjs library.ibrary handles secure, mathematical hashing so passwords are never stored in plain text.
import jwt from 'jsonwebtoken';
import pool from '../db/db.js';
export const registerUser = async (req, res) => {

    try {
        const { email, password } = req.body;//JavaScript destructuring to extract the email and password variables directly from the incoming HTTP request payload (req.body).
        const existingUser = users.find((user) => user.email === email);
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }
        //Takes the plain text password and scrambles it using the bcrypt algorithm with a salt round factor of 10.
        //The await keyword pauses execution at this line until the hashing mathematically finishes.
        const hashPassword = await bcrypt.hash(password, 10);

        //in-memory save(without DB)
        // const user = {
        //     email,
        //     password: hashPassword
        // }
        // users.push(user);

        //save to DB
        //insert into DB //RETURNING *: instructs PostgreSQL to send back all the data f
        // rom the newly inserted row (including auto-generated fields like id or created_at).
        //  Without this, thedatabase would only report that the insert succeeded,
        //  but not give you the new data.
        //[email, hashedPassword]: This is the array of actual data matching your placeholders. 
        // email replaces $1, and hashedPassword replaces $2.
        //Why $1, $2 -This is called parameterized query It prevents:SQL injection,malformed queries
        const result = await pool.query('INSERT INTO users(email, password) VALUES($1, $2) RETURNING *', [email, password]);
        res.status(201).json({ message: 'User registered', user: result.rows[0] });
    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });
    }

}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        //find user
        const user = users.find((user) => user.email === email);
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        //compare passwords(You NEVER compare plain password directly.Because stored password is hashed.)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        //create JWT token
        const token = jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Login success',
            token
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
