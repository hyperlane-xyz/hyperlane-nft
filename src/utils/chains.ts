import { allChains } from 'wagmi';

export function getChainName(chainId: number) {
  return allChains.find((c) => c.id === chainId)?.name || 'unknown';
}
