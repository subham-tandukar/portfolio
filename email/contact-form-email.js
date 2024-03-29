import React from "react";
import { Html } from "@react-email/html";
import { Body } from "@react-email/body";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
// import { Tailwind } from "@react-email/tailwind";

export default function ContactFormEmail({ message, senderEmail, senderName }) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>

      <Body style={{ background: "#f3f4f6", color: "#000" }}>
        <Section
          style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.5)",
            borderRadius: "0.375rem",
            marginTop: "2.5rem",
            marginBottom: "2.5rem",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Heading style={{ lineHeight: "1.25", fontSize: "20px" }}>
            You received the following message from the contact form
          </Heading>
          <Text>{message}</Text>
          <Hr />
          <Text>The sender's name is: {senderName}</Text>
          <Text>The sender's email is: {senderEmail}</Text>
        </Section>
      </Body>
    </Html>
  );
}
