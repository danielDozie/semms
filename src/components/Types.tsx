

///ZUSTAND STORE TYPES
export interface MobileNav {
    isMobileMenu: boolean
    toggleMobileMenu: () => void
}
export interface Cart {
    isCart: boolean
    toggleCart: () => void
}

export interface LoginForm {
    isLoginForm: boolean
    toggleLoginForm: () => void
}

export interface RegisterForm{
    isRegisterForm: boolean
    toggleRegisterForm: () => void
}

export interface AccountCard {
    isAccountCard: boolean
    toggleAccountCard: () => void
}
export interface AccountCardMobile {
    isAccountCardMobile: boolean
    toggleAccountCardMobile: () => void
}
export interface LoginOut{
    isLoggedIn: boolean
    setIsLoggedIn: any
}

export interface SEARCH_TOGGLE {
    isSearchResult: boolean
    toggleSearchResult: () => void
}
///ZUSTAND STORE TYPES ENDS HERE!!!


export interface ICOLLECTIONS {
    collection: any
}

export interface ISITEMAP {
    [x: string]: any
    title: string,
    err: object,
    data: Object
    result: Object
    item: Object
    loc: string
}
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
export interface SearchText {
    searchText: string;
}

export interface IPASSWORDRESET {
    email: string;
    password: string;
    confirm_password: string;
}
export interface ContactFormInput {
    fullname: string;
    message: string;
    phone: string;
    email: string;
    subject: string;
}
export interface AddressFormInput {
    firstname: string;
    lastname: string;
    company: string;
    address1: string;
    address2: string;
    city: string;
    country: string;
    postalcode: string;
    zip: string;
    phone: string
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

export interface IADDRESS {
    node: any;
    id: string;
    name: string;
    address1: string;
    address2: string;
    company: string;
    zip: string;
    state: string;
    country: string;
    region: string;
}

export interface INEWSLETTER {
    user_email: string;
}

