import {MdLocationPin,MdOutlineAlternateEmail,MdSettingsPhone} from 'react-icons/md'
import Toggle from '../theme/darkModeToggle';
/**
 * A component that specifies the content of the footer on the website
 */
export default function Footer() {
  const year  = new Date().getFullYear();
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-wrap bg-slate-100 w-full md:w-[60%] py-16 bg-gradient-to-r from-black to-gray-700 bg-blend-multiply dark:bg-gray-600 dark:text-black p-3">
            <div className="w-full md:w-[40%] mx-4 md:ml-20">
              <div className="w-[160px] md:w-[140px] py-6">
                <img src="/image/semmsluxuries.svg" alt="semmsluxuries" />
              </div>
              <div className="flex text-gold gap-2 pb-3">
                <MdLocationPin size="25" />
                <p className="text-gray-300 font-light text-[15px]">1810 First Oaks St, Richmond, TX 77406</p>
              </div>
              <div className="flex text-gold gap-2 pb-3">
                <MdOutlineAlternateEmail size="20" />
                <p className="text-gray-300 font-light text-[15px]">support@semmsluxury.com</p>
              </div>
              <div className="flex text-gold gap-2 pb-3">
                <MdSettingsPhone size="20" />
                <p className="text-gray-300 font-light text-[15px]">+1 (281)-762-7955</p>
              </div>
            </div>
            <div className="w-full md:w-[20%] mx-4 hidden md:block">
              <h1 className="text-xl font-bold text-gray-300 underline underline-offset-8 pt-6">
                Information
              </h1>
              <div className="mt-8">
                <ul>
                  <li className="text-gray-300 font-light text-[15px] pb-2">
                    <a href="#">About Us</a>
                  </li>
                  <li className="text-gray-300 font-light text-[15px] pb-2">
                    <a href="#">Collections</a>
                  </li>
                  <li className="text-gray-300 font-light text-[15px] pb-2">
                    <a href="#">Discover</a>
                  </li>
                  <li className="text-gray-300 font-light text-[15px] pb-2">
                    <a href="#">Our Story</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-auto bg-white dark:bg-black dark:text-gray-300 px-8 md:px-8 py-16 md:mx-auto justify-apart gap-x-20 md:gap-x-28">
            <div className="min-w-[20%] text-gray-800 dark:text-gray-300">
              <h1 className="text-xl font-bold  underline underline-offset-8 pt-6">
                Useful Links
              </h1>
              <div className="mt-8">
                <ul>
                  <li className=" font-light text-[15px] pb-2">
                    <a href="#">Account</a>
                  </li>
                  <li className=" font-light text-[15px] pb-2">
                    <a href="#">Delivery</a>
                  </li>
                  <li className=" font-light text-[15px] pb-2">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className=" font-light text-[15px] pb-2">
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-gray-800 dark:text-gray-300">
              <h1 className="text-xl font-bold underline underline-offset-8 pt-6">
                Supports
              </h1>
              <div className="mt-8">
                <ul>
                  <li className=" font-light text-[15px] pb-2">
                    <a href="#">Contacts</a>
                  </li>
                  <li className=" font-light text-[15px] pb-2">
                    <a href="#">Returns</a>
                  </li>
                  <li className=" font-light text-[15px] pb-2">
                    <a href="#">Sitemap</a>
                  </li>
                  <li className=" font-light text-[15px] pb-2">
                    <a href="#">Affiliates</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row p-3 md:justify-between font-light text-gray-800 dark:text-gray-300 text-sm border-t-2 border-yellow-500">
          <div className="mb-4 md:pl-20 text-center md:text-left">
            <p>Copyright &copy; {year}. SEMMS Luxury Luggages.</p>
          </div>
          <div className="flex pb-2 md:pb-0 justify-center md:pr-20  gap-y-4 gap-x-6 md:gap-x-8">
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
