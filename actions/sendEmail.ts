"use server";
import {createElement} from "react";
import {EmailTemplate} from "@/components/templates";
import {validateString, getErrorMessage} from "@/lib/utils";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const mailer = formData.get("mailer");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!validateString(name, 50)) {
    return {
      error: "Invalid name submission",
    };
  }

  if (!validateString(mailer, 254)) {
    return {
      error: "Invalid email submission",
    };
  }

  if (!validateString(subject, 55)) {
    return {
      error: "Invalid subject submission",
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
      from: `${name} <onboarding@resend.dev>`,
      to: "jordanwhunter.mail@gmail.com",
      subject: `Contact Form: ${subject}`,
      reply_to: mailer as string,
      react: createElement(EmailTemplate, {
        name: name as string,
        mailer: mailer as string,
        subject: subject as string,
        message: message as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {data};
};
