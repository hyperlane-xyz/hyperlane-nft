export interface Nft {
  contract: Address;
  tokenId: number;
  tokenUri: string;
  imageUri?: string;
}

export interface NftContract {
  address: Address;
  name: string;
  symbol: string;
  uri?: string;
}

export interface AddNftContractParams {
  address: Address;
}

// From the IPFS json files for NFTs
export type NftMetadata = {
  description: string;
  image: string;
  imageType: 'image' | 'video' | 'unknown';
  metadataUrl: string;
  name: string;
  owner: Address;
  rawData: Record<string, unknown> | null;
};