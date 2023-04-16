import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./SubmitButton.styles";

const SubmitButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
