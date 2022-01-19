

//Cart
export default function Cart({isCart, toggleCart}:any) {
    return (
      <div>
        <div className={`${isCart ? 'flex' : 'hidden'} z-35 w-full h-screen fixed bg-black/60`} onClick={toggleCart}>
        <div className={`z-40 w-[80%] md:w-[35%] justify-end right-0 h-screen fixed bg-white dark:bg-black`}>
          <div className="mt-[4em] mx-8 overflow-auto">
            <div className="py-4">
              <div className="flex gap-x-2 pb-4">
                <h1 className="text-2xl font-light text-gray-800 dark:text-gray-300 my-4">Hello Guest</h1>
              </div>
              <p className="dark:text-gray-300 text-gray-800 text-sm font-normal leading-none">Let&apos;s get you started already</p>
            </div>
            <div className="my-4">
              <input type="text" className="w-full py-2 px-4 border-2 border-gold text-gray-800 rounded-lg" placeholder="Search for products" />
            </div>
            <div className="mt-12 font-semibold text-md gap-x-4 flex uppercase text-gray-800 dark:text-gray-300">
            </div>
          </div>
        </div>
        </div>
        </div>
    )
  }
