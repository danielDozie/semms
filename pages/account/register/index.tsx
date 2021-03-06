import { useForm, SubmitHandler } from "react-hook-form";
import { BiLogInCircle } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { useMutation } from "@apollo/client";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { CREATE_CUSTOMER } from "../../../src/graphql/customerMutation";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useLoginOutStore } from "../../../src/store/store";
import { FormInput } from "../../../src/types";


export const index = () => {
    const router = useRouter();
    const [formData, setFormData] = React.useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
    })
    
    const [err, setErr] = React.useState<any>({});
    const [regData, setRegData] = React.useState<any>({})
    const [buttonLoading, setButtonLoading] = React.useState(false);
    const isLoggedIn = useLoginOutStore((state) => state.isLoggedIn);
    //create user mutation
    const [createCustomer, { error, data }] = useMutation(CREATE_CUSTOMER, {
      variables: {
        "input": {
          "firstName": formData.firstname,
          "lastName": formData.lastname,
          "email": formData.email,
          "phone": formData.phone,
          "password": formData.password,
        }
      }
    });
    error;
    data;
  
    React.useEffect(() => {
    
    }, [data, error, regData, err])
  
    React.useEffect(() => {
      if (data) {
        setRegData(data)
        setButtonLoading(false)
  
        if (data.customerCreate.customerUserErrors.length > 0) {
          setErr(data.customerCreate.customerUserErrors)
          setButtonLoading(false);
          toast.error("Registration Failed. Please try again", {
            position: "bottom-right",
            duration: 3000,
          })
        }
        else {
          setButtonLoading(false);
          toast.success("Registration Successful. Please login", {
            position: "bottom-right",
            duration: 3000,
          })
          reset()
          //toggle login form
          setTimeout(() => {
            router.push('/account/login')
          }, 500);
        }
      }
      if (error) {
        setButtonLoading(false)
        toast.error("There was an error creating your account. Please try again in 2 minutes", {
          position: "bottom-center",
          duration: 4000,
        })
        reset()
      }
    }, [data, error])
  
  
    //Form state and handles
    const { register, formState: { errors }, handleSubmit, reset } = useForm<FormInput>();
    const onSubmit: SubmitHandler<FormInput> = inputdata => {
      setFormData(inputdata);
      setButtonLoading(true);
      setTimeout(() => {
        createCustomer();
        setRegData(data);
        setErr(error);
      }, 2000);
    };

    React.useEffect(() => {
      if(isLoggedIn){
        router.push('/')
      }
    },[])
  
  return (
    <>
        <Head>
            <title>Register - {process.env.storename}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={`Register to ${process.env.storename}`} />
        </Head>
        {isLoggedIn ? isLoggedIn : (
          <div className="w-full max-w-md px-4 py-24 mx-auto md:mx-auto md:px-0">
          <div className="my-12 text-center">
                   <h1 className="text-xl font-semibold text-center text-gold">
                     Customer Registeration
                   </h1>
                 </div>
             <form onSubmit={handleSubmit(onSubmit)}>
               <div className="px-8 pt-6 pb-8 mb-4 bg-white border rounded dark:bg-black">
                 <div className="mb-4">
                   <label
                     htmlFor="firstname"
                     className="block mb-2 text-sm font-semibold text-gray-900 dark:text-myGray"
                   >
                     Firstname
                   </label>
                 </div>
                 <div className="mb-4">
                   <input
                     className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
                     type="text"
                     placeholder="Firstname"
                     {...register("firstname", {
                       required: true,
                       maxLength: 20,
                     })}
                   />
                   <p className="text-xs italic text-red-400">
                     {errors.firstname?.type === "required" &&
                       "Firstname is required"}
                   </p>
                 </div>
 
                 <div className="mb-4">
                   <label
                     htmlFor="lastname"
                     className="block mb-2 text-sm font-semibold text-gray-900 dark:text-myGray"
                   >
                     Lastname
                   </label>
                 </div>
                 <div className="mb-4">
                   <input
                     className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
                     type="text"
                     placeholder="Lastname"
                     {...register("lastname", { required: true, maxLength: 20 })}
                   />
                   <p className="text-xs italic text-red-400">
                     {errors.lastname?.type === "required" &&
                       "Last name is required"}
                   </p>
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
                     className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
                     type="email"
                     placeholder="Email"
                     {...register("email", {
                       required: true
                     })}
                   />
                   <p className="text-xs italic text-red-400">
                     {errors.email?.type === "required" && "Email is required"}
                   </p>
                 </div>
 
                 <div className="mb-4">
                   <label
                     htmlFor="phone"
                     className="block mb-2 text-sm font-semibold text-gray-900 dark:text-myGray"
                   >
                     Phone
                   </label>
                 </div>
                 <div className="mb-6">
                   <input
                     className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
                     type="tel"
                     placeholder="+16135551212"
                     {...register("phone", {
                       required: true,
                       min: 10,
                       maxLength: 15,
                     })}
                   />
                   <p className="text-xs italic text-red-400">
                     {errors.phone?.type === "required" && "Phone is required"}
                   </p>
                 </div>
 
                 <div className="mb-6">
                   <label
                     htmlFor="password"
                     className="block mb-2 text-sm font-semibold text-gray-900 dark:text-myGray"
                   >
                     Set Password
                   </label>
                 </div>
                 <div className="mb-6">
                   <input
                     className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-black dark:focus-within:bg-gray-900 dark:border-gray-600 dark:text-myGray"
                     type="password"
                     placeholder="Password"
                     {...register("password", { required: true, minLength: 8, maxLength: 50})}
                   />
                   <p className="text-xs italic text-red-400">
                   {errors.password?.type === "required" ?
                  "Password is required" : errors.password?.type === "minLength" ? "Password must be at least 8 characters" : errors.password?.type === "maxLength" ? "Password must be at most 20 characters" : ""}
                   </p>
                 </div>
                 <div className="flex items-center justify-between">
                   <h3 className="text-xs font-light no-underline text-gold hover:underline">
                     <Link
                  href="/account/forgot-password/">
                  Forgot Password?
                </Link>
                   </h3>
                   {buttonLoading ? (<button className="bg-gray-300 hover:bg-gold-dark text-white font-normal text-[12px] py-[6px] px-4 rounded focus:outline-none focus:shadow-outline dark:text-gray-500" disabled>
                     <div className="flex items-center justify-center mx-auto italic font-semibold text-center gap-x-2">
                       <AiOutlineLoading3Quarters size={15} className="animate-spin" /> <p>Processing...</p>
                     </div>
                   
                   </button>) : (<button
                     type="submit"
                     className="bg-gold hover:bg-gold-dark text-white font-normal text-[12px] py-[6px] px-4 rounded focus:outline-none focus:shadow-outline dark:text-gray-900">
                     Create account
                     <FiUserPlus className="inline-block w-4 h-4 ml-2" />
                   </button>)}
                 </div>
 
               </div>
               <div className="py-4 my-8 text-center text-white bg-gray-900 rounded dark:bg-gray-900">
                 <div className="flex items-center justify-between mx-4">
                   <h3 className="text-xs font-light text-gray-700">
                     <a
                       href="#"
                       className="no-underline text-gold hover:underline"
                     >
                       Already have an account?
                     </a>
                   </h3>
                   <Link href={'/account/login'}>
                   <button
                     className="px-2 py-1 text-xs font-light text-gray-900 rounded bg-gold hover:bg-gold-dark focus:outline-none focus:shadow-outline"
                   >
                     Login
                     <BiLogInCircle className="inline-block w-3 h-3 ml-2" />
                   </button>
                   </Link>
                   
                 </div>
               </div>
             </form>
           </div>
        )}
         
    </>
  )
}

export default index