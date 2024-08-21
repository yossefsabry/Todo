import mongoose from 'mongoose';

/**
 * @typedef {Object} GroupSchema
 * @property {mongoose.Schema.Types.ObjectId} owner - the group's name.
 * @property {mongoose.Schema.Types.ObjectId} sharedwith - the group's name.
 * @property {mongoose.Schema.Types.ObjectId} groupTodos - the group's for todos id.
 * @property {string} groupName - the group's name.
 * @property {string} groupDescription - the group's description.
 * @property {string} color - the color
 * @property {Date} createData - The group's create Data.
 * @property {boolean} isDeleted - The group's check if is deleted.
 * @property {boolean} isPublic - The group's check if is deleted.
 */

/** 
 * @type {mongoose.Schema<GroupSchema>}
 */
const groupSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    sharedwith: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    groupName: {
        type: String,required: true, unique: true ,
        minlength: 2,
        maxlength: 200,
    },
    groupTodos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo",
    }],
    groupDescription: {
        type: String, required: true,
        minlength: 3,
        maxlength: 2000,
    },
    color: {
        type: String, required: false, default: '#191724',
    },
    createData: {
        type: Date, default: Date.now,
    },
    isDeleted: {
        type: Boolean, default: false,
    },
    isPublic: {
        type: Boolean, default: false,
    }
});

const Group = mongoose.model('group', groupSchema);
export default Group;
