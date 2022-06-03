import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { CgClose, CgShoppingBag } from "react-icons/cg";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import Link from "next/link";
import useMobileNav, { useAccountCardStore, useAccountCardStoreMobile, useLoginOutStore, useLoginStore, useRegisterStore } from "../../store/store";
import { useCart } from "../../store/store";
import Cart from "./Cart";
import Head from "next/head";
import { useCartStore } from "../../store/cartStore";
import _ from "lodash";
import { motion, AnimatePresence } from "framer-motion";
import { mobileMenuAnimation } from "./commonAnimation";
import { useCustomerDetailsStore, useCustomerStore } from "../../store/customerStore";
import { FaUserCircle } from "react-icons/fa";
import { BiCaretDown } from "react-icons/bi";
import { AccountCard } from "./AccountCard";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AccountCardMobile } from "./AccountCardMobile";
import { useQuery } from "@apollo/client";
import { CUSTOMER_DETAILS } from "../../graphql/customerQuery";
import router from 'next/router'
import Search from "./Search";
import { useProductStore } from "../../store/productStore";
const logo = "https://res.cloudinary.com/semms-luxury/image/upload/v1645073488/semms%20luxury/semmsluxuries_wjjvu9.svg"
/**
 * A client component that specifies the content of the header on the website
 */
