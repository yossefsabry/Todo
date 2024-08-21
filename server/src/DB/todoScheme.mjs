import mongoose from 'mongoose';

/**
 * @typedef {Object} Group
 * @property {number} groupId - The ID of the group.
 * @property {string} groupName - The name of the group.
 */

/**
 * @typedef {Object} TodoSchema
 * @property {mongoose.Schema.Types.ObjectId} user - The user id that the todo belongs to.
 * @property {string} title - The todo's title
 * @property {string} description - The todo's description
 * @property {string} color - the color
 * @property {Date} createData - The todo's create Data.
 * @property {boolean} isComplate - The todo's check if is complate.
 * @property {boolean} isFavorite - The todo's check if is favorite.
 * @property {boolean} isDeleted - The todo's check if is deleted.
 * @property {Group} Group - The todo's check if is deleted.
 */

/** 
 * @type {mongoose.Schema<TodoSchema>}
 */
const todoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,required: true, unique: true ,
        minlength: 3,
        maxlength: 200,
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 2000,
    },
    color: {
        type: String, required: false, default: '#191724',
    },
    createData: {
        type: Date, default: Date.now,
    },
    isFavorite: {
        type: Boolean, default: false,
    },
    isComplate: {
        type: Boolean, default: false,
    },
    isDeleted: {
        type: Boolean, default: false,
    },
    Group:  [{
        groupId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "group",
        },
        groupName: {
            type: String, required: false, default: "Tasks",
        },
    }],
});

const Todo = mongoose.model('todo', todoSchema);
export default Todo;


