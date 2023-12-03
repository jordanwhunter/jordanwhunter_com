"use client";
import {Fragment} from "react";
import {MENU} from "@/lib/constants";
import {useSectionInView} from "@/lib/hooks";
import {SectionHeading} from "@/components/content";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const {ref} = useSectionInView({
    sectionName: "Experience",
    threshold: 0.5,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="flex flex-col items-center justify-center scroll-mt-16 sm:scroll-mt-24 lg:scroll-mt-28"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline className="vertical-timeline" lineColor="">
        {MENU.experience.map((item, i) => (
          <Fragment key={i}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                color: "rgb(75, 85, 99)",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.year}
              icon={item.icon}
              iconStyle={{
                background: "white",
                color: "#9ca3af",
                fontSize: "1.5rem",
              }}
              visible
            >
              <h3 className="font-semibold uppercase">{item.title}</h3>
              <p className="font-normal !mt-0 italic">{item.location}</p>
              <p className="!font-normal !mt-1 text-gray-400">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
