import { Desktop, Mobile } from '@/components/header';

const Header = () => {
  return (
    <header className='relative z-10'>
      <Mobile />
      <Desktop />
    </header>
  );
}

export default Header