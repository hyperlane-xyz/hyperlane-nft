import Image from 'next/future/image';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { toast } from 'react-toastify';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

import { SolidButton } from '../../components/buttons/SolidButton';
import { Identicon } from '../../components/icons/Identicon';
import Clipboard from '../../images/icons/clipboard-plus.svg';
import Cube from '../../images/icons/cube.svg';
import Wallet from '../../images/icons/wallet.svg';
import XCircle from '../../images/icons/x-circle.svg';
import { shortenAddress } from '../../utils/addresses';
import { tryClipboardSet } from '../../utils/clipboard';
import { logger } from '../../utils/logger';
import { useIsSsr } from '../../utils/ssr';

export function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connectAsync, connectors } = useConnect();
  const { disconnectAsync } = useDisconnect();

  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(3);

  const isSsr = useIsSsr();
  if (isSsr) {
    // https://github.com/wagmi-dev/wagmi/issues/542#issuecomment-1144178142
    return null;
  }

  const onClickConnect = async () => {
    setIsOpen(false);
    try {
      if (!connectAsync) throw new Error('Connect function is null');
      // TODO pop a modal to support other connectors
      // Consider rainbowkit for this
      // For now this just uses InjectedConnector (i.e. Metamask)
      await connectAsync({ connector: connectors[0] });
    } catch (error) {
      logger.error('Error connecting to wallet', error);
      toast.error('Could not connect to wallet');
    }
  };

  const onClickDisconnect = async () => {
    setIsOpen(false);
    try {
      if (!disconnectAsync) throw new Error('Disconnect function is null');
      await disconnectAsync();
    } catch (error) {
      logger.error('Error disconnecting to wallet', error);
      toast.error('Could not disconnect wallet');
    }
  };

  const onClickCopy = async () => {
    setIsOpen(false);
    if (!address) return;
    await tryClipboardSet(address);
  };

  return (
    <div className="flex justify-end mb-1 relative opacity-90">
      {address && isConnected ? (
        <SolidButton
          size="l"
          color="white"
          classes="shadow-md pl-2 pr-2 sm:pr-4 sm:pl-2"
          passThruProps={buttonProps}
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
          onClick={onClickConnect}
        >
          <div className="hidden sm:block">Connect</div>
        </SolidButton>
      )}

      <div
        className={`dropdown-menu w-52 mt-12 mr-px bg-white ${
          isOpen ? '' : 'hidden'
        }`}
        role="menu"
      >
        <a
          {...itemProps[0]}
          className={menuOptionClasses}
          onClick={onClickCopy}
        >
          <CopyIcon />
          <div>Copy Address</div>
        </a>
        <a
          {...itemProps[1]}
          className={menuOptionClasses}
          onClick={() => {
            alert('TODO');
          }}
        >
          <NetworkIcon />
          <div>Change Network</div>
        </a>
        <a
          {...itemProps[2]}
          className={menuOptionClasses}
          onClick={onClickDisconnect}
        >
          <LogoutIcon />
          <div>Disconnect</div>
        </a>
      </div>
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

function NetworkIcon() {
  return (
    <div className="flex items-center sm:mr-3">
      <Image src={Cube} alt="Network" width={18} height={18} />
    </div>
  );
}

function CopyIcon() {
  return (
    <div className="flex items-center sm:mr-3">
      <Image src={Clipboard} alt="Copy" width={18} height={18} />
    </div>
  );
}

function LogoutIcon() {
  return (
    <div className="flex items-center sm:mr-3">
      <Image src={XCircle} alt="Logout" width={18} height={18} />
    </div>
  );
}

const menuOptionClasses =
  'flex items-center cursor-pointer p-2 mt-1 rounded hover:bg-gray-100';
