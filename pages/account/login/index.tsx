import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { BiLogInCircle } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { useMutation } from '@apollo/client';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { CREATE_CUSTOMER_ACCESS_TOKEN } from '../../../src/graphql/customerMutation';
import { useCustomerStore } from '../../../src/store/customerStore';
import { useLoginOutStore } from '../../../src/store/store';
import Link from 'next/link';
import Head from 'next/head';
import {useRouter} from 'next/router';
import { FormInput } from '../../../src/types';

export const index = () => {
  const router = useRouter();
  const isLoggedIn = useLoginOutStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useLoginOutStore((state: { setIsLoggedIn: any; }) => state.setIsLoggedIn);
  const setAccessToken = useCustomerStore((state: { setAccessToken: any; }) => state.setAccessToken);
  const setExpiresAt = useCustomerStore((state: { setExpiresAt: any; }) => state.setExpiresAt);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [buttonLoading, setButtonLoading] = React.useState(false);
  
  const [customerAccessToken, { loading, error, data }] = useMutation(CREATE_CUSTOMER_ACCESS_TOKEN, {
    variables: {
      input: {
        email: formData.email,
        password: formData.password,
      }
    }
  });
  error;
  data;
  
  const { register, formState: { errors }, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = inputdata => {
    setFormData(inputdata);
    setButtonLoading(true);
    setTimeout(() => {
      customerAccessToken()
    }, 1000)
  }
  
  React.useEffect(() => {
    
    //For cleaning up the side effect
    let mounted = true
    
    if (mounted && data) {
      setButtonLoading(false)
      if (data?.customerAccessTokenCreate?.customerUserErrors.length > 0) {
        setButtonLoading(false)
        toast.error("Login Failed. Check your details and try again.", {
          duration: 3000,
        })
      }
      else {
        setButtonLoading(false)
        setAccessToken(data?.customerAccessTokenCreate?.customerAccessToken?.accessToken)
        setExpiresAt(data?.customerAccessTokenCreate?.customerAccessToken?.expiresAt)
        toast.success("Login Successful", {
          duration: 3000,
        });
        setTimeout(() => {
          setIsLoggedIn(true);
          router.push("/");
        }, 500)
      }
    };
    
    //Clean-up
    return () => {
      mounted = false
    }
  }, [data])

  const redirectToHome = () => {
    router.push("/");
  }
  
  return (
    <>
      <Head>
        <title>Login - {process.env.storename}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Login to your account" />
      </Head>
      {isLoggedIn ? redirectToHome() : (<>
        <div className="w-full max-w-md px-4 py-24 no-scrollbar md:mx-auto md:px-0">
        <div className="my-12 text-center">
          <h1 className="text-xl font-semibold text-center text-gold">
            Customer Login
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="px-8 pt-6 pb-8 mb-4 bg-white border rounded dark:bg-black">
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
                className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
                type="email"
                autoComplete="off"
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
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-black dark:focus-within:bg-gray-900 dark:border-gray-600 dark:text-myGray"
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
              <h3 className="text-xs no-underline text-gold hover:underline">
                <Link
                  href="/account/forgot-password/">
                  Forgot Password?
                </Link>
              </h3>
              {buttonLoading ? (<button className="bg-gray-300 hover:bg-gold-dark text-white font-normal text-[12px] py-[6px] px-2 rounded focus:outline-none focus:shadow-outline dark:text-gray-500" disabled>
                <div className="flex items-center justify-center mx-auto italic font-semibold text-center gap-x-2">
                  <AiOutlineLoading3Quarters size={15} className="animate-spin" /> <p>Logging in...</p>
                </div>
              </button>) :
                (<button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-white font-normal text-[12px] py-[6px] px-4 rounded focus:outline-none focus:shadow-outline dark:text-gray-900">
                  Login
                  <BiLogInCircle className="inline-block w-4 h-4 ml-2" />
                </button>)
              }
            </div>
          </div>
          <div className="py-4 my-8 text-center text-white bg-gray-900 rounded dark:bg-gray-900">
            <div className="flex items-center justify-between mx-4">
              <h3 className="text-xs font-light text-gray-700">
                <a
                  href="#"
                  className="no-underline text-gold hover:underline"
                >
                  Don't have an account?
                </a>
              </h3>
              <Link href={'/account/register'}>
                <button
                  className="px-2 py-1 text-xs font-light text-gray-900 rounded bg-gold hover:bg-gold-dark focus:outline-none focus:shadow-outline"
                >
                  Register
                  <FiUserPlus className="inline-block w-3 h-3 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      </>)}
    </>
  )
}
export default index