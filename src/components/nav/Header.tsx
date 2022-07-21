import Image from 'next/future/image';
import Link from 'next/link';

import { WalletControlBar } from '../../features/wallet/WalletControlBar';
import Logo from '../../images/logos/abacus-with-name.svg';

export function Header() {
  return (
    <header className="w-screen py-5 px-3 sm:pl-5 sm:pr-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <div className="flex scale-90 sm:scale-100">
              <Image
                src={Logo}
                alt="Abacus Logo"
                quality={100}
                width={180}
                height={80}
              />
            </div>
          </a>
        </Link>
        <WalletControlBar />
      </div>
    </header>
  );
}
