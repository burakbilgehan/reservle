import { useContext } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { ScreenViews, ViewContext } from "../../../../context/ViewContexts";
import { horizontalScale } from "../../../../utils/Metrics";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ReservationForm from "../reservation/ReservationForm";
import { styles } from "./MainScreenStyles";

export function MainScreen() {
  const { currentView } = useContext(ViewContext);
  const DATA = (function () {
    return [...Array(40).keys()].map((x) => {
      return { id: x, title: x + 1 };
    });
  })();

  const Item = ({ title }: any) => (
    <Text style={styles.contentElement}>{title}</Text>
  );

  const mainContent = (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      style={styles.flatList}
    />
  );

  const MobileContent = () => {
    switch (currentView) {
      case ScreenViews.ReservationView:
        return (
          <View style={styles.content}>
            <ReservationForm />
          </View>
        );
      default:
        return mainContent;
    }
  };

  const Content = ({ children }: any) => {
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.content}>{children}</View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    );
  };

  const WebView = () => {
    return (
      <Content>
        <View style={styles.webWrapper}>
          <View style={styles.webFiller}></View>
          <View
            style={{
              flex: 1,
              maxWidth: horizontalScale(33),
              minWidth: horizontalScale(33),
            }}
          >
            {mainContent}
          </View>
          <View style={styles.webFiller}>
            <ReservationForm />
          </View>
        </View>
      </Content>
    );
  };

  const MobileView = () => {
    return (
      <Content>
        <MobileContent></MobileContent>
      </Content>
    );
  };

  const FinalView = (props: any) => {
    const os = props.os;
    switch (os) {
      case "ios":
      case "android":
        return <MobileView />;
      case "web":
      default:
        return <WebView />;
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <FinalView os={Platform.OS} />
    </SafeAreaView>
  );
}
