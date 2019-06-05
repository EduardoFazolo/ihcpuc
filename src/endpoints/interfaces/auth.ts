export interface Error {
    id: number
    message: string
}

//METHOD POST -> /login
export interface LoginEntrada {
    email: string
    password: string
}
export interface LoginSaida {
    error?: Error
    data: {
        name: string
    }
}

//METHOD POST -> /logoff
export interface LogoffEntrada {
    email: string
}
export interface LogoffSaida {
    error?: Error
}

//METHOD POST -> /subscribe
export interface LogoffEntrada {
    name: string
    lastName: string
    email: string
    password: string
}
export interface LogoffSaida {
    error?: Error
}

//METHOD POST -> /forgotpassword
export interface ForgotPasswordEntrada {
    email: string
}
export interface ForgotPasswordSaida {
    error?: Error
}

//METHOD POST -> /changepassword
export interface ChangePasswordEntrada {
    email: string
    password: string
    newPassword: string
}
export interface ChangePasswordSaida {
    error?: Error
}
