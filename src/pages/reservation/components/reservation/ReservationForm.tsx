import { View, Button, Alert } from "react-native";
import DatePicker from "./datePicker/DatePicker";
import TimePicker from "./timePicker/TimePicker";
import { styles } from "./reservationFormStyles";
import PartySizePicker from "./partySizePicker/PartySizePicker";
import { useContext } from "react";
import { ReservationInfoContext } from "../../../../context/ReservationInfoContext";

const ReservationForm = () => {
  const { selectedDate, selectedTimeslot, selectedPartySize } = useContext(
    ReservationInfoContext
  );
  const onPress = () => {
    const data = `${selectedDate.toISOString()} ${selectedTimeslot} ${selectedPartySize}`;
    Alert.alert(data);
    console.log(data);
  };
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
        <Button title="Reserve" onPress={onPress} />
      </View>
    </View>
  );
};

export default ReservationForm;
