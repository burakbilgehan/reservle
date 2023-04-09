// indicator
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

// detail
export type WorkingTimes = {
  monday: [string, string];
  tuesday: [string, string];
  wednesday: [string, string];
  thursday: [string, string];
  friday: [string, string];
  saturday: [string, string];
  sunday: [string, string];
};

export type RestaurantFeature = {
  name: string;
  enabled: boolean;
};

export type RestaurantDetailsInfoType = {
  address: string;
  website: string;
  phone: string;
  cuisines: string[];
  paymentOptions: string[];
  workingTimes: WorkingTimes;
  // link to google
  commute?: string;
  facilities?: string[];
  features?: RestaurantFeature[];
  tags?: string[];
};

// context
export type RestaurantOverviewContextType = {
  indicators: RestaurantIndicatorsInfoType;
  details: RestaurantDetailsInfoType;
};
