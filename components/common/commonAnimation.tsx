//Cart Animation

export const cartAnimation = {
    initial: {
        opacity: 0,
        x: '-100%',
    
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: 1,
            fade: "fadeIn"
        }
    },
}
