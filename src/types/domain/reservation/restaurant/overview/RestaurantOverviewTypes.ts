export type RestaurantIndicatorsRatingType = {
  // what score the restaurant got
  score: number;
  // out of what?
  denom: number;
  // how many reviews?
  quantity: number;
};

export type RestaurantIndicatorsPriceType = {
  price: number;
  currency: string;
  partySize: number;
};

export type RestaurantIndicatorsInfoType = {
  ratings: RestaurantIndicatorsRatingType;
  cuisines: string[];
  price: RestaurantIndicatorsPriceType;
};

export type RestaurantOverviewContextType = {
  indicators: RestaurantIndicatorsInfoType;
};
