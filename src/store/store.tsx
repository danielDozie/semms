import create from 'zustand'
import { MobileNav, Cart, LoginForm, RegisterForm, AccountCard, AccountCardMobile, LoginOut, SEARCH_TOGGLE } from '../components/Types'


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

const useSearchStore = create<SEARCH_TOGGLE>(set => ({
    isSearchResult: false,
    toggleSearchResult: () => set(state => ({ isSearchResult: !state.isSearchResult }))

}))


export default useMobileNav;
export {useCart, useLoginStore, useRegisterStore, useAccountCardStore, useLoginOutStore, useAccountCardStoreMobile, useSearchStore};