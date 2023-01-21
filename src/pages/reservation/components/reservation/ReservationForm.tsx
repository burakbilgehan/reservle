import { View, Text } from "react-native";
import DatePicker from "./datePicker/DatePicker";

const ReservationForm = () => {
  return (
    <View>
      <DatePicker />
      <Text>Time</Text>
      <Text>Number</Text>
      <Text>Confirm</Text>
    </View>
  );
};

export default ReservationForm;
