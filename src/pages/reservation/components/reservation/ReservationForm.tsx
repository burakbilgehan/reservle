import { View, Button, Alert } from "react-native";
import DatePicker from "./datePicker/DatePicker";
import TimePicker from "./timePicker/TimePicker";
import { styles } from "./reservationFormStyles";
import PartySizePicker from "./partySizePicker/PartySizePicker";

const ReservationForm = () => {
  return (
    <View style={styles.body}>
      <View style={styles.date}>
        <DatePicker />
      </View>
      <View style={styles.timeAndSize}>
        <View style={styles.size}>
          <PartySizePicker />
        </View>
        <View style={styles.time}>
          <TimePicker />
        </View>
      </View>
      <View style={styles.button}>
        <Button
          title="Reserve"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    </View>
  );
};

export default ReservationForm;
