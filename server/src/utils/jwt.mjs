import jwt from "jsonwebtoken";

/**
 * @typedef {Object} Token
 * @property {Object} [payload] - The payload of the JWT.
 * @property {string} [signature] - The secret key used to sign the JWT.
 * @property {number|string} [expiresIn] - The expiration time of the JWT.
 */

/**
*@description Generate a JWT token
*@param {Token} options - The token options
*@returns {string} - The generated token
*/
export const generateToken = ({
    payload = {},
    signature = process.env.JWT_SECRET || "secret",
    expiresIn = 60 * 60 * 24 * 7 // 1 week
} = {}) => {
    try {
        const token = jwt.sign(payload, signature, 
            { expiresIn: expiresIn }
        );
        return token;
    }catch(err) {
        return `err: ${err}`;
    }
};

/**
*@typedef {Object} VerifyToken
*@property {string} token - the token
*@property {string} signature - the secret key used to sign the JWT
*/

/**
*@description Verify a JWT token
*@param {VerifyToken} options - the token
*@returns {Object} - The decoded token
*/
export const verifyToken = ({
    token, signature = process.env.JWT_SECRET || "secret"
}) => {
    return jwt.verify(token, signature);
};

