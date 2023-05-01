import { MaterialIcons } from "@expo/vector-icons";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type Props = {
  options: Option[];
  disabledOptions?: string[];
  value?: string;
  onSelect: (value: string) => void;
};

const options: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
  { value: "option6", label: "Option 6", disabled: true },
  { value: "option7", label: "Option 7", disabled: true },
  { value: "option8", label: "Option 8" },
  { value: "option9", label: "Option 9" },
  { value: "option0", label: "Option 0" },
  { value: "optiona", label: "Option a" },
  { value: "options", label: "Option s" },
  { value: "optiond", label: "Option d" },
  { value: "optionf", label: "Option f" },
  { value: "optiong", label: "Option g" },
];

export const DropdownMock = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <Dropdown
      options={options}
      onSelect={setSelectedValue}
      value={selectedValue}
    />
  );
};

const Dropdown: FC<Props> = ({ options, value, onSelect }) => {
  const [showOptions, setShowOptions] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  const handleSelectOption = (option: Option) => {
    if (!option.disabled) {
      onSelect(option.value);
    }
    setShowOptions(false);
  };

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    console.log({ value });
  }, [value]);

  return (
    <View>
      <TouchableOpacity
        style={[styles.container]}
        onPress={handleShowOptions}
        activeOpacity={0.7}
      >
        <Text style={styles.selectedOption}>{selectedOption?.label}</Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
      </TouchableOpacity>
      {showOptions && (
        <ScrollView style={styles.optionsList}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.option,
                option.disabled ? styles.disabledOptions : {},
              ]}
              onPress={() => handleSelectOption(option)}
              disabled={option.disabled}
            >
              <Text style={styles.optionLabel}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
  },
  selectedOption: {
    fontSize: 16,
  },
  optionsList: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    maxHeight: 200,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  option: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  optionLabel: {
    fontSize: 16,
  },
  disabledOptions: {
    backgroundColor: "grey",
    color: "white",
  },
});

export default Dropdown;
