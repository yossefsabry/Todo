


export const createTodoSchema   = {
    title: { isength: { options: { min: 3 }, errorMessage: "not vaild title info" },
        notEmpty: { errorMessage: "title is required"},
        isString: { errorMessage: "title must be string"},
        unique: { errorMessage: "title must be unique"},
    },
    userId: { isLength: { options: { min: 3 }, errorMessage: "not vaild userID info" },
        notEmpty: { errorMessage: "userID is required"},
        isString: { errorMessage: "userID must be string"},
    },
};
export const operationTodoId   = {
    todoId: { isLength: { options: { min: 3 }, errorMessage: "not vaild todoId info" },
        notEmpty: { errorMessage: "todoId is required"},
        isString: { errorMessage: "todoId must be string"},
    },
};

export const updateTodoSchema = {
    todoId: { isLength: { options: { min: 3 }, errorMessage: "not vaild todoId info" },
        notEmpty: { errorMessage: "todoId is required"},
        isString: { errorMessage: "todoId must be string"},
    },
    title: { isLength: { options: { min: 3 }, errorMessage: "not vaild title info" },
        notEmpty: { errorMessage: "title is required"},
        isString: { errorMessage: "title must be string"},
    },
    description: { isLength: { options: { min: 3 }, errorMessage: "not vaild description info" },
        notEmpty: { errorMessage: "description is required"},
        isString: { errorMessage: "description must be string"},
    },
    color: { isLength: { options: { min: 3 }, errorMessage: "not vaild color info" },
        notEmpty: { errorMessage: "color is required"},
        isString: { errorMessage: "color must be string"},
    },
};

export const todoGroupAdding = {
    todoId: { isLength: { options: { min: 3 }, errorMessage: "not vaild todoId info" },
        notEmpty: { errorMessage: "todoId is required"},
        isString: { errorMessage: "todoId must be string"},
    },
    groupId: { isLength: { options: { min: 3 }, errorMessage: "not vaild groupId info" },
        notEmpty: { errorMessage: "groupId is required"},
        isString: { errorMessage: "groupId must be string"},
    },
};

