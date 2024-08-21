import multer from "multer";

// Specify allowed image types
const allowedImageTypes = ['image/png', 'image/jpeg'];

/**
 * @param {Object} options - Options for file upload.
 * @param {number} options.maxSize - Maximum file size in MB.
 * @return {multer.Multer} Multer middleware for handling image uploads.
 */
export const fileUpload = ({ maxSize = 3 } = {}) => {
  const storage = multer.diskStorage({}); // Storage for the folder
  const limits = { fileSize: maxSize * 1000 * 1000 }; // Max size for image = 3MB

/**
    * File filter function to validate image types.
    *
    * @param {Object} req - The Express request object.
    * @param {Object} file - The file object containing details of the uploaded file.
    * @param {Function} cb - A callback function to signal whether the file is accepted or rejected.
    * 
    * @callback cb
    * @param {Error|null} error - An error object if the file is rejected, or null if the file is accepted.
    * @param {boolean} [acceptFile] - A boolean value indicating whether the file is accepted (true) or rejected (false).
    * 
    * @description
    * This function checks if the uploaded file's MIME type matches one of the allowed image types (`image/png` or `image/jpeg`).
    * If the file type is allowed, it calls the callback function with `true` to accept the file.
    * If the file type is not allowed, it calls the callback function with an error message and rejects the file.
*/
  const fileFilter = (req, file, cb) => {
    // @ts-ignore
    if (allowedImageTypes.includes(file.mimetype)) { // Check for the image type
      return cb(null, true);
    }
    // @ts-ignore
    cb(new Error(`File with extension (${file.originalname.slice(file.originalname.lastIndexOf("."))}) is not allowed`));
  };

  const upload = multer({ fileFilter, storage, limits });
  return upload;
};

