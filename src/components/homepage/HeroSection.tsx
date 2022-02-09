import React from 'react';
import { motion } from "framer-motion"
import { titleVariants, boxVariants, hightlightVariants } from './homepageAnimation';

export default function Hero() {
    return (
    <>
        <div className="max-w-7xl h-full bg-gradient-to-t from-gray-900 to-black bg-blend-multiply">
            <div className="flex justify-center w-full pb-24">
                <div className="mt-16">
                    <div className="flex flex-col md:flex-row mt-20 md:mt-48 w-[80%] mx-auto">
                        <div className="flex-auto text-left md:max-w-[55%]">
                            <motion.h1 initial="hidden" animate="h1" variants={titleVariants} className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gold to-yellow-300 uppercase">
                                SEMMS Luxury Collections
                            </motion.h1>
                            <motion.p initial="hidden" animate="p" variants={titleVariants} className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-yellow-100 font-normal text-lg md:text-2xl py-8 uppercase">Feel Luxury. Your Travel Contents Are as Important as You Are. Own One that suits your personality.
                            </motion.p>
                            <div className="flex justify-start space-x-6 py-4">
                                <motion.button initial="hidden" animate="btn1" variants={titleVariants} className="text-sm md:text-base bg-gold text-black font-light py-2 px-4 rounded-md">
                                    Our Collections
                                </motion.button>
                                <motion.button initial="hidden" animate="btn2" variants={titleVariants}className="text-sm md:text-base text-gold outline outline-offset-2 outline-1 font-light py-2 px-4 rounded-md">
                                    Discover our story
                                </motion.button>
                            </div>
                            <div className="flex justify-start space-x-6">
                                <motion.div initial="hidden" animate="highlight1" variants={hightlightVariants}>
                                    <h3 className="text-gray-500 dark:text-gray-400 pt-2 md:pt-12 text-sm"><span className="text-2xl font-bold">5+ </span>Unique Styles</h3>
                                </motion.div>

                                <motion.div initial="hidden" animate="line" variants={hightlightVariants}>
                                    <h3 className="text-gray-500 dark:text-gray-400 pt-2 md:pt-12 text-sm"><span className="text-2xl font-semibold">| </span></h3>
                                </motion.div>
                                
                                <motion.div initial="hidden" animate="highlight2" variants={hightlightVariants}>
                                    <h3 className="text-gray-500 dark:text-gray-400 pt-2 md:pt-12 text-sm"><span className="text-2xl font-bold">Top </span> Grain Leather</h3>
                                </motion.div>
                            </div>
                        </div>
                        {/* Slide Images */}
                        <div className="flex gap-x-4 pt-24 md:pt-12 md:flex md:flex-wrap md:pl-16">
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
        image: '/image/brown.png',
        title: 'Brown',
        cls: 'mt-8 md:-mt-16',
        animate: 'box1',
    },
    {
        image: '/image/red.png',
        title: 'Red',
        cls: 'md:ml-52 md:-mt-32',
        animate: 'box2',
    },
    {
        image: '/image/pink.png',
        title: 'Pink',
        cls: 'mt-8 md:ml-2 md:-mt-16',
        animate: 'box3',
    },
    
]