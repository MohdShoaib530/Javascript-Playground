import jwt from "jsonwebtoken";
import AppError from "../Utils/error.utils.js";

const isLoggedIn = async (req,_res,next) => {
    const { token } = req.cookies; 

    if(!token){
        return next(new AppError('Unauthenticated,please login again',400))
    }

    const decoded = await jwt.verify(token,process.env.JWT_SECRET);

    // If no decode send the message unauthorized
    if (!decoded) {
    return next(new AppError("Unauthorized, please login to continue", 401));
    }

    req.user = decoded;
    next();
};

export {
    isLoggedIn
};