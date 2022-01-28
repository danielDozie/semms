//Cart Animation

export const cartAnimation = {
    hide: {
        opacity: 0,
        x: '100%',
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
            
        }
    
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .3,
            ease: "easeInOut",
            delay: 0.2
        }
    },
    overlay: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .3,
            fade: "fadeIn",
        
        }
    },
    exit: {
        opacity: 0,
        x: '100%',
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        }
    
    },
    exitOverlay: {
        opacity: 0,
        x: '100%',
        transition: {
            duration: 0.3,
            fade: 'fadeOut',
            delay:.2
        }
    
    },
}
