import { useForm } from "react-hook-form";
import { BiLogInCircle } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { HiX } from "react-icons/hi";
import { useLoginStore, useRegisterStore } from "../../../store/store";
import Image from 'next/image'
import { ILoginForm, FormInput } from "../../Types";
const logo ="https://res.cloudinary.com/semms-luxury/image/upload/v1645073488/semms%20luxury/semmsluxuries_wjjvu9.svg"


export const LoginForm = ({ isLoginForm}: ILoginForm) => {
  const toggleLoginForm = useLoginStore((state) => state.toggleLoginForm);
  const toggleRegisterForm = useRegisterStore(
    (state) => state.toggleRegisterForm
  );
  const { register, formState: { errors }, handleSubmit } = useForm<FormInput>();
  const onSubmit = (data: Object) => console.log(JSON.stringify(data));

  const showReg = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    toggleLoginForm()
    toggleRegisterForm();
  }
  return (
    <>
      <div
        className={`${isLoginForm ? "" : "hidden"
          } container w-full h-screen fixed bg-gray-900/95 z-20`}
        id="login-form"
      >
        <div
          className={`${isLoginForm ? "" : "hidden"
            } flex flex-col justify-center items-center h-full `}
        >
          <div className="w-full max-w-sm no-scrollbar">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md dark:bg-black">
                <div
                  className="flex justify-end mb-4 cursor-pointer"
                  onClick={toggleLoginForm}
                >
                  <span className="text-gray-900 dark:text-myGray">
                    <HiX />
                  </span>
                </div>
                <div className="mb-4 text-center">
                  {/* <h1 className="text-2xl font-bold text-center">Login</h1> */}
                  <Image
                    src={logo}
                    width="150px"
                    height="40px"
                    alt="login logo"
                  />
                  <h1 className="my-4 text-sm font-semibold text-center text-gold">
                    Login
                  </h1>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-myGray"
                  >
                    Email
                  </label>
                </div>
                <div className="mb-6">
                  <input
                    className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: true, pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
                  />
                  <p className="text-xs italic text-red-400">
                    {errors.email?.type === "required" &&
                      "Email is required"}
                  </p>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-myGray"
                  >
                    Password
                  </label>
                </div>
                <div className="mb-6">
                  <input
                    className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-black dark:focus-within:bg-gray-900 dark:border-gray-600 dark:text-myGray"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <p className="text-xs italic text-red-400">
                    {errors.password?.type === "required" &&
                      "Password is required"}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-light text-gray-700">
                    <a
                      href="#"
                      className="no-underline text-gold hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </h3>
                  <button
                    type="submit"
                    className="bg-gold hover:bg-gold-dark text-white font-normal text-sm py-[6px] px-4 rounded focus:outline-none focus:shadow-outline dark:text-gray-900"
                  >
                    Login
                    <BiLogInCircle className="inline-block w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
              <div className="py-4 text-center text-white bg-gray-900 rounded dark:bg-black">
                <div className="flex items-center justify-between mx-4">
                  <h3 className="text-xs font-light text-gray-700">
                    <a
                      href="#"
                      className="no-underline text-gold hover:underline"
                    >
                      Don't have an account?
                    </a>
                  </h3>
                  <button
                    className="px-2 py-1 text-xs font-light text-gray-900 rounded bg-gold hover:bg-gold-dark focus:outline-none focus:shadow-outline"
                    onClick={showReg}
                  >
                    Register
                    <FiUserPlus className="inline-block w-3 h-3 ml-2" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


