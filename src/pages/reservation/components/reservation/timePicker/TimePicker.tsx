import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, SafeAreaView, Text, View } from "react-native";

export const WebDatePicker = () => {
  return (
    <input type="time" id="start" name="trip-start"></input>
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
    <View>
      <Text>selected: {date.toLocaleString()}</Text>
      <RNDateTimePicker
        testID="timePicker"
        value={date}
        is24Hour
        mode="time"
        onChange={onChange}
        minuteInterval={15}
      />
    </View>
  );
};

export default function TimePicker() {
  const datePicker = Platform.select({
    ios: CommunityDatePicker,
    web: WebDatePicker,
    default: WebDatePicker,
  });

  return <SafeAreaView>{datePicker()}</SafeAreaView>;
}
