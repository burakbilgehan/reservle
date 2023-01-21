import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { HeaderData } from "../../../../types/BaseFormTypes";
import { styles } from "./headerStyles";

const headerFields: HeaderData[] = [
  {
    id: "1",
    title: "Overview",
  },
  {
    id: "2",
    title: "Menu",
  },
  {
    id: "3",
    title: "Reviews",
  },
  {
    id: "4",
    title: "Contact",
  },
];

const Header = () => {
  const renderHeader = (input: ListRenderItemInfo<HeaderData>) => {
    const { item } = input;
    return (
      <View style={styles.headerItem}>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <FlatList
      horizontal
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-evenly",
      }}
      style={styles.header}
      data={headerFields}
      renderItem={renderHeader}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Header;
