import { CardProps } from "@/lib/types"
import Image from "next/image"

const Card = ({ title, description, tags, image, href, repo }: CardProps) => (
  <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden lg:pr-8 lg:relative lg:h-[20rem] rounded-lg">
    <div className="pt-4 pb-6 px-5 lg:max-w-[50%] h-full flex flex-col">
      <h3 className="text-2xl font-semibold text-gray-600">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-400">{description}</p>
      <ul className="flex flex-wrap mt-4 gap-2 lg:mt-auto">
        {tags.map((tag, i) => (
          <li
            key={i}
            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-gray-200 rounded-full"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
    <Image
      src={image}
      alt={title}
      quality={90}
      className="lg:absolute top-8 -right-40 lg:w-[28.25rem] lg:h-[15rem] rounded-b-lg lg:rounded-lg shadow-2xl pointer-events-none"
    />
  </section>
);

export default Card