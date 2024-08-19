
import { comparePassword, hashPassword } from "../../../utils/bcrypt.mjs"
import User from "../../../DB/userScheme.mjs"
// @ts-ignore  ignore the error of express-validator
import { validationResult } from 'express-validator';
import { generateToken } from "../../../utils/jwt.mjs";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export const sign = async(req, res, next) => {
    const results = validationResult(req);
    if(!results.isEmpty()) 
        return res.status(400).json({ errors: results.array() , color: "red"} );

    const {email , password } = req.body;

    const emailUser = await User.findOne({ email });
    if(!emailUser) {
        return res.status(400).json({ message: "threre is no user with this email..." ,
            color: "red",
            status: 500 
        });
    }
        
    if(emailUser.isDeleted)  
        return res.status(400).json({ message: "user is deleted..." , color: "red" , status: 400});

    if(emailUser.isBlocked)  
        return res.status(400).json({ message: "user is blocked..." , color: "red" , status: 400});
    

    // check if the password is correct
    const match = comparePassword(password, emailUser.password);
    if(!match) {
        return res.status(500).json({ message: "wrong password bad credentials..." ,
            user: emailUser, status: 500, color: "red"
        });
    }

    // genrate token from the user
    const token = generateToken({
        payload: {
            id: emailUser._id,
            email: emailUser.email,
            firstname: emailUser.firstname,
            lastname: emailUser.lastname
        },
        expiresIn: 60 * 60 * 24 * 7 // 1 week
    });


    res.status(200).json({
        message: "Login successfuly...", token , color: "green", status: 200 ,
        user: emailUser, isVerified: emailUser.isVerified, isAdmin: emailUser.isAdmin
    });
    next();
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export const register = async(req, res, next) => {
    const results = validationResult(req);
    if(!results.isEmpty()) 
        return res.status(400).json({ errors: results.array() , color: "red"} );
    
    const { firstname, lastname, age, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) 
        return res.status(400).json({ message: "Passwords do not match" , color: "red" });
    

    const emailUser = await User.findOne({ email });
    if(emailUser) {
        return res.status(400).json({ message: "Email already exists" ,
            color: "red",
            status: 500 
        });
    }
    const newPassword = hashPassword(password);

    try {
        const user = await User.create({
            firstname,
            lastname,
            age,
            email,
            password: newPassword
        });
        await user.save();
        res.status(200).json({ message: "Register new user successfuly",
            user , status: true, color: "green"
        });
        next();
    } catch(error) {
        return res.status(500).json({ message: `Error: ${error}` , color: "red"});
    }
};
