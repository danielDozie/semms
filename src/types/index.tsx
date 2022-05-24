//typescript types
export interface CARTSTORE {
    lineItems: {
        id: string;
        title: string;
    }[],
    addToCart: (props: []) => void
    productCount: number,
    setProductCount: (props: number) => void
    removeItem: (props: string) => void
    selectedOption: any
    setSelectedOption: (props: []) => void
}
   
export interface COLLECTION_STORE {
    setCollections: () => void
    collections: any[]
}

export interface CUSTOMER {
    accessToken: string
    expiresAt: string
    setAccessToken: (props: string) => void
    setExpiresAt: (props: string) => void
}

export interface CUSTOMER_DETAILS {
    customer: {
        id: string
        firstName: string
        lastName: string
        defaultAddress:{
            id:string,
            address1:string,
            address2:string,
            city:string,
            company:string,
            country:string,
            firstName:string,
            lastName:string,
            phone:string,
            province:string,
            zip:string
        },
        addresses:{
            edges:[]
        },
        orders: {
            edges: [
                {
                    node: {
                    name: string
                }
            }
            ]
        },
    },
    setCustomer: (props: Object) => void
}
export interface PRODUCT_DATA {
    increaseQuantity: () => void;
    decreaseQuantity: () => void;
    setProducts: () => void;
    products: {
        node:{
            id: string,
            handle: string,
            media: {
                edges: {
                    node:{
                        previewImage: {
                            src: string,
                            altText: string,
                        }
                    }
                }[]
            },
            vendor: string,
            ratings:{
                value: string
            },
            title: string,
            priceRange:{
                minVariantPrice: {
                    amount: string
                    currencyCode: string
                }
                maxVariantPrice: {
                    amount: string
                    currencyCode: string
                }
            }
        }
    }[]
    quantity: number,
}

export interface MOBILE_NAV {
    isMobileMenu: boolean
    toggleMobileMenu: () => void
}
export interface CART {
    isCart: boolean
    toggleCart: () => void
}

export interface LOGIN_FORM {
    isLoginForm: boolean
    toggleLoginForm: () => void
}

export interface REGISTER_FORM{
    isRegisterForm: boolean
    toggleRegisterForm: () => void
}

export interface ACCOUNT_CARD {
    isAccountCard: boolean
    toggleAccountCard: () => void
}
export interface ACCOUNT_CARD_MOBILE {
    isAccountCardMobile: boolean
    toggleAccountCardMobile: () => void
}
export interface LOGIN_OUT{
    isLoggedIn: boolean
    setIsLoggedIn: (props: boolean) => void
}

export interface SEARCH_TOGGLE {
    isSearchResult: boolean
    toggleSearchResult: () => void
}

export interface COLLECTIONS {
    collection: {
        node: {
            title: string,
            products: {
                edges: []
            }
        }
    }
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

export interface PASSWORDRESET {
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
export interface FORM_ADDRESS_INPUT {
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

export interface ADDRESS {
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

export interface NEWSLETTER {
    user_email: string;
}

