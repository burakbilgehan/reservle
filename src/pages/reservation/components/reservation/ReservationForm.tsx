import { View, Text } from "react-native";
import DatePicker from "./datePicker/DatePicker";
import TimePicker from "./timePicker/TimePicker";
import { styles } from "./reservationFormStyles";

const ReservationForm = () => {
  return (
    <View style={styles.body}>
      <DatePicker />
      <TimePicker />
      <Text>Number</Text>
      <Text>Confirm</Text>
    </View>
  );
};

export default ReservationForm;
