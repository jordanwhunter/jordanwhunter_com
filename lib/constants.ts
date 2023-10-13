// Brand
export const SITE_NAME = 'Jordan W. Hunter: React | Next.js Developer'
export const SITE_DESCRIPTION =
  'Jordan Hunter (he/him) is an avid full-stack JavaScript developer residing in New York City. This portfolio page highlights some of his most recent projects/developments - both agency-assigned and freelance.'

// Generic Button Styling
const generic =
  'text-gray-400 hover:text-gray-600 border-white bg-white bg-opacity-40 shadow-lg shadow-black/[0.03]'

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

  buttons: [
    {
      text: 'Contact Me',
      href: '#contact',
      size: 'sm',
      direction: 'right',
      arrow: true,
      internal: true,
      classProps:
        'bg-gradient-to-r from-blue-400 to-green-600 text-white border-black/10',
    },
    {
      text: 'Resume',
      href: 'https://drive.google.com/drive/u/0/folders/11omElH3U_feB1MhtBYno0uvjD0a5I8bz',
      size: 'sm',
      direction: 'right',
      download: true,
      classProps: generic,
    },
    {
      linkedin: true,
      href: 'https://www.linkedin.com/in/jordanhunterr/',
      size: '2xl',
      classProps: generic,
    },
    {
      github: true,
      href: 'https://github.com/jordanwhunter',
      size: '2xl',
      classProps: generic,
    },
  ],
} as const