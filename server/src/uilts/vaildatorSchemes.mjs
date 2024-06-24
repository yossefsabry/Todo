
export const vaildatorSign = {
  username: {
    isLength: {
      options: {
        min: 3,
        max: 30,
      },
      errorMessage: "not vaild username info",
    },
    notEmpty: {
      errorMessage: "username is required"
    },
    isString: {
      errorMessage: "username must be string"
    }
  },
  lastname: {
    notEmpty: {
      errorMassage: "lastname is required"
    },
    isString: {
      errorMassage: "lastname must be string"
    },
  },
  password: {
    notEmpty: {
      errorMassage: " the password is required " 
    },
    isLength: {
      options: {
        min: 3,
        max: 40,
      },
      errorMessage: "not vaild password must be 3 - 40 ",
    },
    isString: {
      errorMassage: "password must be string"
    },
  },
};
