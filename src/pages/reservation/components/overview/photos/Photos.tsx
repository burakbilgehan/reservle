import { Text, View } from "react-native";
import { DropdownMock } from "../../../../../components/dropdowns/dropdown/Dropdown";

const images = [
  "https://www.serebii.net/pokearth/sprites/dp/006.png",
  "https://www.serebii.net/pokearth/sprites/dp/009.png",
];

const Photos = () => {
  return (
    <View>
      <Text>Photos</Text>
      <DropdownMock />
    </View>
  );
};

export default Photos;
