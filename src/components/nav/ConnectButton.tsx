import { ethers } from 'ethers';
import Image from 'next/image';

import Wallet from '../../images/icons/wallet.svg';
import { shortenAddress } from '../../utils/addresses';
import { SolidButton } from '../buttons/SolidButton';
import { Identicon } from '../icons/Identicon';

export function ConnectButton() {
  const address = ethers.constants.AddressZero;

  return (
    <div className="flex justify-end mb-1 relative opacity-90">
      {address ? (
        <SolidButton
          size="l"
          color="white"
          classes="shadow-md pl-2 pr-2 sm:pr-4 sm:pl-2"
        >
          <div className="flex items-center">
            <Identicon address={address} size={30} />
            <div className="hidden sm:block ml-2.5 text-lg">
              {shortenAddress(address, false, true)}
            </div>
          </div>
        </SolidButton>
      ) : (
        <SolidButton
          size="l"
          color="white"
          classes="shadow-md px-3 sm:px-4"
          icon={<WalletIcon />}
        >
          <div className="hidden sm:block">Connect</div>
        </SolidButton>
      )}
    </div>
  );
}

function WalletIcon() {
  return (
    <div className="flex items-center sm:mr-2">
      <Image src={Wallet} alt="Wallet" width={18} height={18} />
    </div>
  );
}
