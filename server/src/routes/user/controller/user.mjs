import mongoose from 'mongoose';
import User from '../../../DB/userScheme.mjs';
import cloudinary from '../../../service/cloudinary.mjs';

/** user info
* @param {import('express').Request} req
* @param {import('express').Response} res
* @param {import('express').NextFunction} next
*/
export const userInfo = async(req, res, next) => {
    try {
        const { userId } = req.params; 
        if(!userId) {
            return res.status(400).json({ message: "userId is required" ,
                color: "red", status: 400}
            );
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "userId is not valid" ,
                color: "red", status: 400}
            ); 
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "user not found" ,
                color: "red", status: 404}
            );
        }
        res.status(200).json({ massage: "show user info",
            user, color: "green", status: 200}
        );
        next();
    } catch(err) {
        res.status(500).json({ message: "server error",
            error: err, color: "red", status: 500}
        );
    };
};

/** user change profile image
* @param {import('express').Request} req
* @param {import('express').Response} res
* @param {import('express').NextFunction} next
*/
export const changeProfileImage = async(req, res, next) => {
    try {
        const { userId } =  req.body;
        if (!userId) 
            return res.status(400).json(
                { message: "userId is required" , color: "red", status: 400}
            );

        const user = await User.findById(userId);
        if(!user) 
            return res.status(404).json({ message: "user not found" 
                , color: "red", status: 404}
            );
        
        const filePath = req.file?.path ?? "not Valid file path";
        const result = await cloudinary.uploader.upload(filePath);   
        const userImage = {
            url: result.secure_url,
            id: result.public_id,
            using: "profile image"
        };
        user.images = [userImage];
        await user.save();
    } catch (err) {
        res.status(500).json({ message: `server error: ${err}`,
            error: err, color: "red", status: 500}
        );
    }
    next()
};

