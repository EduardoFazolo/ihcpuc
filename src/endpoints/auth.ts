
export interface Error{
    id: number
    msg: string
}

//METHOD POST -> /login
export interface LoginEntrada{
    email: string
    password: string
}
export interface LoginSaida{
    error: Error
    name: string
}

//METHOD POST -> /logoff
export interface LogoffEntrada{
    email: string
}
export interface LogoffSaida{
    error: Error
}

//METHOD POST -> /subscribe
export interface LogoffEntrada{
    email: string
}
export interface LogoffSaida{
    error: Error
}

//METHOD POST -> /forgotPassword
export interface ForgotPasswordEntrada{
    email: string
}
export interface ForgotPasswordSaida{
    error: Error
}

//METHOD POST -> /forgotPassword
export interface ForgotPasswordEntrada{
    email: string
}
export interface ForgotPasswordSaida{
    error: Error
}

//METHOD POST -> /changepassword
export interface ForgotPasswordEntrada{
    email: string
    password: string
    newPassword: string
}
export interface ForgotPasswordSaida{
    error: Error    
}

