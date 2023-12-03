import {ArrowRightIcon, ArrowDownTrayIcon} from "@heroicons/react/24/outline";
import type {ArrowProps, SizeProps, DirectionProps} from "@/lib/types";
import cn from "classnames";

export const sizes: SizeProps = {
  "2xl": "w-6 sm:w-7 h-6 sm:h-7",
  xl: "w-5 sm:w-6 h-5 sm:h-6",
  lg: "w-4 sm:w-5 h-4 sm:h-5",
  default: "w-4 h-4",
  sm: "w-3.5 h-3.5",
  xs: "w-3 h-3",
};

const directions: DirectionProps = {
  default: "-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1",
  down: "rotate-90 group-hover:translate-y-1",
  right: "group-hover:translate-x-1",
};

export type SizeKey = keyof typeof sizes;
type DirectionKey = keyof typeof directions;

const LinkArrow = ({text, size, direction, arrow, download}: ArrowProps) => {
  const sizeInput = size as SizeKey;
  const directionInput = direction as DirectionKey;

  return (
    <figure className="flex gap-3 shrink-0 items-center">
      {text && <figcaption>{text}</figcaption>}

      {arrow && (
        <ArrowRightIcon
          className={cn(
            sizes[sizeInput ?? "default"],
            directions[directionInput ?? "default"],
          )}
        />
      )}

      {download && (
        <ArrowDownTrayIcon
          className={cn(
            sizes[sizeInput ?? "default"],
            directions[directionInput ?? "default"],
          )}
        />
      )}
    </figure>
  );
};

export default LinkArrow;
