import { verifyToken } from "./jwt.mjs";


/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const isAuth = async(req, res, next) =>{
    const { authorization } = req.headers;
    if (!authorization) 
        return res.status(401).json({ message: "Unauthorized" , status: 401, color: "red"});
    
    const splitAuth = authorization.split(" ");

    if ( splitAuth.length !== 2 ||
            splitAuth[0] !== "Bearer" ||
            !splitAuth[1] ||
            splitAuth[1] === "null"
    ) return res.status(401).json({ message: "Unauthorized", status: 401, color: "red" });

    /** @type {string} */
    const token = splitAuth[1];
    try {
        const decoded = verifyToken({ token, signature: process.env.JWT_SECRET || "secret" });
        if(decoded == null) 
            return res.status(401).json({ message: "Unauthorized" , status: 401, color: "red"});
        
        // @ts-ignore adding new property to the request
        req.jwt = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: `Unauthorized: ${err} ` , status: 401, color: `red`});
    }
};

export default isAuth;
