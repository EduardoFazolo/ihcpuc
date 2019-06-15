class ServerError extends Error {
    

    toJSON() {
        return {
            id: this.id,
            message: this.message
        }
    }
}

module.exports.ErrorInvalidEmail = class ErrorInvalidEmail extends ServerError {
    constructor(message) {
        super(message)
        this.id = -500
    }
}
module.exports.ErrorExistentUser = class ErrorExistentUser extends ServerError {
    constructor(message, id) {
        super(message)
        this.id = -501
    }
}
module.exports.ErrorNotRegistered = class ErrorNotRegistered extends ServerError {
    constructor(message) {
        super(message)
        this.id = -502
    }
}
module.exports.InvalidPassword = class InvalidPassword extends ServerError {
    constructor(message) {
        super(message)
        this.id = -503
    }
}
module.exports.InvalidPassConfirmation = class InvalidPassConfirmation extends ServerError {
    constructor(message) {
        super(message)
        this.id = -504
    }
}

