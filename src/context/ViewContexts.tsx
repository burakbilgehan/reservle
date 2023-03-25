import { createContext, useState } from "react";

export enum ScreenViews {
  MainView,
  ReservationView,
}

export type ViewContextType = {
  currentView: ScreenViews;
  setCurrentView: (view: ScreenViews) => void;
};

export const initialViewContext: ViewContextType = {
  currentView: ScreenViews.MainView,
  setCurrentView: () => {},
};

export const ViewContext = createContext<ViewContextType>(initialViewContext);

const ViewProvider: any = ({ children }: any) => {
  const [stateView, setStateView] = useState(ScreenViews.MainView);
  return (
    <ViewContext.Provider
      value={{ currentView: stateView, setCurrentView: setStateView }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export default ViewProvider;
