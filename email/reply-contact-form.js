import React from "react";
import { Html } from "@react-email/html";
import { Body } from "@react-email/body";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

export default function ReplyContactForm() {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting me</Preview>

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
            Thank You for Contacting Me
          </Heading>
          <Text>
            I have received your message and I'll get back to you as soon as
            possible.
          </Text>
          <Hr />
          <Text>If you have any further questions, feel free to mail me.</Text>
        </Section>
      </Body>
    </Html>
  );
}
