import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


import { useState } from "react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";


type formData = {
  name: string;
  phoneNo?: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
};

const validationSchema = yup.object({
  name: yup.string().required("Full name is required."),
  phoneNo: yup.string().optional(),
  email: yup.string().email().required("Email is required."),
  subject: yup.string().required("Subject name is required."),
  message: yup.string().required("Message is required"),
  budget: yup.string().optional(),
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
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmitHandler = async (data: formData) => {
    console.log(data);

    const api = "api/email";

    try {
      setLoading(true);
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        setLoading(false);
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setLoading(false);
      toast.success("Email sent successfully!");
      console.log(result);
    } catch (error) {
      toast.error("Something went wrong,Try again");
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col xl:px-5 xl:max-w-[546px]"
      >
        <div className=" w-[92%] xl:w-full max-md:mt-5 max-md:max-w-full text-primary-foreground">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
            <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xs max-md:mt-10">
                <div className="flex gap-1.5 justify-between uppercase whitespace-nowrap">
                  <div className=" text-sm leading-[170%]">full Name</div>
                  <div className="flex-auto text-red-500">*</div>
                </div>
                <input
                  className="mt-4 text-lg text-neutral-500 border-b-1 border-primary-foreground border-b-2 pb-2 bg-transparent outline-none focus:outline-none "
                  placeholder="Your Full Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 text-base mt-2">
                    {errors.name.message}
                  </p>
                )}

                <div className="mt-12 text-sm  uppercase leading-[170%] max-md:mt-10 ">
                  phone (optional)
                </div>
                <input
                  className="mt-4 text-lg text-neutral-500 border-primary-foreground border-b-2 pb-2 bg-transparent outline-none focus:outline-none "
                  placeholder=" Your number phone"
                  {...register("phoneNo", { required: true })}
                />
                {errors.phoneNo && (
                  <p className="text-red-500 text-base mt-2">
                    {errors.phoneNo.message}
                  </p>
                )}

                <div className="mt-12 text-sm  uppercase leading-[170%] max-md:mt-10">
                  your budget (optional)
                </div>
                <input
                  className="mt-4 text-lg text-neutral-500 border-primary-foreground border-b-2 pb-2 bg-transparent outline-none focus:outline-none "
                  placeholder="A range budget for your project"
                  {...register("budget", { required: true })}
                />
                {errors.budget && (
                  <p className="text-red-500 text-base mt-2">
                    {errors.budget.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col xl:ml-8 xl:pl-5 w-[70%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-xs max-md:mt-10">
                <div className="flex gap-1.5 justify-between uppercase">
                  <div className=" text-sm leading-[170%]">Email</div>
                  <div className="flex-auto text-red-500">*</div>
                </div>
                <input
                  className="mt-4 text-lg text-neutral-500 border-primary-foreground border-b-2 pb-2 bg-transparent outline-none focus:outline-none "
                  placeholder=" Your email adress"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 text-base mt-2">
                    {errors.email.message}
                  </p>
                )}

                <div className="flex gap-1.5 justify-between mt-12 uppercase max-md:mt-10">
                  <div className="grow  text-sm leading-[170%]">subject</div>
                  <div className="text-red-500">*</div>
                </div>
                <input
                  className="mt-4 text-lg text-neutral-500 border-primary-foreground border-b-2 pb-2 bg-transparent outline-none"
                  placeholder=" Your subject adress"
                  {...register("subject", { required: true })}
                />
                {errors.subject && (
                  <p className="text-red-500 text-base mt-2">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm  uppercase leading-[170%] max-md:mt-10">
          message
        </div>
        <textarea
          className="mt-4 text-lg leading-8  bg-transparent border-primary-foreground border-2 pl-5 pb-10 pt-3  rounded-[20px] outline-none"
          placeholder="Write your message here ..."
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-base ">{errors.message.message}</p>
        )}

        <button className="justify-center self-start flex gap-4 items-center px-8 py-2 mt-11 text-base leading-7 text-center uppercase whitespace-nowrap  border-2  border-solid rounded-[30px] max-md:px-5 max-md:mt-10">
          send message {loading && <Loader2 className="animate-spin" />}
        </button>
      </form>
    </section>
  );
}
