import React from 'react'
import Fuse from 'fuse.js'
import { SubmitHandler, useForm } from "react-hook-form";
import {SearchText } from '../../../src/types';
import Link from 'next/link';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Search({isSearchForm, showSearchResult, setShowSearchResult, products}:any) {
    const [isLoading, setIsLoading] = React.useState(false)
    const [searchResult, setSearchResult] = React.useState<any>([])
    const options = {
        includeScore: true,
        // Search in these places
        keys: ['node.title']
    }
    const fuse = new Fuse(products, options)

    const { register, formState: { errors }, reset, handleSubmit } = useForm<SearchText>();
    const onSubmit: SubmitHandler<SearchText> = inputdata => {
        setIsLoading(true)
        const result = fuse.search(inputdata.searchText)
        setTimeout(() => {
            setSearchResult(result)
            setShowSearchResult(true)
            setIsLoading(false)
        },500)
        reset()
    }

    React.useEffect(() => {
        setShowSearchResult(false)
    },[])
    
    
    
    return (<>
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className={`${isSearchForm ? 'relative' : 'hidden'} w-full bg-white dark:bg-black h-20 border-b border-myGray dark:border-gray-800`}>
            <div className="w-4/5 py-4 mx-auto">
                <div className="">
                  <div className="relative text-myGray dark:text-gray-900 focus-within:text-gray-400">
                    <input
                      type="search"
                      className="w-full py-2 pl-6 text-sm text-white rounded-full bg-myGray dark:bg-gray-800 focus:outline-none dark:focus:bg-gray-800 focus:bg-myGray dark:focus:text-myGray focus:text-gray-800"
                      placeholder="Search products..."
                      {...register("searchText", { required: true })}
                    />
                      {isLoading ? (<>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 bg-gray-500 rounded-full">
                          <button
                        className="flex px-12 text-sm gap-x-2 focus:outline-none text-myGray focus:text-myGray focus:shadow-outline"
                      disabled>
                       <AiOutlineLoading3Quarters size={15} className="animate-spin mt-[2px]" /> Searching...
                      </button>
                          </span>
                      </>) :  (<>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 rounded-full cursor-pointer bg-gold">
                          <button
                        type="submit"
                        className="px-12 text-sm focus:outline-none text-myGray focus:text-myGray focus:shadow-outline"
                      >
                        Search
                      </button>
                          </span>
                      </>)
                      }
                  </div>
                  <p className="text-[10px] text-red-400 py-1 pl-6">
                {errors.searchText?.type === "required" &&
                  "Specify search keyword"}
              </p>
                </div>
                
            </div>
        </div>
        
        </form>
        
        
        <div className={`${showSearchResult ? 'relative' : 'hidden'} w-full h-screen `}>
            <div className="w-[80%] h-[90%] overflow-auto no-scrollbar pt-6 mx-auto px-4 ">
                <div className="pt-4">
                <h1 className="font-bold text-gray-800 text-md dark:text-myGray">
                    Search Result
                </h1>
                {searchResult.length > 0 ? <p className="py-1 text-sm text-gray-500 dark:text-myGray">Result(s) curated by most relevant</p>: <p className="py-1 text-sm text-gray-500 dark:text-myGray">No result... sorry we couldn't find any product match for your text</p>
                }
                </div>
                <div>
                {searchResult.map((item: any) => 
                     <div className="flex flex-row items-center py-6">
                        <div className="flex items-center flex-auto gap-x-4">
                            <img src={item.item.node.images.edges[0].node.src} className="w-16 h-16 bg-gray-500 rounded-full dark:bg-gray-800" />
                            <div className="flex flex-col ">
                                <h1 className="text-sm font-semibold text-gray-500 dark:text-myGray">{item.item.node.title}</h1>
                                <p className="text-xs font-light text-gray-500 dark:text-myGray">{item.item.node.description}</p>
                                <div className="py-1 text-xs font-semibold text-gold">
                                <a href={"/products/"+item.item.node.handle}>View Product</a></div>
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
