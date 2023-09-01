"use client";

import React,{ChangeEvent, useState} from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
 
  const [submit, setSubmit] = useState(false);
  // interface InputValues {
  //   email: string;
  //   message: string;
  // }
  // const [inputValue, setInputValue] = useState<InputValues>({
  //   email: '',
  //   message: '',
  // });

  // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
  //   const { name, value } = e.target;
  //   setInputValue({ ...inputValue, [name]: value });
  // };
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   setSubmit(true)

  //   setTimeout(() => {
  //     setSubmit(false)
  //     setInputValue({
  //       email:"",
  //       message:""
  //     })
  //     toast.success("Email sent successfully!");
  //   }, 1000);
  // }

  return (
    <motion.section
      id="contact"
    
      className="mySection"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      {/* <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:subhamtndkr9@gmail.com">
          subhamtndkr9@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        // action={async (formData) => {
        //   const { data, error } = await sendEmail(formData);

        //   if (error) {
        //     toast.error(error);
        //     return;
        //   }

        //   toast.success("Email sent successfully!");
        // }}
        // onSubmit={(e)=>handleSubmit(e)}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          // value={inputValue.email}
          // onChange={(e)=>handleChange(e)}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          // value={inputValue.message}
          // onChange={(e)=>handleChange(e)}
        />
         <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={submit}
    >
      {submit ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
      </form> */}

      <h1>Contact</h1>
    </motion.section>
  );
}
