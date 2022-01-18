export default function Hero() {
    return (<>
        <div className="w-full min-h-screen bg-gradient-to-t from-gray-900 to-black bg-blend-multiply">
            <div className="flex justify-center w-full pb-24">
                <div className="mt-16">
                    <div className="flex flex-col md:flex-row mt-20 md:mt-48 w-[80%] mx-auto">
                        <div className="flex-auto text-left md:max-w-[55%]">
                            <h1 className="text-white text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gold to-yellow-300 uppercase">
                                SEMMS Luxury Collections
                            </h1>
                            <p className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-yellow-100 font-normal text-lg md:text-2xl py-8 uppercase">Feel Luxury. Your Travel Contents Are as Important as You Are. Own One that suits your personality.</p>
                            <div className="flex justify-start space-x-6 py-4">
                                <button className="text-sm md:text-base bg-gold text-black font-light py-2 px-4 rounded-md">
                                    Our Collections
                                </button>
                                <button className="text-sm md:text-base text-gold outline outline-offset-2 outline-1 font-light py-2 px-4 rounded-md">
                                    Discover our story
                                </button>
                            </div>
                            <div className="flex justify-start space-x-6">
                                <div><h3 className="text-gray-500 dark:text-gray-400 pt-2 md:pt-12 text-sm"><span className="text-2xl font-bold">5+ </span>Unique Styles</h3></div>

                                <div><h3 className="text-gray-500 dark:text-gray-400 pt-2 md:pt-12 text-sm"><span className="text-2xl font-semibold">| </span></h3></div>

                                <div><h3 className="text-gray-500 dark:text-gray-400 pt-2 md:pt-12 text-sm"><span className="text-2xl font-bold">Top </span> Grain Leather</h3></div>
                            </div>
                        </div>

                        <div className="flex gap-x-4 pt-24 md:pt-12 md:flex md:flex-wrap md:pl-16">
                            <div className="mt-8 md:-mt-16">
                                <img src="/image/brown.png" alt="brown bag" className="md:-mt-2 md:ml-2" width="170" />
                            </div>
                            <div className="md:ml-52 md:-mt-32" >
                                <img src="/image/red.png" alt="red bag" className="md:-mt-2 md:ml-2" width="170" />
                            </div>
                            <div className="mt-8 md:ml-2 md:-mt-16">
                                <img src="/image/pink.png" alt="pink bag" className="md:-mt-2 md:ml-2" width="170" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>)
}