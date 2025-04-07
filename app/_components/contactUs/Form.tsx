"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  fullName: string;
  email: string;
  service: string;
  message: string;
};

const schema = yup.object({
  fullName: yup.string().required("Provide a name"),
  email: yup
    .string()
    .email("Provide a valid email")
    .required("Provide an email"),
  service: yup.string().required("Provide your preferred service"),
  message: yup
    .string()
    .required("Provide more details you feel we should know"),
});

function Form() {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        service: "partnership",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div className="hero-img relative">
        <div className="p-5 lg:p-10 bg-white border-[1px] border-cultured rounded-2xl  z-20 relative">
          <form
            className="space-y-8"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex flex-col gap-8 lg:flex-row  lg:gap-5">
              <div className="formField lg:w-1/2">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className={
                    errors.fullName?.message
                      ? "border-red-500 text-red-500 bg-white focus:border-red-500"
                      : ""
                  }
                  placeholder="e.g. Augustine Ifenna"
                  {...register("fullName")}
                />
                <span>{errors.fullName?.message}</span>
              </div>
              <div className="formField  lg:w-1/2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="hello@ifennaustine.com"
                  {...register("email")}
                />
                <span>{errors.email?.message}</span>
              </div>
            </div>

            <div className="formField">
              <label htmlFor="service">Applying for:</label>
              <select {...register("service")} id="service">
                <option value="partnership">Partnership</option>
                <option value="mentorship">Mentorship</option>
                <option value="funding">Seed Funding</option>
              </select>
              <span>{errors.service?.message}</span>
            </div>

            <div className="formField">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                placeholder="Tell us more about..."
                {...register("message")}
              ></textarea>
              <span>{errors.message?.message}</span>
            </div>

            <button className="p-4 text-center w-full rounded-2xl bg-space-cadet text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
