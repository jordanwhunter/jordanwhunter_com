"use client";
import {SectionHeading} from "@/components/content";
import {Form} from "@/components/form";
import {useSectionInView} from "@/lib/hooks";
import {motion} from "framer-motion";

const Contact = () => {
  const {ref} = useSectionInView({
    sectionName: "Contact",
    threshold: 0.5,
  });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-16 sm:scroll-mt-24 lg:scroll-mt-28 flex flex-col items-center px-4"
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
      <SectionHeading classProps="lg:mt-6">Contact Me</SectionHeading>
      <p className="text-gray-400 text-center lg:text-left -mt-4">
        Email directly at{" "}
        <a className="underline" href="mailto:jordanwhunter.mail@gmail.com">
          jordanwhunter.mail@gmail.com
        </a>{" "}
        or use form below.
      </p>
      <Form />
    </motion.section>
  );
};

export default Contact;
