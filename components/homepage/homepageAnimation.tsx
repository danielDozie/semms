export const titleVariants = {
    hidden: {
        opacity: 0,
        y: -50
    },
    h1: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 1
        },
    },
    p: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 1
        }
    },
    btn1: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 2,
            duration: 1
        },
    },
    btn2: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 2.5,
            duration: 1
        },
    },
}
export const boxVariants = {
    hidden: {
        opacity: 0,
        y: -50
    },
    
    box1: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 1,
            ease: "easeInOut"
        }
    },
    box2: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 2,
            duration: 1,
            ease: "easeInOut"
        }
    },
    box3: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 3,
            duration: 1,
            ease: "easeInOut"
        }
    },
}


export const hightlightVariants = {
    hidden: {
        opacity: 0,
        y: 0
    },
    highlight1: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 2,
            duration: 1,
            fade: "fadeIn",
        }
    },
    highlight2: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 3,
            duration: 1,
            fade: "fadeIn",
        }
    },
    line: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 2.5,
            duration: 1,
            fade: "fadeIn",
        }
    },
}

export const productImageVariant = {
    initial: {
        opacity: 1,
    },
    animate:{
        opacity: 1,
    },
    hover: {
        opacity: 1,
        scale: 0.8,
        transition: {
            duration: 0.2,
            rotate: "rotate(4deg)",
        }
    }
}

export const productHover ={
    initial:{opacity: 0, y:-50} ,
    animate:{opacity: 1,}, 
    hover:{opacity: 0, y:0, transition:{duration: 1, ease: 'easeInOut', delay: 1}}
}