import type { NextPage } from 'next';
import { PropsWithChildren, useState } from 'react';

import { FloatingBox } from '../components/layout/FloatingBox';
import { SearchForm } from '../features/search/SearchForm';
import { TransferForm } from '../features/transfer/TransferForm';

const Home: NextPage = () => {
  const [page, setPage] = useState<'search' | 'transfer'>('search');
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="w-112 px-4 pt-2 pb-1 bg-red-400 rounded-t-lg">
        <h1 className="text-gray-50 text-center">Abacus Example Nft App</h1>
        <div className="flex justify-center mt-3 space-x-20">
          <PageNavButton
            onClick={() => setPage('search')}
            active={page === 'search'}
          >
            Search
          </PageNavButton>
          <PageNavButton
            onClick={() => setPage('transfer')}
            active={page === 'transfer'}
          >
            Transfer
          </PageNavButton>
        </div>
      </div>
      <FloatingBox width="w-112" classes="relative -top-1">
        {page === 'search' && <SearchForm />}
        {page === 'transfer' && <TransferForm />}
      </FloatingBox>
    </div>
  );
};

function PageNavButton(
  props: PropsWithChildren<{ onClick: () => void; active: boolean }>,
) {
  const { onClick, active, children } = props;
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center transition-all hover:opacity-70 active:opacity-60"
    >
      <h2
        className={`text-sm uppercase tracking-wide ${
          active ? 'text-gray-50' : 'text-gray-100'
        }`}
      >
        {children}
      </h2>
      <div className={`w-full mt-1 h-1 bg-gray-50 ${active ? '' : 'hidden'}`} />
    </button>
  );
}

export default Home;
