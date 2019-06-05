export interface ServerError {
    id: number
    message: string
}

//METHOD POST -> /login
export interface LoginEntrada {
    email: string
    password: string
}
export interface LoginSaida {
    error?: ServerError
    data: {
        name: string
    }
}

//METHOD POST -> /logoff
export interface LogoffEntrada {
    email: string
}
export interface LogoffSaida {
    error?: ServerError
}

//METHOD POST -> /subscribe
export interface SubscribeEntrada {
    name: string
    lastName: string
    email: string
    password: string
}
export interface SubscribeSaida {
    error?: ServerError
}

//METHOD POST -> /forgotpassword
export interface ForgotPasswordEntrada {
    email: string
}
export interface ForgotPasswordSaida {
    error?: ServerError
}

//METHOD POST -> /changepassword
export interface ChangePasswordEntrada {
    email: string
    password: string
    newPassword: string
}
export interface ChangePasswordSaida {
    error?: ServerError
}
