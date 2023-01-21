import { useCallback, useState } from "react";
import { Platform, SafeAreaView, View } from "react-native";
import { Button } from "react-native-paper";
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
        <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
          {date
            ? `${date.getDate()}/${
                date.getUTCMonth() + 1
              }/${date.getUTCFullYear()}`
            : "Please select a date"}
        </Button>
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

export const WebDatePicker = () => {
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

export default function DatePicker() {
  const datePicker = Platform.select({
    ios: WebDatePicker,
    android: NativeDatePicker,
    web: WebDatePicker,
    default: NativeDatePicker,
  });

  return <SafeAreaView>{datePicker()}</SafeAreaView>;
}
