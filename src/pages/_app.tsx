import type { AppProps } from 'next/app';
import { ToastContainer, Zoom, toast } from 'react-toastify';

import { ErrorBoundary } from '../components/errors/ErrorBoundary';
import { AppLayout } from '../components/layout/AppLayout';
import '../styles/fonts.css';
import '../styles/globals.css';

export default function App({ Component, router, pageProps }: AppProps) {
  const pathName = router.pathname;
  return (
    <ErrorBoundary>
      <AppLayout pathName={pathName}>
        <Component {...pageProps} />
      </AppLayout>
      <ToastContainer
        transition={Zoom}
        position={toast.POSITION.BOTTOM_RIGHT}
      />
    </ErrorBoundary>
  );
}
