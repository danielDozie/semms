import Link from 'next/link';
import { MdLocationPin, MdOutlineAlternateEmail, MdSettingsPhone } from 'react-icons/md'
import Toggle from '../theme/darkModeToggle';
import Image from 'next/image';
const logo = "https://res.cloudinary.com/semms-luxury/image/upload/v1645073488/semms%20luxury/semmsluxuries_wjjvu9.svg"

/**
 * A component that specifies the content of the footer on the website
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-wrap bg-slate-100 w-full md:w-[60%] py-16 bg-gradient-to-r from-black to-gray-700 bg-blend-multiply dark:bg-gray-600 dark:text-black p-3">
            <div className="w-full md:w-[40%] mx-4 md:ml-20">
              <div className="w-[160px] md:w-[140px] py-6">
                <img src={logo} alt="footer logo" />
              </div>
              <div className="flex gap-2 pb-3 text-gold">
                <MdLocationPin size="23" />
                <p className="text-gray-300 font-light text-[15px]">1810 First Oaks St, Richmond, TX 77406</p>
              </div>
              <div className="flex gap-2 pb-3 text-gold">
                <MdOutlineAlternateEmail size="20" />
                <p className="text-gray-300 font-light text-[15px]">support@semmslux.com</p>
              </div>
              <div className="flex gap-2 pb-3 text-gold">
                <MdSettingsPhone size="20" />
                <p className="text-gray-300 font-light text-[15px]">+1 (281)-762-7955</p>
              </div>
            </div>
            <div className="w-full md:w-[20%] mx-4 hidden md:block">
              <h1 className="pt-6 text-xl font-bold text-gray-300 underline underline-offset-8">
                Information
              </h1>
              <div className="mt-8">
                <ul>
                  <li className="text-gray-300 font-light text-[15px] pb-2">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="text-gray-300 font-light text-[15px] pb-2">
                    <Link href="/collections">Collections</Link>
                  </li>
                  <li className="text-gray-300 font-light text-[15px] pb-2">
                    <Link href="/products">Products</Link>
                  </li>
                  <li className="text-gray-300 font-light text-[15px] pb-2">

                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-auto px-8 py-16 bg-white dark:bg-black dark:text-gray-300 md:px-8 md:mx-auto justify-apart gap-x-20 md:gap-x-28">
              <div className="min-w-[20%] text-gray-800 dark:text-gray-300">
                <h1 className="pt-6 text-xl font-bold underline underline-offset-8">
                  Useful Links
                </h1>
                <div className="mt-8">
                  <ul>
                    <li className=" font-light text-[15px] pb-2">
                      <Link href="/account">Account</Link>
                    </li>
                    <li className=" font-light text-[15px] pb-2">
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li className=" font-light text-[15px] pb-2">
                      <Link href="/service-and-repairs">Service & Repairs</Link>
                    </li>
                    <li className=" font-light text-[15px] pb-2">
                      <Link href="/terms">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-gray-800 dark:text-gray-300">
                <h1 className="pt-6 text-xl font-bold underline underline-offset-8">
                  Supports
                </h1>
                <div className="mt-8">
                  <ul>
                    <li className=" font-light text-[15px] pb-2">
                      <Link href="/contact">Contacts</Link>
                    </li>
                    <li className=" font-light text-[15px] pb-2">
                      <Link href="/returns">Returns</Link>
                    </li>
                    <li className=" font-light text-[15px] pb-2">
                      <Link href="/sitemap">Sitemap</Link>
                    </li>
                    <li className=" font-light text-[15px] pb-2">
                      <Link href="/affiliates">Affiliates</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex px-8 gap-x-4 -mt-12">
              {
                footerLogo.map((logo, index)=> <div key={index}>
                  <Image src={logo.src} width={`100%`} height={`100%`} alt={logo.alt}/>
                </div>)
              }
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse p-3 text-sm font-light text-gray-800 border-t-2 border-yellow-500 md:flex-row md:justify-between dark:text-gray-300">
          <div className="mb-4 text-center md:pl-20 md:text-left">
            <p>Copyright &copy; {year}. SEMMS Luxuries.</p>
          </div>
          <div className="flex justify-center pb-2 md:pb-0 md:pr-20 gap-y-4 gap-x-6 md:gap-x-8">
            <a href="#">
              <p>Facebook</p>
            </a>
            <a href="#">
              <p>Instagram</p>
            </a>
            <a href="#">
              <p>Tiktok</p>
            </a>
            <Toggle />
          </div>
        </div>
      </div>
    </>
  );
}


const footerLogo = [
  {
    src: 'https://res.cloudinary.com/semms-luxury/image/upload/v1655073487/semms%20luxury/ShopPay_-_Color_ibshym.svg',
    alt: 'ShopPay',
  },
  {
    src: 'https://res.cloudinary.com/semms-luxury/image/upload/v1655073854/semms%20luxury/paypal-seeklogo.com_tjhhtg.svg',
    alt: 'PayPal',
  },
  {
    src: 'https://res.cloudinary.com/semms-luxury/image/upload/v1655074235/semms%20luxury/3fbb3fe6d4150f5cb50eb1c978c32153d908dee5_mxgagr.svg',
    alt: 'Shopify',
  }
]