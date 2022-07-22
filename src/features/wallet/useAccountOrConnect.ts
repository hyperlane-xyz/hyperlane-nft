import { toast } from 'react-toastify';
import { useAccount, useConnect } from 'wagmi';

import { logger } from '../../utils/logger';

export function useAccountOrConnect() {
  const { address, isConnected, connector } = useAccount();
  const { connectAsync, connectors } = useConnect();

  const onClickConnect = async () => {
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

  return {
    address,
    isConnected,
    connector,
    onClickConnect,
  };
}
