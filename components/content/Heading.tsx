import { SectionHeadingProps } from "@/lib/types"

const SectionHeading = ({ children }: SectionHeadingProps) => (
  <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-gray-600 text-center lg:text-left">
    {children}
  </h2>
);

export default SectionHeading