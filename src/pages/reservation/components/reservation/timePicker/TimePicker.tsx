import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useCallback, useState } from "react";
import { Platform, SafeAreaView, View, Text, Button } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { DatePickerInput, DatePickerModal } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const NativeDatePicker = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = useCallback(
    (params: any) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <SafeAreaProvider>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          alignItems: "center",
        }}
      >
        <PaperButton
          onPress={() => setOpen(true)}
          uppercase={false}
          mode="outlined"
        >
          {date
            ? `${date.getDate()}/${
                date.getUTCMonth() + 1
              }/${date.getUTCFullYear()}`
            : "Please select a date"}
        </PaperButton>
        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismiss}
          date={date}
          onConfirm={onConfirm}
        />
      </View>
    </SafeAreaProvider>
  );
};

export const InputDatePicker = () => {
  const [inputDate, setInputDate] = useState(undefined);
  return (
    <SafeAreaProvider>
      <View>
        <DatePickerInput
          locale="en"
          label="Please select date"
          value={inputDate}
          onChange={(d: any) => setInputDate(d)}
          inputMode="start"
        />
      </View>
    </SafeAreaProvider>
  );
};

export const WebDatePicker = () => {
  return (
    // <SafeAreaProvider>
    //   <View>
    //     <DatePickerInput
    //       locale="en"
    //       label="Please select date"
    //       value={inputDate}
    //       onChange={(d: any) => setInputDate(d)}
    //       inputMode="start"
    //     />
    //   </View>
    // </SafeAreaProvider>

    <input type="time" id="start" name="trip-start"></input>
  );
};

export const CommunityDatePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<any>("date");
  const [show, setShow] = useState(false);

  const onChange = (
    _event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    const currentDate = selectedDate;
    // setShow(false);
    if (selectedDate !== undefined) setDate(currentDate!!);
  };

  const showMode = (currentMode: string) => {
    if (Platform.OS === "android") {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    setShow(true);
  };

  const showTimepicker = () => {
    showMode("time");
    setShow(true);
  };

  return (
    <View>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour
          mode={mode}
          onChange={onChange}
          minimumDate={new Date()}
          minuteInterval={30}
        />
      )}
    </View>
  );
};

export default function TimePicker() {
  const datePicker = Platform.select({
    ios: CommunityDatePicker,
    android: NativeDatePicker,
    web: WebDatePicker,
    default: NativeDatePicker,
  });

  return <SafeAreaView>{datePicker()}</SafeAreaView>;
}
