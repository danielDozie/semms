import React from 'react';
import { motion } from "framer-motion"
import { titleVariants, boxVariants, hightlightVariants } from './homepageAnimation';

export default function Hero() {
    return (
    <>
        <div className="h-full w-full bg-gradient-to-t from-gray-900 to-black bg-blend-multiply">
            <div className="flex justify-center w-full pb-24">
                <div className="mt-16">
                    <div className="flex flex-col md:flex-row mt-20 md:mt-48 w-[80%] mx-auto">
                        <div className="flex-auto text-left md:max-w-[55%]">
                            <motion.h1 initial="hidden" animate="h1" variants={titleVariants} className="text-4xl font-bold text-transparent uppercase md:text-6xl bg-clip-text bg-gradient-to-b from-gold to-yellow-300">
                                SEMMS Luxury Collections
                            </motion.h1>
                            <motion.p initial="hidden" animate="p" variants={titleVariants} className="py-8 text-lg font-normal text-transparent uppercase bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-100 md:text-2xl">Feel Luxury. Your Travel Contents Are as Important as You Are. Own One that suits your personality.
                            </motion.p>
                            <div className="flex justify-start py-4 space-x-6">
                                <motion.button initial="hidden" animate="btn1" variants={titleVariants} className="px-4 py-2 text-sm font-light text-black rounded-md md:text-base bg-gold">
                                    Our Collections
                                </motion.button>
                                <motion.button initial="hidden" animate="btn2" variants={titleVariants}className="px-4 py-2 text-sm font-light rounded-md md:text-base text-gold outline outline-offset-2 outline-1">
                                    Discover our story
                                </motion.button>
                            </div>
                            <div className="flex justify-start space-x-6">
                                <motion.div initial="hidden" animate="highlight1" variants={hightlightVariants}>
                                    <h3 className="pt-2 text-sm text-gray-500 dark:text-gray-400 md:pt-12"><span className="text-2xl font-bold">5+ </span>Unique Styles</h3>
                                </motion.div>

                                <motion.div initial="hidden" animate="line" variants={hightlightVariants}>
                                    <h3 className="pt-2 text-sm text-gray-500 dark:text-gray-400 md:pt-12"><span className="text-2xl font-semibold">| </span></h3>
                                </motion.div>
                                
                                <motion.div initial="hidden" animate="highlight2" variants={hightlightVariants}>
                                    <h3 className="pt-2 text-sm text-gray-500 dark:text-gray-400 md:pt-12"><span className="text-2xl font-bold">Top </span> Grain Leather</h3>
                                </motion.div>
                            </div>
                        </div>
                        {/* Slide Images */}
                        <div className="flex pt-24 gap-x-4 md:pt-12 md:flex md:flex-wrap md:pl-16">
                            {slideImage.map(({image, title, cls, animate}:any) => 
                            <motion.div initial="hidden" animate={animate} variants={boxVariants} className={cls} key={animate}>
                                <img src={image} alt={title} className="md:-mt-2 md:ml-2" width="170" />
                            </motion.div>
                            )}
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>

    </>
    );
}

type SlideImage = {
    image: string,
    title: string,
    cls: string,
    animate: string,
}[]

const slideImage: SlideImage = [
    {
        image: 'https://res.cloudinary.com/semms-luxury/image/upload/v1645073487/semms%20luxury/brown_dot8e7.png',
        title: 'Brown',
        cls: 'mt-8 md:-mt-16',
        animate: 'box1',
    },
    {
        image: 'https://res.cloudinary.com/semms-luxury/image/upload/v1645073488/semms%20luxury/red_iva9pp.png',
        title: 'Red',
        cls: 'md:ml-52 md:-mt-32',
        animate: 'box2',
    },
    {
        image: 'https://res.cloudinary.com/semms-luxury/image/upload/v1645073487/semms%20luxury/pink_cneyus.png',
        title: 'Pink',
        cls: 'mt-8 md:ml-2 md:-mt-16',
        animate: 'box3',
    },
    
]