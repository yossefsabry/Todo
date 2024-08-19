import bcrypt, { compareSync }  from 'bcrypt';

/**
 * Hashes a plain text password.
 * @param {string} plainText - The plain text password to hash.
 * @returns {string} - An object containing the hashed password.
 */
export const hashPassword = (plainText) => {
    /** @type {String}*/
    const hashPassword = bcrypt.hashSync(plainText, 10); // 10 is the number of rounds
    return hashPassword;
}

/**
@description Compares a plain text password with a hashed password.
@param {string} plainText - The plain text password to compare.
@param {string} hash - The hashed password to compare.
@returns {boolean} - A boolean value indicating whether the passwords match.
*/
export const comparePassword = (plainText, hash) => {
    const match = compareSync(plainText, hash);
    return match;
};

