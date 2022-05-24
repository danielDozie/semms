import create from 'zustand'
import {MOBILE_NAV, CART, LOGIN_FORM, REGISTER_FORM, ACCOUNT_CARD, ACCOUNT_CARD_MOBILE, LOGIN_OUT, SEARCH_TOGGLE} from '../types/index'


const useMobileNav = create<MOBILE_NAV>(set => ({
    isMobileMenu: false,
    toggleMobileMenu: () => set(state => ({ isMobileMenu: !state.isMobileMenu }))
}))

const useCart = create<CART>(set => ({
    isCart: false,
    toggleCart: () => set(state => ({ isCart: !state.isCart }))
}))

const useLoginStore = create<LOGIN_FORM>(set => ({
    isLoginForm: false,
    toggleLoginForm: () => set(state => ({ isLoginForm: !state.isLoginForm }))
}))

const useRegisterStore = create<REGISTER_FORM>(set => ({
    isRegisterForm: false,
    toggleRegisterForm: () => set(state => ({ isRegisterForm: !state.isRegisterForm }))
}))

const useAccountCardStore = create<ACCOUNT_CARD>(set => ({
    isAccountCard: false,
    toggleAccountCard: () => set(state => ({ isAccountCard: !state.isAccountCard }))
}))
const useAccountCardStoreMobile = create<ACCOUNT_CARD_MOBILE>(set => ({
    isAccountCardMobile: false,
    toggleAccountCardMobile: () => set(state => ({ isAccountCardMobile: !state.isAccountCardMobile }))
}))

const useLoginOutStore = create<LOGIN_OUT>(set => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn: isLoggedIn })
}))

const useSearchStore = create<SEARCH_TOGGLE>(set => ({
    isSearchResult: false,
    toggleSearchResult: () => set(state => ({ isSearchResult: !state.isSearchResult }))

}))


export default useMobileNav;
export {useCart, useLoginStore, useRegisterStore, useAccountCardStore, useLoginOutStore, useAccountCardStoreMobile, useSearchStore};