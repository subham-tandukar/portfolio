"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import ReplyContactForm from "@/email/reply-contact-form";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const senderName = formData.get("senderName");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderName, 500)) {
    return {
      error: "Invalid sender name",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "My Portfolio! <onboarding@resend.dev>",
      to: "subhamtndkr9@gmail.com",
      subject: "Message from my portfolio",
      reply_to: senderEmail,
      react: (
        <ContactFormEmail
          message={message}
          senderEmail={senderEmail}
          senderName={senderName}
        />
      ),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

export const replyToUser = async (formData) => {
  const senderEmail = formData.get("senderEmail");

  // Validate the sender's email (you can add more validation if needed)

  let data;
  try {
    data = await resend.emails.send({
      from: "Subham Portfolio <onboarding@resend.dev>",
      to: senderEmail,
      subject: "Message from subham portfolio",
      reply_to: "subhamtndkr9@gmail.com",
      react: <ReplyContactForm />,
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
