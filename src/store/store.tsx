import create from 'zustand'

interface MobileNav {
    isMobileMenu: boolean
    toggleMobileMenu: () => void
}
interface Cart {
    isCart: boolean
    toggleCart: () => void
}

interface LoginForm {
    isLoginForm: boolean
    toggleLoginForm: () => void
}

interface RegisterForm{
    isRegisterForm: boolean
    toggleRegisterForm: () => void
}

const useMobileNav = create<MobileNav>(set => ({
    isMobileMenu: false,
    toggleMobileMenu: () => set(state => ({ isMobileMenu: !state.isMobileMenu }))
}))

const useCart = create<Cart>(set => ({
    isCart: false,
    toggleCart: () => set(state => ({ isCart: !state.isCart }))
}))

const useLoginStore = create<LoginForm>(set => ({
    isLoginForm: false,
    toggleLoginForm: () => set(state => ({ isLoginForm: !state.isLoginForm }))
}))

const useRegisterStore = create<RegisterForm>(set => ({
    isRegisterForm: false,
    toggleRegisterForm: () => set(state => ({ isRegisterForm: !state.isRegisterForm }))
}))

export default useMobileNav;
export {useCart, useLoginStore, useRegisterStore};