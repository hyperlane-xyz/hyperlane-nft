import type { NextPage } from 'next';

import { FloatingBox } from '../components/layout/FloatingBox';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <FloatingBox width="w-96" classes="overflow-visible">
        <div className="flex justify-between mb-5">
          <h2 className="text-lg font-medium pl-1">Nft</h2>
        </div>
      </FloatingBox>
    </div>
  );
};

export default Home;
