import { createContext, useState } from "react";

export type ReservationInfoContextType = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  selectedTimeslot: String;
  setSelectedTimeslot: (timeslot: String) => void;
  selectedPartySize: Number;
  setSelectedPartySize: (size: Number) => void;
};

export const initialReservationInfoContext: ReservationInfoContextType = {
  selectedDate: new Date(),
  setSelectedDate: () => {},
  selectedTimeslot: "",
  setSelectedTimeslot: () => {},
  selectedPartySize: 1,
  setSelectedPartySize: () => {},
};

export const ReservationInfoContext = createContext<ReservationInfoContextType>(
  initialReservationInfoContext
);

const ReservationInfoProvider: any = ({ children }: any) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeslot, setSelectedTimeslot] = useState<String>("");
  const [selectedPartySize, setSelectedPartySize] = useState<Number>(1);
  return (
    <ReservationInfoContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedTimeslot,
        setSelectedTimeslot,
        selectedPartySize,
        setSelectedPartySize,
      }}
    >
      {children}
    </ReservationInfoContext.Provider>
  );
};

export default ReservationInfoProvider;
