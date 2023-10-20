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

  tabs: [
    {
      title: 'Skills',
      id: 'skills',
      content: (
        <ul className='list-disc pl-2 text-gray-400 leading-tight grid grid-cols-2 text-center lg:text-left max-sm:px-2'>
          <div>
            <li>React | Next.js</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Prismic CRM</li>
          </div>
          <div>
            <li>Prisma ORM</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </div>
        </ul>
      ),
    },
    {
      title: 'Education',
      id: 'education',
      content: (
        <ul className='list-disc pl-2 text-center lg:text-left text-gray-400 leading-tight'>
          <li>
            Columbia University <span className='font-bold'>(CU)</span>
          </li>
          <li>
            University of South Florida <span className='font-bold'>(USF)</span>
          </li>
        </ul>
      ),
    },
    {
      title: 'Awards',
      id: 'awards',
      content: (
        <ul className='list-disc pl-2 text-center lg:text-left text-gray-400 leading-tight'>
          <li>CU Flame of Ambition Award</li>
          <li>CU Top Voted Projects Award</li>
          <li>Sigma Alpha Lambda Honor Society</li>
          <li>USF Dean&apos;s List 2014-2016</li>
          <li>Florida Bright Future&apos;s Scholarship</li>
        </ul>
      ),
    },
    {
      title: 'Certifications',
      id: 'certifications',
      content: (
        <ul className='list-disc pl-2 text-center lg:text-left text-gray-400 leading-tight'>
          <li>
            LinkedIn Skill Assessment - React{' '}
            <span className='font-bold'>(top 5%)</span>
          </li>
          <li>
            LinkedIn Skill Assessment - HTML5{' '}
            <span className='font-bold'>(top 5%)</span>
          </li>
          <li>
            LinkedIn Skill Assessment - CSS3{' '}
            <span className='font-bold'>(top 5%)</span>
          </li>
          <li>
            LinkedIn Skill Assessment - MongoDB{' '}
            <span className='font-bold'>(top 5%)</span>
          </li>
          <li>
            LinkedIn Skill Assessment - Front-End Development{' '}
            <span className='font-bold'>(top 15%)</span>
          </li>
          <li>
            LinkedIn Skill Assessment - JavaScript{' '}
            <span className='font-bold'>(top 30%)</span>
          </li>
        </ul>
      ),
    },
  ],
} as const;