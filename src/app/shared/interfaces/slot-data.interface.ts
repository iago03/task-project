export interface IProviderList {
  data: IProviderDetails[];
}

export interface IProviderDetails {
  gamesCount: number;
  logo: string;
  name: string;
  provider: string;
  type: string;
}

export interface ISlotProvider {
  data: ISlotData;
}

export interface ISlotCategory {
  data: ISlot[];
}

export interface ISlot {
  type: string;
  category: string;
  platform: string;
  name: string;
  order: number;
  games: IGame[];
  totalGames: number;
}

export interface IGame {
  name: string;
  provider: string;
  providerName: string;
  image: string;
  image2: string;
  gameId: string;
}

export interface ISlotData {
  provider: string;
  name: string;
  order: number;
  games: IGame[];
  totalGames: number;
}
