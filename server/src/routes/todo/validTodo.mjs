


export const createTodoSchema   = {
    title: { isLength: { options: { min: 3 }, errorMessage: "not vaild title info" },
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
