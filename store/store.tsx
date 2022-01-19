import create from 'zustand'

interface MobileNav {
    isMobileMenu: boolean
    toggleMobileMenu: () => void
}
interface Cart {
    isCart: boolean
    toggleCart: () => void
}

const useMobileNav = create<MobileNav>(set => ({
    isMobileMenu: false,
    toggleMobileMenu: () => set(state => ({ isMobileMenu: !state.isMobileMenu }))
}))

const useCart = create<Cart>(set => ({
    isCart: false,
    toggleCart: () => set(state => ({ isCart: !state.isCart }))
}))

export default useMobileNav;
export {useCart};