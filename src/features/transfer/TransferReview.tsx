import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { SolidButton } from '../../components/buttons/SolidButton';
import { logger } from '../../utils/logger';

import { TransferFormValues } from './types';

export function TransferReview() {
  const { query, replace } = useRouter();
  const [params, setParams] = useState<TransferFormValues | null>(null);

  useEffect(() => {
    const { chainId, nftId, recipient } = query;
    if (
      !chainId ||
      typeof chainId !== 'string' ||
      !nftId ||
      typeof nftId !== 'string' ||
      !recipient ||
      typeof recipient !== 'string'
    ) {
      replace('/transfer').catch((e) =>
        logger.error('Error routing back to transfer', e),
      );
      return;
    }
    setParams({ chainId, nftId, recipient });
  }, [query, replace, setParams]);

  const onClickSend = async () => {
    if (!params) return;
    alert('TODO');
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-1">
      <div className="text-xs mb-3">{JSON.stringify(params)}</div>
      <SolidButton size="m" onClick={onClickSend}>
        Send
      </SolidButton>
    </div>
  );
}
