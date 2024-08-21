
export const userAndGroupId = {
    groupId: {
        notEmpty: { errorMessage: "userId is required"},
        isString: { errorMessage: "userId must be string"},
    },
    userId: {
        notEmpty: { errorMessage: "userId is required"},
        isString: { errorMessage: "userId must be string"},
    },
}


export const groupIdSchema = {
    groupId: {
        notEmpty: { errorMessage: "userId is required"},
        isString: { errorMessage: "userId must be string"},
    },
}

export const userIdSchema = {
    userId: {
        notEmpty: { errorMessage: "userId is required"},
        isString: { errorMessage: "userId must be string"},
    },
}

export const createGroupSchema = {
    userId: {
        notEmpty: { errorMessage: "userId is required"},
        isString: { errorMessage: "userId must be string"},
    },
    groupName: {
        notEmpty: { errorMessage: "groupName is required"},
        isString: { errorMessage: "groupName must be string"},
    },
    groupDescription: {
        notEmpty: { errorMessage: "groupDescription is required"},
        isString: { errorMessage: "groupDescription must be string"},
    },
}

export const updateGroupSchema = {
    groupId: {
        notEmpty: { errorMessage: "userId is required"},
        isString: { errorMessage: "userId must be string"},
    },
    groupName: {
        notEmpty: { errorMessage: "groupName is required"},
        isString: { errorMessage: "groupName must be string"},
    },
    groupDescription: {
        notEmpty: { errorMessage: "groupDescription is required"},
        isString: { errorMessage: "groupDescription must be string"},
    },
    color: {
        notEmpty: { errorMessage: "color is required"},
        isString: { errorMessage: "color must be string"},
    },
}

