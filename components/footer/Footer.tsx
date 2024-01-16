const Footer = () => (
  <footer className='flex flex-col items-center text-gray-400 mb-10 px-4'>
    {/* Date */}
    <small className='mb-2'>
      &copy; {new Date().getFullYear()} Jordan W. Hunter. All rights reserved.
    </small>
    <small className='font-semibold text-center'>
      This website was built using{' '}
      <a target='_blank' href='https://react.dev/' className='underline'>
        React
      </a>
      {' '}|{' '}
      <a target='_blank' href='https://nextjs.org/' className='underline'>
        Next.js
      </a>
      ,{' '}
      <a
        target='_blank'
        href='https://www.typescriptlang.org/'
        className='underline'
      >
        TypeScript
      </a>
      , and{' '}
      <a target='_blank' href='https://tailwindcss.com/' className='underline'>
        Tailwind CSS
      </a>
      . Hosted on{' '}
      <a target='_blank' href='https://vercel.com/' className='underline'>
        Vercel
      </a>
      . Visit the{' '}
      <a
        target='_blank'
        href='https://github.com/jordanwhunter/jordanwhunter_com'
        className='underline'
      >
        GitHub Repository
      </a>.
    </small>
  </footer>
);

export default Footer