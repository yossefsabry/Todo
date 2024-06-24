
export const vaildatorRegister = {
  firstname: {
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
      errorMessage: "lastname is required"
    },
    isString: {
      errorMessage: "lastname must be string"
    },
  },
  email: {
    notEmpty: {
      errorMessage: "email is required"
    },
    isEmail: {
      errorMessage: "email must be vaild"
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
  confirmPassword: {
    notEmpty: {
      errorMassage: "the confirm password is required " 
    },
    isLength: {
      options: {
        min: 3,
        max: 40,
      },
      errorMessage: "not vaild confirm password must be 3 - 40 ",
    },
    isString: {
      errorMassage: "confirm password must be string"
    },
  },
};

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
    },
    unique: {
      errorMessage: "username must be unique"
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
