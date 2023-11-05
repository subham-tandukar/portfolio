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

export default function ContactFormEmail({ message, senderEmail }) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>

      <Body className="email__body">
        <Section className="email__section">
          <Heading className="email__heading">
            You received the following message from the contact form
          </Heading>
          <Text>{message}</Text>
          <Hr />
          <Text>The sender's email is: {senderEmail}</Text>
        </Section>
      </Body>
    </Html>
  );
}
