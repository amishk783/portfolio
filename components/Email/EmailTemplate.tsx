import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

type MessageUsEmailProps = {
    name: string;
  phoneNo?: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
};

const MessageUsEmail = ({ name, email, message,phoneNo,subject,budget }: MessageUsEmailProps) => {
  const previewText = `Weekly Updates 🚀${name} sent you a message.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-[20px] mx-auto p-[20px] max-w-4xl">
            <Heading className="text-black text-[20px] font-normal text-left">
              <strong>Thank You for Your Message, {name}!</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hi {name},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you for reaching out to us with your message. We have received your inquiry and will get back to you shortly. Here are the details you provided:
            </Text>
            <Hr className="my-[16px] mx-0 w-full" />
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>Name:</strong> {name}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>Email:</strong> {email}
            </Text>
            {phoneNo && (
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Phone Number:</strong> {phoneNo}
              </Text>
            )}
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>Subject:</strong> {subject}
            </Text>
            {budget && (
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Budget:</strong> {budget}
              </Text>
            )}
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>Message:</strong>
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              {message}
            </Text>
            <Hr className="my-[16px] mx-0 w-full" />
            <Text className="text-black text-[14px] leading-[24px]">
              Our team will review your message and get back to you as soon as possible.
              If you have any urgent concerns, feel free to reach out to us directly at <a href="mailto:amishkumar800@gmail.com">amishkumar800@gmail.com</a>.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Best regards,
            </Text>
         
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );

};

export default MessageUsEmail;
