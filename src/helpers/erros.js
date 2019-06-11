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
module.exports.ErrorExistentUser = class ErrorExistentUser {
    constructor(message, id) {
        super(message)
        this.id = -501
    }
}
module.exports.ErrorNotRegistered = class ErrorNotRegistered {
    constructor(message) {
        super(message)
        this.id = -502
    }
}
module.exports.InvalidPassword = class InvalidPassword {
    constructor(message) {
        super(message)
        this.id = -503
    }
}
module.exports.InvalidPassConfirmation = class InvalidPassConfirmation {
    constructor(message) {
        super(message)
        this.id = -504
    }
}

