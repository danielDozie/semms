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

interface AccountCard {
    isAccountCard: boolean
    toggleAccountCard: () => void
}
interface AccountCardMobile {
    isAccountCardMobile: boolean
    toggleAccountCardMobile: () => void
}
interface LoginOut{
    isLoggedIn: boolean
    setIsLoggedIn: any
}
//////////////////////////////////////////




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

const useAccountCardStore = create<AccountCard>(set => ({
    isAccountCard: false,
    toggleAccountCard: () => set(state => ({ isAccountCard: !state.isAccountCard }))
}))
const useAccountCardStoreMobile = create<AccountCardMobile>(set => ({
    isAccountCardMobile: false,
    toggleAccountCardMobile: () => set(state => ({ isAccountCardMobile: !state.isAccountCardMobile }))
}))

const useLoginOutStore = create<LoginOut>(set => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn: isLoggedIn })
}))


export default useMobileNav;
export {useCart, useLoginStore, useRegisterStore, useAccountCardStore, useLoginOutStore, useAccountCardStoreMobile};