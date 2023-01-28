import { Picker } from "@react-native-picker/picker";
import { useCallback, useState } from "react";
import { Platform, Text, View } from "react-native";

const PartySizePicker = () => {
  const [partySize, setPartySize] = useState<number | undefined>();

  const onChange = (value: number) => {
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
      <Text onPress={onToggleDropdown}>Select Party Size ({partySize}):</Text>
      {isVisible && (
        <Picker selectedValue={partySize} onValueChange={onChange}>
          {partySizeOptions.map((option) => (
            <Picker.Item label={`${option}`} value={option} key={option} />
          ))}
        </Picker>
      )}
    </View>
  );
};

export default PartySizePicker;
