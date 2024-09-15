// @ts-nocheck
import { validationResult } from 'express-validator';
import Group from '../../../DB/groupScheme.mjs';
import User from '../../../DB/userScheme.mjs';


/**
 * @description Create Tasks a new group
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const groupTask = async(req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: result.array() });
    }
    const { userId } = req.query;
    if (!userId) {
        return res.status(400).json(
            { message: "User id is required", color: "red" , status: 400}
        );
    }
    let checkGroupFound;
    try {
        checkGroupFound = await Group.findOne({
            owner: userId, groupName: "Tasks",
        });
    } catch(err){
        return res.status(500).json(
            { message: "Internal server error", color: "red" }
        );
    }

    if (!checkGroupFound) {
        try {
            let group = await Group.create({
                owner: userId,
                groupName: "Tasks",
                groupDescription: "tasks group description",
            });
            await group.save();
            const todos = Array(group.groupTodos);
            res.status(201).json(
                { group, todos, message: "Group created successfully",
                    color: "green" }
            ); 
            next();
        } catch(err){
           return res.status(500).json(
                { message: `Internal server error: ${err}`, color: "red" }
            );
        }
    }

    let todos = Array(checkGroupFound.groupTodos);
    res.status(200).json(
        { group: checkGroupFound, todos, message: "Group already exists",
            color: "green" }
    );
    next();

};

/**
 * @description Create new group
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const addingGroup = async(req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: result.array() });
    }
    const { userId, groupName, groupDescription } = req.body;
    try {
       let checkGroupFound = await Group.findOne({
            owner: userId, groupName: groupName,
        });
        if (checkGroupFound) {
            return res.status(400).json({
                message: "Group already exists", color: "red" ,status: 400
            });
        }
    } catch(err){
        return res.status(500).json(
            { message: "Internal server error", color: "red" }
        );
    }
    try {
        let group = await Group.create({
            owner: userId,
            groupName: `${groupName}`,
            groupDescription: `${groupDescription}`,
        });
        await group.save();
        res.status(201).json(
            { group,  message: "Group created successfully" ,
                color: "green" }
        ); 
        next();
    } catch(err){
        return res.status(500).json(
            { message: `Internal server error: ${err}`, color: "red" }
        );
    }
};

/**
 * @description deletingGroup
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const deletingGroup = async(req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: result.array() });
    }
    const { groupId } = req.body;
    try {
        const group = await Group.findOneAndUpdate({_id: groupId},{isDeleted: true});
        if (!group) {
            return res.status(404).json(
                { message: "Group not found", color: "red" }
            );
        }
        res.status(200).json(
            { message: "Group deleted successfully",
                color: "green", status: 200 }
        );
        next();
    }catch(err) {
        return res.status(500).json(
            { message: `Internal server error: ${err}`, color: "red" }
        ); 
    }
};

/**
 * @description show group info
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const groupInfo = async(req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: result.array() });
    }
    const { groupId } = req.params;
    if (!groupId) {
        return res.status(400).json(
            { message: "Group id is required",
                color: "red" , status: 400}
        );
    }
    try {
        const group = await Group.findOne({_id: groupId});
        if (!group) {
            return res.status(404).json(
                { message: "Group not found",
                    color: "red" , status: 404}
            );
        }
        res.status(200).json({ group, color: "green", status: 200 });
        next();
    }catch(err) {
        return res.status(500).json(
            { message: `Internal server error: ${err}`,
                color: "red" }
        ); 
    }
};

/**
 * @description show user groups
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const userGroups = async(req, res, next) => {
    const { userId } = req.params;
    //console.log(userId);
    if (!userId) {
        return res.status(400).json(
            { message: "user id is required and get an valid user id",
                color: "red" , status: 400}
        );
    }
    try {
        const groups = await Group.find({ owner: userId });
        if (!groups) {
            return res.status(404).json(
                { message: "Group not found",
                    color: "red" , status: 404}
            );
        }
        res.status(200).json(
            { 
                massage: "successfuly get all the groups of user",
                groups, color: "green", status: 200 
            }
        );
        next();
    }catch(err) {
        return res.status(500).json(
            { message: `Internal server error: ${err}`,
                color: "red" }
        ); 
    }
};

/**
 * @description update the group info 
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const updatingGroup = async (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: result.array() });
    }
    const { groupId } = req.body;
    try {
        const group = await Group.findOne({ _id: groupId });
        if (!group) {
            return res.status(404).json(
                { message: "Group not found", color: "red" }
            );
        }
        const { groupName, groupDescription, color } = req.body;    
        group.groupName = groupName;
        group.groupDescription = groupDescription;
        group.color = color;
        await group.save();
        return res.status(200).json(
            { message: "Group updated successfully",
                color: "green", status: 200, group }
        );
    } catch (err) {
        return res.status(500).json(
            { message: `Internal server error: ${err}`, color: "red" }
        ); 
    }
};

/**
 * @description make the group public to all users
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const publicGroup = async(req, res, next) => {
    const { userId, groupId } = req.body;
    if (!userId || !groupId) {
        return res.status(400).json({
            message: "user id is required and get an valid user id",
            color: "red" , status: 400
        });
    }
    try {
        const group = await Group.findOne({ _id: groupId });
        if (!group) {
            return res.status(404).json({
                message: "Group not found",
                color: "red" , status: 404
            });
        }
        if(!group._id != userId) {
            return res.status(401).json({
                message: "You are not the owner of the group",
                color: "red" , status: 401
            });
        }
        group.isPublic = true;
        await group.save();
        res.status(200).json({
            massage: "successfuly making the group public to users",
            group, color: "green", status: 200 
        });
        next();
    }catch(err) {
        return res.status(500).json({
            message: `Internal server error: ${err}`,
            color: "red" 
        }); 
    }
};

/**
 * @description make the group private to all users
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const privateGroup = async(req, res, next) => {
    const { userId, groupId } = req.body;
    if (!userId || !groupId) {
        return res.status(400).json({
            message: "user id is required and get an valid user id",
            color: "red" , status: 400
        });
    }
    try {
        const group = await Group.findOne({ _id: groupId });
        if (!group) {
            return res.status(404).json({
                message: "Group not found",
                color: "red" , status: 404
            });
        }
        if(!group._id != userId) {
            return res.status(401).json({
                message: "You are not the owner of the group",
                color: "red" , status: 401
            });
        }
        group.isPublic = false;
        await group.save();
        res.status(200).json({
            massage: "successfuly making the group private to users",
            group, color: "green", status: 200 
        });
        next();
    }catch(err) {
        return res.status(500).json({
            message: `Internal server error: ${err}`,
            color: "red" 
        }); 
    }
};


/**
 * @description get all public groups to users
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const allPublicGroup = async(req, res, next) => {
    try {
        const groups = await Group.find({ isPublic: true });
        if (!groups.length <= 0) {
            return res.status(404).json({
                message: "Group not found", color: "red" ,
                status: 404
            });
        }
        res.status(200).json({
            massage: "public groups for the user",
            groups, color: "green", status: 200 
        });
        next();
    }catch(err) {
        return res.status(500).json({
            message: `Internal server error: ${err}`,
            color: "red" 
        }); 
    }
};


/**
 * @description shareGroup share a group with other users
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const shareGroup = async(req ,res, next) => {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ error: result.array() });
        }
        const { groupId, userId } = req.body;
        const user = await User.findById(userId);
        const group = await Group.findById(groupId);
        if ( !user || !group) {
            return res.status(404).json({
                message: "User or Group not found", color: "red" ,
                status: 404
            });
        }
        user.groupSharedWithUser.push( groupId );
        group.sharedwith.push( userId );

        await user.save()
        await group.save()
        res.status(200).json({
            massage: "successfuly sharing the group with user",
            color: "green", status: 200 
        });
        next()

    }catch(err) {
        return res.status(500).json({
            message: `Internal server error: ${err}`,
            color: "red", 
            status: 500
        })
    }
}

