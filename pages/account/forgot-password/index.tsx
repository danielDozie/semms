import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { BiLogInCircle } from 'react-icons/bi';
import { useMutation } from '@apollo/client';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IPASSWORDRESET } from '../../../src/components/Types';
import {CUSTOMER_PASSWORD_RESET_REQUEST } from '../../../src/graphql/customerMutation';
import Head from 'next/head';
import {useRouter} from 'next/router';

export const index = () => {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    email: "",
  });
  const [buttonLoading, setButtonLoading] = React.useState(false);
  
  const [customerPasswordResetRequest, {error}] = useMutation(CUSTOMER_PASSWORD_RESET_REQUEST, {
    variables: {
        "email": formData.email,
    }
  });
  error;
  
  const { register, formState: { errors }, handleSubmit } = useForm<IPASSWORDRESET>();
  const onSubmit: SubmitHandler<IPASSWORDRESET> = inputdata => {
    setFormData(inputdata);
    setButtonLoading(true);
    setTimeout(() => {
      customerPasswordResetRequest()
      setButtonLoading(false)
      if (error) {
        setButtonLoading(false)
        toast.error("Password reset failed check your email and try again.", {
          duration: 3000,
        })
      }
      else {
        setButtonLoading(false)
        toast.success("Instructions to reset your password have been emailed to you. Please check your email.", {
          duration: 4000,
        });
        setTimeout(() => {
          router.push("/");
        }, 2000)
      }
    }, 2000)
  }
  

  
  
  return (
    <>
      <Head>
        <title>Forgot Password - {process.env.storename}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Login to your account" />
      </Head>
        <div className="w-full max-w-md no-scrollbar md:mx-auto py-24 px-4 md:px-0">
        <div className="mt-12 text-center">
          <h1 className="text-xl font-semibold text-center text-gold">
            Forgot your password?
          </h1>
          <p className="text-xs font-light py-4 text-gray-800 dark:text-myGray">Enter your email address and we will send you an email with a link to reset the password to your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded border dark:bg-black">
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
                className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
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
            
            <div className="flex items-center justify-end">

              {buttonLoading ? (<button className="bg-gray-300 hover:bg-gold-dark text-white font-normal text-[12px] py-[6px] px-2 rounded focus:outline-none focus:shadow-outline dark:text-gray-500" disabled>
                <div className="flex gap-x-2 items-center justify-center text-center mx-auto italic font-semibold">
                  <AiOutlineLoading3Quarters size={15} className="animate-spin" /> <p>Sending link...</p>
                </div>
              </button>) :
                (<button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-white font-normal text-[12px] py-[6px] px-4 rounded focus:outline-none focus:shadow-outline dark:text-gray-900">
                  Reset password
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