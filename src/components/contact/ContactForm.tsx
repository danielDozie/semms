import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
import { ContactFormInput } from "../Types";
import emailjs from "@emailjs/browser";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef<any>();
  const [formData, setFormData] = React.useState<ContactFormInput>();
  const userId: any = process.env.NEXT_PUBLIC_EMAILJS_USERID;
  const serviceId: any = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId: any = process.env.NEXT_PUBLIC_CONTACT_FORM_TEMPLATE_ID;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ContactFormInput>();
  const onSubmit: SubmitHandler<ContactFormInput> = (inputData) => {
    setLoading(true);
    setFormData(inputData);
    setTimeout(() => {
      emailjs.sendForm(serviceId, templateId, formRef.current, userId).then(
        (response) => {
          setLoading(false);
          toast.success("Message sent!", {
            duration: 3000,
          });
          reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Message sending failed!");
        }
      );
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col w-full md:w-1/2 mx-auto py-12 px-4 md:px-8">
        <h1 className="text-xl text-gray-800 dark:text-myGray font-semibold">
          Drop us a line
        </h1>
        <div className="mt-8">
          <div
            className={`
            } flex flex-col justify-center items-center h-full`}
          >
            <div className="w-full max-w-full">
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded border dark:bg-black">
                  <div className="flex gap-x-4">
                    <div className="w-1/2">
                      <div className="mb-2">
                        <label
                          htmlFor="fullname"
                          className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                        >
                          Your name <span className="text-red-500">*</span>
                        </label>
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                          type="text"
                          placeholder="Fullname"
                          {...register("fullname", { required: true })}
                        />
                        <p className="text-xs italic text-red-400">
                          {errors.fullname?.type === "required" &&
                            "Your name is required"}
                        </p>
                      </div>
                    </div>

                    <div className="w-1/2">
                      <div className="mb-2">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                        >
                          Email address <span className="text-red-500">*</span>
                        </label>
                      </div>
                      <div className="mb-6">
                        <input
                          className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                          type="email"
                          placeholder="ex: name@example.com"
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                        />
                        <p className="text-xs italic text-red-400">
                          {errors.email?.type === "required" &&
                            "Email is required"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="w-1/2">
                      <div className="mb-2">
                        <label
                          htmlFor="phone"
                          className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                        >
                          Phone number <span className="text-red-500">*</span>
                        </label>
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                          type="text"
                          placeholder="+1 613-555-1212"
                          {...register("phone", {
                            required: true,
                            min: 10,
                            maxLength: 20,
                          })}
                        />
                        <p className="text-xs italic text-red-400">
                          {errors.phone?.type === "required" &&
                            "Phone number is required"}
                        </p>
                      </div>
                    </div>

                    <div className="w-1/2">
                      <div className="mb-2">
                        <label
                          htmlFor="subject"
                          className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                        >
                          Subject <span className="text-red-500">*</span>
                        </label>
                      </div>
                      <div className="mb-6">
                        <input
                          className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                          type="text"
                          placeholder="Provide a subject"
                          {...register("subject", {
                            required: true,
                          })}
                        />
                        <p className="text-xs italic text-red-400">
                          {errors.subject?.type === "required" &&
                            "Subject is required"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="w-full">
                      <div className="mb-2">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                        >
                          Your message <span className="text-red-500">*</span>
                        </label>
                      </div>
                      <div className="mb-4">
                        <textarea
                          className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                          placeholder="Describe your requests in details."
                          {...register("message", { required: true })}
                        />
                        <p className="text-xs italic text-red-400">
                          {errors.message?.type === "required" &&
                            "Message is required"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start py-4">
                    {loading ? (
                      <button
                        type="submit"
                        className="bg-gray-800 text-white font-normal text-sm px-4 py-2 rounded "
                        disabled
                      >
                        Sending message...
                        <AiOutlineLoading3Quarters className="animate-spin inline-block w-3 h-3 ml-2" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="bg-gray-900 dark:bg-gold hover:bg-gold-dark text-white font-normal text-sm px-4 py-2 rounded focus:outline-none focus:shadow-outline dark:text-gray-900 || transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
                      >
                        Send message
                        <FaPaperPlane className="inline-block w-3 h-3 ml-2" />
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
