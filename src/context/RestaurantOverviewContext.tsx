import { createContext } from "react";
import {
  RestaurantOverviewContextType,
  WorkingTimes,
} from "../types/domain/reservation/restaurant/overview/RestaurantOverviewTypes";

const cuisinesExample = [
  "Mediterranean",
  "Turkish",
  "Greek",
  "Spanish",
  "Italian",
  "Kurdish",
  "Lebanese",
  "Arabic",
];
const workingTimesExample: WorkingTimes = {
  monday: ["12:00", "20:00"],
  tuesday: ["12:00", "20:00"],
  wednesday: ["12:00", "20:00"],
  thursday: ["12:00", "20:00"],
  friday: ["12:00", "20:00"],
  saturday: ["12:00", "20:00"],
  sunday: ["12:00", "20:00"],
};

export const initialRestaurantOverviewContext: RestaurantOverviewContextType = {
  indicators: {
    ratings: {
      score: 4.3,
      denom: 5,
      quantity: 256,
    },
    cuisines: cuisinesExample,
    price: {
      price: 50,
      currency: "$",
      partySize: 2,
    },
  },
  details: {
    address: "Lipperkerkstraat 132",
    website: "github.com",
    phone: "777-93-11",
    cuisines: cuisinesExample,
    paymentOptions: ["paypal", "creditCard", "cash"],
    workingTimes: workingTimesExample,
    features: [
      { name: "Pet friendly", enabled: true },
      { name: "Smoking allowed", enabled: false },
    ],
    tags: ["Ambient lights", "Live music", "Michelin certified"],
  },
};

export const RestaurantOverviewContext =
  createContext<RestaurantOverviewContextType>(
    initialRestaurantOverviewContext
  );

const RestaurantOverviewProvider: any = ({ children }: any) => {
  const { indicators, details } = initialRestaurantOverviewContext;

  return (
    <RestaurantOverviewContext.Provider value={{ indicators, details }}>
      {children}
    </RestaurantOverviewContext.Provider>
  );
};

export default RestaurantOverviewProvider;
