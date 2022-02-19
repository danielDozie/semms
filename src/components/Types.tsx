export interface Collections {
    collection: Object;
}

//Forms
export interface LoginFormInput{
    email: string;
    password: string;
}
export interface FormInput {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    password: string;
}
export interface ContactFormInput {
    fullname: string;
    message: string;
    phone: string;
    email: string;
    subject: string;
}

export interface RegForm {
    isRegisterForm: boolean;
}

export interface Logo {
    logo: string;
}
export interface ILoginForm {
    isLoginForm: boolean;
}
