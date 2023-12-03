"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { replyToUser, sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import "@/css/contact.css";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Contact() {
  const { setIsPlaying, setIsError, setMsg } = useActiveSectionContext();
  const formRef = useRef(null); // Create a ref for the form element
  return (
    <motion.section
      id="contact"
      className="mySection my__container  contact__section"
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
      <SectionHeading subTitle="Contact" title="Send me a message" />

      <p className="contact__txt">
        Please contact me directly at{" "}
        <strong>
          <a href="mailto:subhamtndkr9@gmail.com">subhamtndkr9@gmail.com</a>{" "}
        </strong>{" "}
        or through this form.
      </p>

      <form
        ref={formRef} // Attach the form ref to the form element
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          setIsPlaying(true);
          if (error) {
            setIsError(true);
            setMsg(error);
            return;
          } else {
            setIsError(false);
            setMsg("");
            // Reset the form values
            formRef.current.reset();
            // Call replyToUser to send a reply email
            // const { data, error } = await replyToUser(formData);
            // if (error) {
            //   console.log("error", error);
            // } else {
            //   console.log("success", data);
            // }
          }
        }}
      >
        <input
          name="senderName"
          type="text"
          required
          maxLength={500}
          placeholder="Your Name"
        />
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          rows="8"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
