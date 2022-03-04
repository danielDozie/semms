import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { BiLogInCircle } from 'react-icons/bi';
import { useMutation } from '@apollo/client';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IPASSWORDRESET } from '../../../src/components/Types';
import {CUSTOMER_PASSWORD_RESET_REQUEST_RESETURL } from '../../../src/graphql/customerMutation';
import Head from 'next/head';
import {useRouter} from 'next/router';

export const index = () => {
  const resetUrl = useRouter().query.reset_url;
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    password: "",
  });
  const [buttonLoading, setButtonLoading] = React.useState(false);
  
  const [customerPasswordResetRequest, {error, data}] = useMutation(CUSTOMER_PASSWORD_RESET_REQUEST_RESETURL, {
    variables: {
      "password": formData.password,
      "resetUrl": resetUrl
    }
  });
  error;
  data;
  
  const { register, formState: { errors }, handleSubmit } = useForm<IPASSWORDRESET>();
  const onSubmit: SubmitHandler<IPASSWORDRESET> = inputdata => {
    setFormData(inputdata);
    setButtonLoading(true);      
    customerPasswordResetRequest()
  }
  
  React.useEffect(() => {
    if (error) {
      setButtonLoading(false)
      toast.error("Password reset failed. Please try again.", {
        duration: 3000,
      })
    }
    if (data) {
        if(data?.customerResetByUrl?.customerUserErrors.length > 0) {
          setButtonLoading(false)
          toast.error(data.customerResetByUrl?.customerUserErrors[0].message+"... Token expired.", {
            duration: 5000,
          })  
      }else {
          setButtonLoading(false)
          toast.success("Password reset successful. Please login.", {
            duration: 4000,
          })
          setTimeout(() => {
            router.push("/account/login")
          }, 2000)
      }
      }
  }, [data, error]);
  
  
  
  return (
    <>
      <Head>
        <title>Reset Password - {process.env.storename}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Login to your account" />
      </Head>
        <div className="w-full max-w-md no-scrollbar md:mx-auto py-24 px-4 md:px-0">
        <div className="mt-12 text-center">
          <h1 className="text-xl font-semibold text-center text-gold">
            Reset your password
          </h1>
          <p className="text-xs font-light py-4 text-gray-800 dark:text-myGray">Enter your new account password</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded border dark:bg-black">
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-myGray"
              >
                New password
              </label>
            </div>
            <div className="mb-6">
              <input
                className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                type="password"
                autoComplete="off"
                placeholder="Password"
                {...register("password", {
                  required: true, minLength: 8, maxLength: 20,})}
              />
              <p className="text-xs italic text-red-400">
              {errors.password?.type === "required" ?
                  "Password is required" : errors.password?.type === "minLength" ? "Password must be at least 8 characters" : errors.password?.type === "maxLength" ? "Password must be at most 20 characters" : ""}
              </p>
            </div>


            <div className="mb-4">
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-myGray"
              >
                Confirm password
              </label>
            </div>
            <div className="mb-6">
              <input
                className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                type="password"
                autoComplete="off"
                placeholder="Confirm Password"
                {...register("confirm_password", {
                  required: true, minLength: 8, maxLength: 20,})}
              />
              <p className="text-xs italic text-red-400">
                {errors.confirm_password?.type === "required" ?
                  "Password is required" : errors.confirm_password?.type === "minLength" ? "Password must be at least 8 characters" : errors.confirm_password?.type === "maxLength" ? "Password must be at most 20 characters" : ""}
              </p>
            </div>
            
            <div className="flex items-center justify-end">

              {buttonLoading ? (<button className="bg-gray-300 hover:bg-gold-dark text-white font-normal text-[12px] py-[6px] px-2 rounded focus:outline-none focus:shadow-outline dark:text-gray-500" disabled>
                <div className="flex gap-x-2 items-center justify-center text-center mx-auto italic font-semibold">
                  <AiOutlineLoading3Quarters size={15} className="animate-spin" /> <p>Resetting...</p>
                </div>
              </button>) :
                (<button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-white font-normal text-[12px] py-[6px] px-4 rounded focus:outline-none focus:shadow-outline dark:text-gray-900">
                  Confirm password reset
                  <BiLogInCircle className="inline-block w-4 h-4 ml-2" />
                </button>)
              }
            </div>
          </div>

        </form>
      </div>
    </>
  )
}
export default index