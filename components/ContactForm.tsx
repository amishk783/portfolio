import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";
const interFont = Inter({ subsets: ["latin"] });

type formData = {
  name: string;
  phoneNo: number;
  email: string;
  subject: string;
  message: string;
  budget: number;
};

const validationSchema = yup.object({
  name: yup.string().required("Full name is required."),
  phoneNo: yup.number().required("Phone number name is required."),
  email: yup.string().email().required("Email is required."),
  subject: yup.string().required("subject name is required."),
  message: yup.string().required("Message is required"),
  budget: yup.number().required("Number is required."),
});

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });

  const onSubmitHandler = async (data: formData) => {
    console.log(data);

    const api = "api/email";

    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact" className="pt-24 xl:pt-10 xl:mt-20">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col xl:px-5 xl:max-w-[546px]"
      >
        <div
          className={clsx(
            " max-w-[135px] px-9 py-3.5 text-sm font-light leading-4 text-white uppercase whitespace-nowrap border border-solid border-neutral-600 rounded-[30px] max-md:px-5",
            `font-${interFont}`
          )}
        >
          Contact
        </div>
        <h1 className="mt-16 w-full text-5xl font-light text-emerald-400 leading-[60px] max-md:mt-10 max-md:max-w-full max-md:text-3xl max-md:leading-[56px]">
          Let's Work <span className="text-emerald-400">Together!</span>
        </h1>
        <div className="mt-10 w-full text-2xl font-light leading-7 text-white max-md:mt-10 max-md:max-w-full">
          hello@amish.com
        </div>
        <div className="mt-16 w-[92%] xl:w-full max-md:mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xs max-md:mt-10">
                <div className="flex gap-1.5 justify-between uppercase whitespace-nowrap">
                  <div className="text-white text-sm leading-[170%]">
                    full Name
                  </div>
                  <div className="flex-auto text-red-500">*</div>
                </div>
                <input
                  className="mt-4 text-lg text-neutral-500 border-b-white border-b-2 pb-2 bg-transparent outline-none"
                  placeholder="Your Full Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 text-base ">
                    {errors.name.message}
                  </p>
                )}

                <div className="mt-12 text-sm text-white uppercase leading-[170%] max-md:mt-10 ">
                  phone (optional)
                </div>
                <input
                  className="mt-4 text-lg text-neutral-500 border-b-white border-b-2 pb-2 bg-transparent outline-none"
                  placeholder=" Your number phone"
                  {...register("phoneNo", { required: true })}
                />
                {errors.phoneNo && (
                  <p className="text-red-500 text-base ">
                    {errors.phoneNo.message}
                  </p>
                )}

                <div className="mt-12 text-sm text-white uppercase leading-[170%] max-md:mt-10">
                  your budget (optional)
                </div>
                <input
                  className="mt-4 text-lg text-neutral-500 border-b-white border-b-2 pb-2 bg-transparent outline-none"
                  placeholder="A range budget for your project"
                  {...register("budget", { required: true })}
                />
                {errors.budget && (
                  <p className="text-red-500 text-base ">
                    {errors.budget.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col xl:ml-8 xl:pl-5 w-[70%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-xs max-md:mt-10">
                <div className="flex gap-1.5 justify-between uppercase">
                  <div className="text-white text-sm leading-[170%]">Email</div>
                  <div className="flex-auto text-red-500">*</div>
                </div>
                <input
                  className="mt-4 text-lg text-neutral-500 border-b-white border-b-2 pb-2 bg-transparent outline-none"
                  placeholder=" Your email adress"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 text-base ">
                    {errors.email.message}
                  </p>
                )}

                <div className="flex gap-1.5 justify-between mt-14 uppercase max-md:mt-10">
                  <div className="grow text-white text-sm leading-[170%]">
                    subject
                  </div>
                  <div className="text-red-500">*</div>
                </div>
                <input
                  className="mt-4 text-lg text-neutral-500 border-b-white border-b-2 pb-2 bg-transparent outline-none"
                  placeholder=" Your subject adress"
                  {...register("subject", { required: true })}
                />
                {errors.subject && (
                  <p className="text-red-500 text-base ">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm text-white uppercase leading-[170%] max-md:mt-10">
          message
        </div>
        <textarea
          className="mt-4 text-lg leading-8 text-white bg-transparent border-b-white border-2 pl-5 pb-10 pt-3  rounded-[20px] outline-none"
          placeholder="Write your message here ..."
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-base ">{errors.message.message}</p>
        )}
        <input
          type="file"
          className="self-start mt-12 text-xs leading-5 text-white uppercase whitespace-nowrap max-md:mt-10 max-md:ml-2 bg-transparent border-2 px-5 py-3 rounded-[20px]"
          placeholder="add an attachment"
        />

        <button className="justify-center self-start px-16 py-5 mt-11 text-base leading-7 text-center text-black uppercase whitespace-nowrap bg-emerald-400 border-2 border-emerald-400 border-solid rounded-[30px] max-md:px-5 max-md:mt-10">
          send message
        </button>
      </form>
    </section>
  );
}
