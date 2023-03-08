import { Picker } from "@react-native-picker/picker";
import { useCallback, useContext, useState } from "react";
import { Platform, Text, View } from "react-native";
import { ReservationInfoContext } from "../../../../../context/ReservationInfoContext";

const PartySizePicker = () => {
  const { selectedPartySize: partySize, setSelectedPartySize: setPartySize } =
    useContext(ReservationInfoContext);

  const onChange = (value: Number) => {
    setPartySize(value);
    setVisible(false);
  };

  const partySizeOptions: number[] = [...Array(20).keys()].map(
    (value) => value + 1
  );
  const [visible, setVisible] = useState(false);

  const onToggleDropdown = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const isVisible = Platform.select({
    ios: visible,
    web: true,
    default: true,
  });

  return (
    <View>
      <Text onPress={onToggleDropdown}>Select Party Size</Text>
      {isVisible ? (
        <Picker<Number> selectedValue={partySize} onValueChange={onChange}>
          {partySizeOptions.map((option) => (
            <Picker.Item label={`${option}`} value={option} key={option} />
          ))}
        </Picker>
      ) : (
        <Text>{partySize.toString()}</Text>
      )}
    </View>
  );
};

export default PartySizePicker;
