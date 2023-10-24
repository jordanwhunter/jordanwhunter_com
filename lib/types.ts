import { ReactNode, MouseEventHandler } from 'react'
import { MENU } from "@/lib/constants"

// @/components/content/Heading.tsx
export interface SectionHeadingProps {
  children: ReactNode;
  classProps?: string;
}

// @/components/ui/Arrow.tsx
export interface ArrowProps {
  text?: string;
  size?: string;
  direction?: string;
  arrow?: boolean;
  download?: boolean;
}

export interface SizeProps {
  "2xl": string;
  xl: string;
  lg: string;
  default: string;
  sm: string;
  xs: string;
}

export interface DirectionProps {
  default: string;
  down: string;
  right: string;
}

// @/components/ui/Button.tsx
export interface ButtonProps {
  href?: string;
  text?: string;
  size?: string;
  direction?: string;
  arrow?: boolean;
  download?: boolean;
  internal?: boolean;
  linkedin?: boolean;
  github?: boolean;
  classProps?: string;
}

// @/components/ui/Tab.tsx
export interface TabProps {
  active?: boolean;
  selectTab?: MouseEventHandler<HTMLElement>;
  children?: ReactNode;
}

// @/components/cards/Card.tsx
export type CardProps = (typeof MENU.projects)[number]