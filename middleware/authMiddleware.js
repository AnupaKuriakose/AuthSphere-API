//this is for jwt verification
import jwt from 'jsonwebtoken'; //Imports the library needed to sign and verify JSON Web Tokens.

//Defines the middleware function. It takes the request (req), response (res), 
// and a next function to pass control to the next part of your code.
const authMiddleware = (req, res, next) => {
    try {
        // 1. Get token from header
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "No token provided"
            });
        }

        // 2. Extract token
        const token = authHeader.split(' ')[1]; 
        // format: "Bearer TOKEN"

        if (!token) {
            return res.status(401).json({
                message: "Invalid token format"
            });
        }

        // 3. Verify token(The core step. It checks the token against your secret key. 
        // If it's valid, 
        // it returns the user data hidden inside the token; if not, it throws an error.)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 4. Attach user info to request
        req.user = decoded;

        next();//Tells Express the user is verified and it’s okay to move on to the actual route handler.

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized - Invalid token"
        });
    }
};

export default authMiddleware;