import React from 'react'
import Fuse from 'fuse.js'
import { SubmitHandler, useForm } from "react-hook-form";
import {SearchText } from '../../src/components/Types';
import Link from 'next/link';
import Head from 'next/head';

export default function Index({isSearchForm, showSearchResult, setShowSearchResult, products}:any) {
    
    const [searchResult, setSearchResult] = React.useState<any>([])
    const options = {
        includeScore: true,
        // Search in these places
        keys: ['node.title']
    }
    const fuse = new Fuse(products, options)

    const { register, formState: { errors }, reset, handleSubmit } = useForm<SearchText>();
    const onSubmit: SubmitHandler<SearchText> = inputdata => {
        const result = fuse.search(inputdata.searchText)
        setSearchResult(result)
        setShowSearchResult(true)
        reset()
    }
    
    
    return (<>
        <Head>
            <title>Search - {process.env.storename}</title>
        </Head>
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className={`${isSearchForm ? 'relative' : 'hidden'} w-full bg-white dark:bg-black h-20 border-b border-myGray dark:border-gray-800`}>
            <div className="w-4/5 mx-auto py-4">
                <div className="">
                  <div className="relative text-myGray dark:text-gray-900 focus-within:text-gray-400">
                    <input
                      type="search"
                      className="w-full py-2 pl-6 text-sm text-white bg-myGray dark:bg-gray-800 rounded-full focus:outline-none dark:focus:bg-gray-800 focus:bg-myGray dark:focus:text-myGray focus:text-gray-800"
                      placeholder="Search products..."
                      {...register("searchText", { required: true })}
                    />
                    
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 bg-gold rounded-full">
                      <button
                        type="submit"
                        className="px-12 focus:outline-none text-myGray focus:text-myGray focus:shadow-outline text-sm"
                      >
                        Search
                      </button>
                    </span>
                  </div>
                  <p className="text-[10px] text-red-400 py-1 pl-6">
                {errors.searchText?.type === "required" &&
                  "Specify search keyword"}
              </p>
                </div>
                
            </div>
        </div>
        
        </form>
        
        
        <div className={`relative w-full h-screen `}>
            <div className="w-[80%] h-[90%] overflow-auto no-scrollbar pt-6 mx-auto px-4 ">
                <div className="pt-4">
                <h1 className="text-md font-bold text-gray-800 dark:text-myGray">
                    Search Result
                </h1>
                 <p className="text-sm py-1 text-gray-500 dark:text-myGray">Result(s) curated by most relevant</p>
                </div>
                <div>
                {searchResult.map((item: any) => 
                     <div className="flex flex-row items-center py-6">
                        <div className="flex flex-auto items-center gap-x-4">
                            <img src={item.item.node.images.edges[0].node.src} className="w-16 h-16 bg-gray-500 dark:bg-gray-800 rounded-full" />
                            <div className="flex flex-col ">
                                <h1 className="text-sm text-gray-500 dark:text-myGray font-semibold">{item.item.node.title}</h1>
                                <p className="text-xs text-gray-500 dark:text-myGray font-light">{item.item.node.description}</p>
                                <div className="text-xs text-gold font-semibold py-1">
                                <Link href={"/products/"+item.item.node.handle}>View Product</Link></div>
                            </div>
                        </div>
                        
                    </div>

                )}

                </div>
            </div>
        </div>
        </>
    )
}