export default function Header() {
  const productCount = useCartStore((state) => state.productCount);
  const [hasProducts, setHasProducts] = React.useState(false);
  const isMobileMenu = useMobileNav((state) => state.isMobileMenu);
  const toggleMobileMenu = useMobileNav((state) => state.toggleMobileMenu);
  const isCart = useCart((state: { isCart: any }) => state.isCart);
  const toggleCart = useCart((state: { toggleCart: any }) => state.toggleCart);
  const isLoginForm = useLoginStore((state) => state.isLoginForm);
  const isRegisterForm = useRegisterStore((state) => state.isRegisterForm)
  const [count, setCount] = React.useState(0);
  const accessToken = useCustomerStore((state) => state.accessToken);
  const [localAccessToken, setLocalAccessToken] = React.useState({
    state: {
      accessToken: ""
    }
  });
  //const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const isLoggedIn = useLoginOutStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useLoginOutStore((state) => state.setIsLoggedIn);
  const products = useProductStore(state => state.products)
  const [isSearchForm, setIsSearchForm] = React.useState(false);
  const [showSearchResult, setShowSearchResult] = React.useState(false);

  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      let localStorageToken = localStorage?.getItem("customerAccessToken");
      let localToken = JSON.parse(localStorageToken as string);
      setLocalAccessToken(localToken);
    }
    return () => {
      mounted = false;
    }
  }, []);

  React.useEffect(() => {
    let mounted = true;
    if (mounted && accessToken && accessToken === localAccessToken?.state?.accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    return () => {
      mounted = false;
    }

  }, [accessToken, localAccessToken]);


  //hide the cart icon if there are no products in the cart
  React.useEffect(() => {
    setCount(productCount);
    if (productCount === 0) {
      setHasProducts(false);
    } else {
      setHasProducts(true);
    }
  }, [productCount, hasProducts]);

  //Disable scroll when menu is open
  React.useEffect(() => {
    if (isMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMobileMenu]);

  //Disable scroll when cart is open
  React.useEffect(() => {
    if (isCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isCart]);

  const toggleMenu = () => {
    if (isCart) {
      toggleCart();
    }
    toggleMobileMenu();
  };

  const cartToggle = () => {
    if (isMobileMenu) {
      toggleMobileMenu();
    }
    toggleCart();
  };

  React.useEffect(() => {
    if (isLoginForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isLoginForm]);

  React.useEffect(() => {
    if (isRegisterForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isRegisterForm]);



  return (
    <>
      <Head>
        <title>{process.env.SiteTitle}</title>
      </Head>
      {/* desktop header */}
      <div className="w-full fixed z-20 hidden mx-auto bg-white dark:bg-black md:block">
        <div className="flex justify-between h-10 px-16 py-12 mx-auto">
          <div className="-mt-1">
            {/* logo */}
            <Link href={`/`}>
              <img
                src={logo}
                alt="logo"
                className="ml-2 -mt-2 cursor-pointer"
                width="125"
              />
            </Link>
          </div>
          {/* menu */}
          <div className="mx-auto">
            <div>
              <ul className="flex uppercase">
                {menuItem.map((menu) => (
                  <li className="mr-6" key={menu.id}>
                    <div className="text-sm font-normal leading-none text-gold">
                      <Link href={menu.link}>{menu.title}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/*header right elements */}
          <div className="flex -mt-1">
            <div className="text-sm font-normal leading-none cursor-pointer text-gold">
              {isSearchForm ?  <CgClose size={23} className="inline-block mr-6" onClick={() => {setIsSearchForm(false); setShowSearchResult(false)}}/> : <FiSearch size={23} className="inline-block mr-6" onClick={() => setIsSearchForm(!isSearchForm)} />}
            </div>
            <div className="text-sm font-normal leading-none cursor-pointer text-gold">
              {isLoggedIn && isLoggedIn ?
                <LoggedInUser /> :
                <div>
                  <FiUser
                  size={23}
                  className="inline-block mr-6"
                  onClick={() => router.push("/account/login")}
                />
                {/* <div className="text-[9px]">Login</div> */}
                </div>}
            </div>
            <div className="text-sm font-normal leading-none cursor-pointer text-gold">
              <CgShoppingBag
                size={23}
                className="inline-block mr-2"
                onClick={cartToggle}
              />
              <div
                className={`${hasProducts ? "" : "hidden"
                  } h-4 w-4 bg-gold absolute rounded-full text-center -mt-3 ml-4`}
              >
                <span className="font-light text-[10px] text-myGray dark:text-black">
                  {count}
                </span>
              </div>
            </div>
          </div>
        </div>
        <AccountCard />
        <Cart isCart={isCart} cartToggle={cartToggle} />
        <Search products={products} isSearchForm={isSearchForm} showSearchResult={showSearchResult} setShowSearchResult={setShowSearchResult} />
        
      </div>

      {/* mobile header */}
      <AnimatePresence>
        {isMobileMenu && (
          <motion.div
            initial="hide"
            animate="overlay"
            exit="exitOverlay"
            variants={mobileMenuAnimation}
            className={`${isMobileMenu ? "flex" : "hidden"
              } z-35 w-full h-screen fixed bg-gray-900/80 md:hidden overflow-hidden`}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
      <div className="z-20 flex flex-auto mx-auto px-4 pt-4 pb-8 fixed h-[4em] w-full bg-white dark:bg-black justify-between md:hidden">
        <div className="cursor-pointer text-gold" onClick={toggleMenu}>
          {isMobileMenu ? <HiX size={25} /> : <HiMenuAlt2 size={25} />}
        </div>
        <div>
          <Link href="/" passHref>
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer"
              width="120"
            />
          </Link>
        </div>
        <div>
          <div className="text-sm font-normal leading-none cursor-pointer text-gold">
            <CgShoppingBag
              size={24}
              className="inline-block"
              onClick={cartToggle}
            />
            <span
              className={`${hasProducts ? "" : "hidden"
                } h-4 w-4 bg-gold absolute rounded-full text-center -ml-2 mt-3`}
            >
              <span className="font-light text-[10px] text-myGray dark:text-black">
                {count}
              </span>
            </span>
          </div>
        </div>
      </div>
      <MobileMenu isMobileMenu={isMobileMenu} />
      <Cart isCart={isCart} cartToggle={cartToggle} />
    </>
  );
}

//Mobile menu
export function MobileMenu({ isMobileMenu }: any) {
  const toggleMobileMenu = useMobileNav((state) => state.toggleMobileMenu);
  const isLoggedIn = useLoginOutStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useLoginOutStore((state) => state.setIsLoggedIn);
  const customer = useCustomerDetailsStore((state) => state.customer);

  const [loading, setLoading] = React.useState(false);

  const logout = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("customerAccessToken");
      setIsLoggedIn(false);
      toast.success("Logged out successfully", {
        duration: 3000,
      });
      setLoading(false);
      router.push('/');
      toggleMobileMenu();
    }, 2000)
  }

  return (
    <div>
      <AnimatePresence>
        {isMobileMenu && (
          <>
            <motion.div
              initial="hide"
              animate="show"
              exit="exit"
              variants={mobileMenuAnimation}
              className={`${isMobileMenu ? "flex" : "hidden"
                } z-20 flex-wrap w-[80%] h-screen fixed bg-white dark:bg-black mt-[3.8em] md:hidden`}
            >
              <div className="mt-[4em] mx-8 overflow-auto">
                <div className="py-4">
                  <div className="flex pb-4 gap-x-2">
                    <h1 className="my-4 text-[18px] font-semibold text-gray-800 dark:text-gray-300 cursor-pointer">
                      Hello {customer?.firstName ? customer.firstName : "Guest"}
                    </h1>
                    <div>
                      {isLoggedIn && isLoggedIn ? <LoggedInUser /> : <FiUser
                        size={23}
                        className="inline-block mt-[18px] md:mr-6 text-gold "
                      />}
                    </div>
                  </div>
                  <AccountCardMobile />
                  <p className="text-sm font-normal leading-none text-gray-800 dark:text-gray-300">
                    Let&apos;s get you started already
                  </p>
                </div>
                <div className="my-4">
                  <div className="relative text-myGray dark:text-gray-900 focus-within:text-gray-400">
                    <input
                      type="search"
                      name="search"
                      className="w-full py-2 pl-4 text-sm text-white bg-gray-900 rounded-md dark:bg-myGray focus:outline-none dark:focus:bg-white dark:focus:text-gray-900 focus:text-myGray"
                      placeholder="Search products"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
                <div className="my-4">
                  <ul className="flex flex-col">
                    {menuItem.map((menu) => (
                      <li
                        className="my-4"
                        key={menu.id}
                        onClick={toggleMobileMenu}
                      >
                        <div className="font-light leading-none text-gray-800 text-md dark:text-gray-300 hover:underline underline-offset-4 decoration-2 decoration-gold">
                          <Link href={menu.link}>{menu.title}</Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {isLoggedIn && isLoggedIn ? (<>
                  <div className="flex mt-12 text-sm font-semibold text-gray-800 uppercase gap-x-4 dark:text-gray-300">
                    <div onClick={logout}>
                      {loading ? (<><div className="flex">
                        <h1 className="italic">Logging out...</h1> <AiOutlineLoading3Quarters size={14} className="mt-1 ml-2 text-gray-800 dark:text-myGray animate-spin" />
                      </div></>) : (<><Link href="#">Logout</Link></>)}
                    </div>
                  </div>
                </>) : (
                  <>
                    <div className="flex mt-12 text-sm font-semibold text-gray-800 uppercase gap-x-4 dark:text-gray-300">
                      <div onClick={toggleMobileMenu}>
                        <Link href="/account/login/">Login</Link>
                      </div>
                      <div onClick={toggleMobileMenu}>
                        <Link href="/account/register/">Register</Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}


export const LoggedInUser = () => {
  const toggleAccountCardMobile = useAccountCardStoreMobile((state) => state.toggleAccountCardMobile);
  const toggleAccountCard = useAccountCardStore((state) => state.toggleAccountCard);
  const customer = useCustomerDetailsStore((state) => state.customer);
  const accessToken = useCustomerStore((state) => state.accessToken);
  const setCustomer = useCustomerDetailsStore((state) => state.setCustomer);

  const { loading, error, data } = useQuery(CUSTOMER_DETAILS, {
    variables: {
      "customerAccessToken": accessToken,
    },
  });
  React.useEffect(() => {
    let mounted = true
    if (!loading && !error && mounted) {
      setCustomer(data.customer)
    }
    return () => {
      mounted = false
    }
  }, [data])



  const toggleAccount = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (window.innerWidth < 768) {
      toggleAccountCardMobile();
    }
    else {
      toggleAccountCard();
    }
  }

  return (<><div className="flex mx-2 mt-5 rounded-full md:mr-6 md:mt-0 md:mx-4 drop-shadow-sm" onClick={toggleAccount}>
    <FaUserCircle className="text-gold mx-auto w-[20px] h-[20px] md:w-[23px] md:h-[23px]" />
    <p className="font-normal mt-1.5 md:px-1.5 hidden md:inline-block">{customer?.firstName}</p>
    <BiCaretDown size={14} className="mt-1 md:mt-1.5 text-gold ml-1 md:ml-0" />
  </div></>)
}



//Menu items
const menuItem = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Collections",
    link: "/collections",
  },
  {
    id: 3,
    title: "Products",
    link: "/products",
  },
  {
    id: 4,
    title: "About",
    link: "/about",
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];
