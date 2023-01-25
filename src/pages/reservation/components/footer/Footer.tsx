import { useCallback, useContext } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScreenViews, ViewContext } from "../../../../context/contexts";
import { HeaderData } from "../../../../types/BaseFormTypes";
import { styles } from "./footerStyles";

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

const Footer = () => {
  const { setCurrentView } = useContext(ViewContext);
  const onTouch = useCallback(() => {
    setCurrentView(ScreenViews.ReservationView);
  }, []);
  const renderHeader = (input: ListRenderItemInfo<HeaderData>) => {
    const { item } = input;
    return (
      <View style={styles.headerItem}>
        <TouchableOpacity onPress={onTouch}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
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

export default Footer;
