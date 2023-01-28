import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Platform, SafeAreaView, Text, View } from "react-native";
import { range } from "../../../../../utils/Math";

export const WebDatePicker = () => {
  const hourOptions: string[] = range(11, 23).map((hour) => hour.toString());
  const minuteOptions: string[] = [0, 15, 30, 45].map((minute) =>
    minute.toString()
  );
  const timeOptions: string[] = hourOptions
    .map((hour) => {
      return minuteOptions.map(
        (minute) => `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`
      );
    })
    .flat();
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<number>(0);
  const onChange = (value: number) => {
    setSelectedTimeIndex(value);
  };
  return (
    <View>
      <Text>Select time:</Text>
      <Picker selectedValue={selectedTimeIndex} onValueChange={onChange}>
        {timeOptions.map((option, i) => (
          <Picker.Item label={option} value={i} key={i} />
        ))}
      </Picker>
    </View>
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
      <Text>Please select time:</Text>
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
