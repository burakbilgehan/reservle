import { createContext } from "react";
import { RestaurantOverviewContextType } from "../types/domain/reservation/restaurant/overview/RestaurantOverviewTypes";

export const initialRestaurantOverviewContext: RestaurantOverviewContextType = {
  indicators: {
    ratings: {
      score: 4.3,
      denom: 5,
      quantity: 256,
    },
    cuisines: [
      "Mediterranean",
      "Turkish",
      "Greek",
      "Spanish",
      "Italian",
      "Kurdish",
      "Lebanese",
      "Arabic",
    ],
    price: {
      price: 50,
      currency: "$",
      partySize: 2,
    },
  },
};

export const RestaurantOverviewContext =
  createContext<RestaurantOverviewContextType>(
    initialRestaurantOverviewContext
  );

const RestaurantOverviewProvider: any = ({ children }: any) => {
  const { indicators } = initialRestaurantOverviewContext;

  return (
    <RestaurantOverviewContext.Provider value={{ indicators }}>
      {children}
    </RestaurantOverviewContext.Provider>
  );
};

export default RestaurantOverviewProvider;
