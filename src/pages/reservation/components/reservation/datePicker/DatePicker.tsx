import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useContext } from "react";
import { Platform, SafeAreaView, Text, View } from "react-native";
import { ReservationInfoContext } from "../../../../../context/ReservationInfoContext";
import { styles } from "./datePickerStyles";

export default function DatePicker() {
  const { selectedDate: date, setSelectedDate: setDate } = useContext(
    ReservationInfoContext
  );
  const WebDatePicker = () => {
    const today = new Date().toISOString().split("T")[0];
    const onChangeDate = (date: any) => {
      console.log(date.target.value);
      const newDate = new Date(date.target.value);
      setDate(newDate);
    };

    return (
      <div style={styles.web}>
        <div>Please select date:</div>
        <input
          type="date"
          id="start"
          name="trip-start"
          min={today}
          style={{ flex: 1, width: "100%" }}
          value={date.toISOString().split("T")[0]}
          onChange={(e) => onChangeDate(e)}
        ></input>
      </div>
    );
  };

  const CommunityDatePicker = () => {
    const onChange = (
      _event: DateTimePickerEvent,
      selectedDate?: Date | undefined
    ) => {
      const currentDate = selectedDate;
      // setShow(false);
      if (selectedDate !== undefined) setDate(currentDate!!);
    };

    return (
      <View style={styles.mobile}>
        <Text>Please select date:</Text>
        <View>
          <RNDateTimePicker
            testID="dateicker"
            value={date}
            is24Hour
            mode="date"
            onChange={onChange}
            minimumDate={new Date()}
          />
        </View>
      </View>
    );
  };

  const datePicker = Platform.select({
    ios: CommunityDatePicker,
    web: WebDatePicker,
    default: WebDatePicker,
  });

  return <SafeAreaView>{datePicker()}</SafeAreaView>;
}
