'use client';
import Link from 'next/link';
import Logo from '../../public/assets/images/geragenda-logo-white.png';
import LogoPink from '../../public/assets/images/logo-pink.svg';
import Image from 'next/image';
import { buttonVariants } from './ui/button';
import Menu from './Menu';
import { usePathname } from 'next/navigation';

const pathsToHide = ['/customer', '/business'];

const Header = () => {
  const pathname = usePathname();

  if (pathsToHide.includes(pathname)) {
    return null;
  }

  return (
    <header className="bg-[#0d1224] flex items-center  w-[100vw] h-[10vh] py-5">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} priority alt="GerAgenda" className="hidden lg:flex" />
          <Image src={LogoPink} alt="GerAgenda" className="flex lg:hidden" />
        </Link>

        <Menu />

        <div className="items-center gap-x-5 hidden lg:flex">
          <div className="flex items-center gap-x-5">
            <Link
              href="/customer/"
              className={buttonVariants({
                size: 'lg',
                className:
                  'bg-transparent border-[#f926ae] border text-md font-bold hover:bg-white hover:text-[#f926ae]',
              })}
            >
              Sou Cliente
            </Link>

            <Link
              href="/business"
              className={buttonVariants({
                size: 'lg',
                className: 'bg-[#f926aa] text-white font-bold text-md hover:bg-white hover:text-[#f926ae]',
              })}
            >
              7 dias grátis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
