import jwt from 'jsonwebtoken'

import { JWT_SECRET } from "../config/env.js";
import User from '../models/user.model.js';

// someone is making a request to get all user details -> Then this request goes to auth.middleware.js -> Then the middleware verifies who is making the request -> if valid then it goes to next and then it gets the user details

const authorize = async(req, res, next) =>{
    try{

        let token;

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
        {
            token = req.headers.authorization.split(' ')[1]; // Second part of the splitted array will be the actual token
        }

        if(!token)
        {
            return res.status(401).json({message:'unauthorized'});
        }

        const decoded = jwt.verify(token, JWT_SECRET)

        const user = await User.findById(decoded.userId);


        if(!user){
            return res.status(401).json({message: 'Unauthorized'})
        }

        req.user= user;

        next();

    }catch(error)
    {
        res.status(401).json({message:'Unauthorized', error: error.message});
    }
}

export default authorize