import mongoose from 'mongoose';

/**
* @typedef Images
* @property {string} url - The image's url.
* @property {string} id - The image's id.
* @property {string} using - The image's using.
*/

/**
 * @typedef {Object} UserSchema
 * @property {string} firstname - The user's first name.
 * @property {string} lastname - The user's second name.
 * @property {number} age - The user's age .
 * @property {string} email - The user's email.
 * @property {string} bio - The user's bio.
 * @property {string} password - The user's password.
 * @property {Array<Images>} images - The user's images.
 * @property {Date} RegisterDate - The user's RegisterDate.
 * @property {boolean} isAdmin - The user's check if he is admin.
 * @property {boolean} isDeleted - The user's check if he is deleted.
 * @property {boolean} isBlocked - The user's check if he is blocked.
 * @property {boolean} isPrime - The user's check if he is prime.
 * @property {boolean} isVerified: - the user's check if he is verified.
 */

/** 
 * @type {mongoose.Schema<UserSchema>}
 */
const userScheme = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20,
    },
    lastname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20,
    },
    age: {
        type: Number, required: true,
    },
    bio: {
        type: String, required: false,
    },
    email: {
        type: String, required: true, unique: true,
    },
    password: {
        type: String, required: true,
    },
    images: [{
        url: String,
        id: String,
        using: String
    }],
    RegisterDate: {
        type: Date, default: Date.now,
    },
    isAdmin: {
        type: Boolean, default: false,
    },
    isDeleted: {
        type: Boolean, default: false,
    },
    isBlocked: {
        type: Boolean, default: false,
    },
    isPrime: {
        type: Boolean, default: false,
    },
    isVerified: {
        type: Boolean, default: false,
    },
});

const User = mongoose.model('User', userScheme);
export default User;

