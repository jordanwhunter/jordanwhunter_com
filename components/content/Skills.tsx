"use client";
import {useSectionInView} from "@/lib/hooks";
import {SectionHeading} from "@/components/content";
import {MENU} from "@/lib/constants";
import {motion} from "framer-motion";

const Skills = () => {
  const {ref} = useSectionInView({
    sectionName: "Skills",
    threshold: 0.5,
  });

  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
      },
    }),
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-4 max-w-[53rem] scroll-mt-28 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap gap-4 justify-center text-gray-400 text-lg">
        {MENU.skills.map((skill, i) => (
          <motion.li
            key={skill}
            className="bg-white border border-black/[0.1] rounded-xl px-3 sm:px-5 py-2 sm:py-3 shadow-md"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
