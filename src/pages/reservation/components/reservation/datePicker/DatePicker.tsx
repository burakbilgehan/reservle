import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, SafeAreaView, Text, View } from "react-native";
import { styles } from "./datePickerStyles";

export const WebDatePicker = () => {
  const today = new Date().toISOString().split("T")[0];
  return (
    <div style={styles.web}>
      <div>Please select date:</div>
      <input
        type="date"
        id="start"
        name="trip-start"
        min={today}
        style={{ flex: 1, width: "100%" }}
      ></input>
    </div>
  );
};

export const CommunityDatePicker = () => {
  const [date, setDate] = useState(new Date());

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

export default function DatePicker() {
  const datePicker = Platform.select({
    ios: CommunityDatePicker,
    web: WebDatePicker,
    default: WebDatePicker,
  });

  return <SafeAreaView>{datePicker()}</SafeAreaView>;
}
