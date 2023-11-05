"use client";

import React, { ChangeEvent, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import "@/css/contact.css";

export default function Contact() {
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
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            // toast.error(error);
            console.log("error", error);
            return;
          }
          console.log("success", data);
          // toast.success("Email sent successfully!");
        }}
      >
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
