import Image from 'next/future/image';
import Link from 'next/link';

import { WalletControlBar } from '../../features/wallet/WalletControlBar';
import Logo from '../../images/logos/hyperlane-logo.svg';
import Name from '../../images/logos/hyperlane-name.svg';

export function Header() {
  return (
    <header className="w-screen py-5 px-3 sm:pl-5 sm:pr-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <div className="flex items-center scale-90 sm:scale-100">
              <div className="relative">
                <Image src={Logo} width={24} height={28} />
              </div>
              <div className="relative pt-1 ml-2">
                <Image src={Name} width={124} height={28} alt="Hyperlane" />
              </div>
            </div>
          </a>
        </Link>
        <WalletControlBar />
      </div>
    </header>
  );
}
