module.exports.ErrorInvalidEmail = class ErrorInvalidEmail extends Error{
    constructor(message){
        super(message);
        this.id = -500;
    }
}
module.exports.ErrorExistentUser = class ErrorExistentUser extends Error{
    constructor(message, id){
        super(message);
        this.id = -501;
    }
}
module.exports.ErrorNotRegistered = class ErrorNotRegistered extends Error{
    constructor(message){
        super(message);
        this.id = -502;
    }
}
