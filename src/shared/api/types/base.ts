import Web3 from 'web3';

export interface RequestWithWeb3Provider {
  web3Provider: Web3;
}

export type WithId = {
  id: string;
};

export type PaginateConcatination = {
  shouldConcat?: boolean;
};

export type Pagination = {
  limit: number;
  offset: number;
};
