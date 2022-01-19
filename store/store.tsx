import create from 'zustand'

interface MobileNav {
    isOpen: boolean
    toggle: () => void
}

const useMobileNav = create<MobileNav>(set => ({
    isOpen: false,
    toggle: () => set(state => ({ isOpen: !state.isOpen }))
}))

export default useMobileNav;