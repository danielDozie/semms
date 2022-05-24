import React from "react";
import { FaShippingFast, FaPercent } from "react-icons/fa";
import { CgDesignmodo } from "react-icons/cg";
import { SubmitHandler, useForm } from "react-hook-form";
import { NEWSLETTER } from "../../types";
import emailjs from "@emailjs/browser";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Highlights() {
  const [subscriptionMessage, setSubscriptionMessage] = React.useState("");
  const [loading, setLoading]= React.useState(false);
  const formRef = React.useRef<any>()
  const { register, reset, handleSubmit } = useForm<NEWSLETTER>();
  const [formData, setFormData] = React.useState<NEWSLETTER>();
  
  const onSubmit: SubmitHandler<NEWSLETTER> = (inputData) => {
    setFormData(inputData);
    setLoading(true)
  };

  const sender_url: any = new URL("https://api.sender.net/v2/subscribers");
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDER_API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const data = {
    email: formData?.user_email,
    groups: ["aOMvMR"],
  };

  React.useEffect(() => {
    const userId: any = process.env.NEXT_PUBLIC_EMAILJS_USERID;
    const serviceId:any = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId:any = process.env.NEXT_PUBLIC_WELCOME_NEWSLETTER_TEMPLATE_ID;
    
    if (formData) {
      fetch(sender_url, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            emailjs.sendForm(serviceId, templateId, formRef.current, userId).then(
              function (response) {
                setLoading(false)
                setSubscriptionMessage("Subscribed! Thanks for subscribing.");
                reset();
                setTimeout(() => {
                  setSubscriptionMessage("");
                }, 5000);
              },
              function (error) {
                setLoading(false)
                setSubscriptionMessage("Error! try again later.");
                setTimeout(() => {
                  setSubscriptionMessage("");
                }, 5000);
              }
            );
          } else {
            setLoading(false)
            setSubscriptionMessage("Error! " + data.message + ".");
            setTimeout(() => {
              setSubscriptionMessage("");
            }, 5000);
          }
        })
        .catch((error) => {
          setSubscriptionMessage("Error! try again later.");
          setTimeout(() => {
            setSubscriptionMessage("");
          }, 5000);
        });
    }
  }, [formData]);

  return (
    <>
      <div className="h-full max-w-7xl bg-myGray dark:bg-black">
        <div className="container px-4 py-24 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full p-3 md:w-1/2 lg:w-1/3">
              <div className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FaShippingFast className="w-10 h-10 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-bold text-gray-600 uppercase dark:text-gray-300">
                      Free Shipping
                    </h5>
                    <p className="font-light text-gray-800 dark:text-gray-300">
                      Free on all orders over $800
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/2 lg:w-1/3">
              <div className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FaPercent className="w-10 h-10 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-bold text-gray-600 uppercase dark:text-gray-300">
                      30% Off
                    </h5>
                    <p className="font-light text-gray-800 dark:text-gray-300">
                      All items are 30% off
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/2 lg:w-1/3">
              <div className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CgDesignmodo className="w-10 h-10 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-bold text-gray-600 uppercase dark:text-gray-300">
                      Free Returns
                    </h5>
                    <p className="font-light text-gray-800 dark:text-gray-300">
                      Free returns on all items
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[80%] mx-auto px-0 md:px-4 py-16">
              <div className="mx-auto my-4 text-center">
                <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-300">
                  Newsletter
                </h1>
                <h1 className="py-4 text-5xl font-bold text-gray-800 dark:text-gray-300">
                We&apos;d love to stay in touch!
                </h1>
                <p className="text-gray-500 text-md font-regular dark:text-gray-300">
                Subscribe to our newsletter for new product alerts and great deals.
                </p>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-wrap justify-center py-8 mx-auto">
                    <input
                      {...register("user_email")}
                      placeholder="Enter your email"
                      className="w-1/2 p-4 text-sm"
                    />
                    
                      {loading ? <button
                    type="submit"
                    className="px-4 py-2 font-light text-white bg-gray-800"
                  ><div className="flex gap-x-2"><AiOutlineLoading3Quarters size="15" className="mt-1 animate-spin" /> Subscribing...</div> </button>:<button
                  type="submit"
                  className="px-4 py-2 font-light text-white bg-gold hover:bg-gray-800 hover:text-white"
                >Subscribe </button>}
                    
                  </div>
                </form>
                <p className="text-gray-400 text-[10px]  dark:text-gray-300 -mt-6">
                  *We won&apos;t spam your email. We promise.
                </p>
                <p className="text-gray-800 dark:text-myGray text-[12px] font-semibold py-2 italic">
                  {subscriptionMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
