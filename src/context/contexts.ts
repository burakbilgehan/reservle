import { createContext } from "react";

export enum ScreenViews {
  MainView,
  ReservationView,
}

export type ViewContextType = {
  currentView: ScreenViews;
  setCurrentView: (view: ScreenViews) => void;
};

const initial: ViewContextType = {
  currentView: ScreenViews.ReservationView,
  setCurrentView: () => {},
};

export const ViewContext = createContext<ViewContextType>(initial);
