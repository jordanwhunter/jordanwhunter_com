import { useEffect } from "react";
import { useActiveSection } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import type { SectionInViewProps } from "@/lib/types";

const useSectionInView = ({ sectionName, threshold = 0.75 }: SectionInViewProps) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref }
};

export default useSectionInView;
