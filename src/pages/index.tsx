import type { NextPage } from 'next';

import { TransferForm } from '../features/transfer/TransferForm';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <TransferForm />
    </div>
  );
};

export default Home;
