import { useCallback, useContext } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScreenViews, ViewContext } from "../../../../context/ViewContexts";
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
  const { setCurrentView, currentView } = useContext(ViewContext);
  const onTouch = useCallback(() => {
    console.log({ currentView });
    if (currentView === ScreenViews.MainView) {
      console.log("trying to set view as reservation");
      setCurrentView(ScreenViews.ReservationView);
      return;
    }
    if (currentView === ScreenViews.ReservationView) {
      console.log("trying to set view as main");
      setCurrentView(ScreenViews.MainView);
      return;
    }
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
