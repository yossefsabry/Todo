import Group from '../../../DB/groupScheme.mjs';


/**
 * @description Create  Tasks a new group
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const groupTask = async(req, res, next) => {
    const { userId } = req.query;
    if (!userId) {
        return res.status(400).json({ message: "User id is required", color: "red" , status: 400});
    }
    let checkGroupFound;
    try {
        checkGroupFound = await Group.findOne({
            owner: userId, groupName: "Tasks",
        });
    } catch(err){
        return res.status(500).json({ message: "Internal server error", color: "red" });
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
            res.status(201).json({ group, todos, message: "Group created successfully" , color: "green" }); 
            next();
        } catch(err){
           return res.status(500).json({ message: `Internal server error: ${err}`, color: "red" });
        }
    }

    let todos = Array(checkGroupFound.groupTodos);
    res.status(200).json({ group: checkGroupFound, todos, message: "Group already exists" , color: "green" });
    next();

};



