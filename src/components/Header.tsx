import Link from 'next/link';
import Logo from '../../public/geragenda-logo-white.png';
import LogoWhite from '../../public/logo-white.svg';
import Image from 'next/image';
import { Button } from './ui/button';
import Menu from './Menu';

export async function Header() {
  return (
    <header className="bg-blue-800 flex items-center fixed w-[100vw] min-h-[10vh] py-5">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} priority alt="GerAgenda" className="hidden lg:flex" />
          <Image src={LogoWhite} alt="GerAgenda" className="flex lg:hidden" />
        </Link>

        <Menu />

        <div className="items-center gap-x-5 hidden lg:flex">
          <div className="flex items-center gap-x-5">
            <Button
              className="bg-transparent border-slate-50 border text-lg font-bold hover:bg-white hover:text-blue-800"
              size={'lg'}
            >
              Entrar
            </Button>
            <Button
              className="bg-white text-blue-800 font-bold text-lg hover:bg-blue-800 hover:text-white hover:border"
              size={'lg'}
            >
              Começar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
