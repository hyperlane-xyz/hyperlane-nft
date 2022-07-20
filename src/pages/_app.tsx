import type { AppProps } from 'next/app';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WagmiConfig, configureChains, createClient } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

import { ErrorBoundary } from '../components/errors/ErrorBoundary';
import { AppLayout } from '../components/layout/AppLayout';
import { prodChains } from '../consts/networksConfig';
import '../styles/fonts.css';
import '../styles/globals.css';

const { chains, provider } = configureChains(prodChains, [publicProvider()]);

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
});

export default function App({ Component, router, pageProps }: AppProps) {
  const pathName = router.pathname;
  return (
    <ErrorBoundary>
      <WagmiConfig client={client}>
        <AppLayout pathName={pathName}>
          <Component {...pageProps} />
        </AppLayout>
        <ToastContainer
          transition={Zoom}
          position={toast.POSITION.BOTTOM_RIGHT}
        />
      </WagmiConfig>
    </ErrorBoundary>
  );
}
