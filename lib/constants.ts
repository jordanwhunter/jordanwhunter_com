// Brand
export const SITE_NAME = 'Jordan W. Hunter: React | Next.js Developer';
export const SITE_DESCRIPTION =
  'Jordan Hunter (he/him) is an avid full-stack JavaScript developer residing in New York City. This portfolio page highlights some of his most recent projects/developments - both agency-assigned and freelance.';

// Menu and Navigation
export const MENU = {
  navigation: [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Projects',
      href: '#projects',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
    {
      name: 'Experience',
      href: '#experience',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ],
  // 'as const' to signify to TypeScript it's readonly
} as const