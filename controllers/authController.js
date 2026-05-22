import users from "../data/users.js";
import bcrypt from 'bcryptjs';//s the third-party bcryptjs library.ibrary handles secure, mathematical hashing so passwords are never stored in plain text.


const registerUser = async(req, res) => {

    try{
        const {email, password} = req.body;//JavaScript destructuring to extract the email and password variables directly from the incoming HTTP request payload (req.body).
        const existingUser = users.find((user)=> user.email === email);
        if(existingUser)
        {
            return res.status(400).json({
                message:"User already exists"
            });
        }
        //Takes the plain text password and scrambles it using the bcrypt algorithm with a salt round factor of 10.
        //The await keyword pauses execution at this line until the hashing mathematically finishes.
        const hashPassword = await bcrypt.hash(password, 10);
        const user = {
            email,
            password : hashPassword
        }
        users.push(user);
        res.status(201).json({message: 'User registered'});
    }
    catch(err){

        res.status(500).json({
            message: err.message
        });
    }

}

export default registerUser;