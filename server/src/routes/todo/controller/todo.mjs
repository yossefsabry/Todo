// @ts-nocheck error from js docs (ts)
import { validationResult } from 'express-validator';
import Todo from '../../../DB/todoScheme.mjs';
import Group from '../../../DB/groupScheme.mjs';

import mongoose from 'mongoose';

/**
 * @description create todos
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const createTodo = async(req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) 
        return res.status(400).json({ error: result.array() , color: "red"});
    
    const { title, description, userId, groupId, groupName } = req.body;  
    if (!title || !userId) 
        return res.status(400).json({ error: 'title, and userId are required' });
    
    if(groupId && !mongoose.Types.ObjectId.isValid(groupId)) {
        return res.status(400).json({ error: 'groupId is not valid' });
    }

    try {
        const todo = await new Todo({
            title,
            description,
            user: userId,
            Group: [{ groupId: groupId, groupName: groupName }] 
        })
        await todo.save();

        try {
            // add todo to group
            const group = await Group.findOne({ _id: groupId });
            await group.groupTodos.push(todo._id);
            await group.save();
        }catch (error) {
            return res.status(500).json({ error: `Internal server error: ${error}`, color: "red", status: 500 });
        }

    return res.status(201).json({
        todo, color: "gree", status: 201,
        message: "todo created successfully"
    });
    } catch (error) {
         return res.status(500).json({ error: `Internal server error: ${error}`, color: "red", status: 500 });
    }
}


/**
 * @description delete todos
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const deletePost = async(req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: result.array() , color: "red"});
    }
    const { todoId } = req.body;
    if (!todoId) {
        return res.status(400).json({ error: 'todoId is required' });
    }
    if (!mongoose.Types.ObjectId.isValid(todoId)) {
        return res.status(400).json({ error: 'todoId is not valid' });
    }
    try {
        const todo = await Todo.find(todoId);
        todo.isDeleted = true;
        await todo.save();
    } catch (error) {
         res.status(500).json({ error: `Internal server error: ${error}` });
    }

    res.status(200).json({
        color: "green",
        status: 200,
        message: "todo deleted successfully"
    });
    next(); 
}


/**
 * @description isFavorite todos
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const isFavorite = async(req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: result.array(), color: "red" });
    }
    const { todoId } = req.body;
    if (!todoId) {
        return res.status(400).json({ error: 'todoId is required' });
    }
    if (!mongoose.Types.ObjectId.isValid(todoId)) {
        return res.status(400).json({ error: 'todoId is not valid' });
    }

    try {
        const todo = await Todo.findOneAndUpdate({ _id: todoId }, { isFavorite: true });
        await todo.save();
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }

    res.status(200).json({
        color: "green",
        status: 200,
        message: "adding todo to favorite successfully"
    });
    next(); 
}


/**
 * @description isComplate todos
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const isComplate = async(req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: result.array() , color: "red"});
    }
    const { todoId } = req.body;
    if (!todoId) {
        return res.status(400).json({ error: 'todoId is required' });
    }
    if (!mongoose.Types.ObjectId.isValid(todoId)) {
        return res.status(400).json({ error: 'todoId is not valid' });
    }
    try {
        const todo = await Todo.findOneAndUpdate({ _id: todoId }, { isComplate: true });
        await todo.save();
    } catch (error) {
         res.status(500).json({ error: `Internal server error: ${error}` });
    }
    res.status(200).json({
        color: "green",
        status: 200,
        message: "adding todo to complate successfully"
    });
    next(); 
}


/**
 * @description all todos
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
*/
export const allTodos = async(req, res, next) => {
    try {
        const allTodos = await Todo.find({ isDeleted: false , isComplate: false });
        res.status(200).json({
            allTodos, color: "green", status: 200,
            message: "all todos"
        });
        next();
    }catch (error) {
         res.status(500).json({ error: `Internal server error: ${error}` });
    }
}


/**
 * @description group todos
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
*/
export const groudTodos = async(req, res, next) => {
    const { groupId } = req.body;
    try {
        const groupTodos = await Todo.find({ Group: groupId });
        res.status(200).json({
            groupTodos, color: "green", status: 200,
            message: "group todos"
        });
        next();
    }catch (error) {
         res.status(500).json({ error: `Internal server error: ${error}` });
    }
}

/**
 * @description search todos
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
*/
export const searchTodos = async(req, res, next) => {
    const { search } = req.body;
    try {
        const searchTodos = await Todo.find({
            title: { $regex: `${search}`, $options: 'i' } 
        });
        res.status(200).json({
            searchTodos, color: "green", status: 200,
            message: "search todos"
        });
        next();
    } catch (error) {
         res.status(500).json({ error: `Internal server error: ${error}` });
    }
}


