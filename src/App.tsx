import { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { enGB, registerTranslation } from "react-native-paper-dates";
import { styles } from "./AppStyles";
import { ScreenViews, ViewContext } from "./context/contexts";
import Footer from "./pages/reservation/components/footer/Footer";
import Header from "./pages/reservation/components/header/Header";
import ReservationForm from "./pages/reservation/components/reservation/ReservationForm";

registerTranslation("en-GB", enGB);

export function App() {
  const [currentView, setCurrentView] = useState<ScreenViews>(
    ScreenViews.ReservationView
  );

  const DATA = (function () {
    return [...Array(50).keys()].map((x) => {
      return { id: x, title: x + 1 };
    });
  })();

  const Item = ({ title }: any) => (
    <Text style={styles.contentElement}>{title}</Text>
  );

  const mainContent = (
    <View style={styles.content}>
      <Text>{currentView}</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        style={styles.flatList}
      />
    </View>
  );

  const content = (
    <View style={styles.body}>
      <View style={styles.header}>
        <Header />
      </View>
      {mainContent}
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );

  const MobileView = () => {
    switch (currentView) {
      case ScreenViews.ReservationView:
        return (
          <View style={styles.body}>
            <ReservationForm />
          </View>
        );
      default:
        return content;
    }
  };

  const WebView = () => {
    return (
      <View style={styles.webWrapper}>
        <View style={styles.webFiller}></View>
        <View style={styles.webFiller}>{content}</View>
        <View style={styles.webFiller}>
          <ReservationForm />
        </View>
      </View>
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
    <ViewContext.Provider value={{ currentView, setCurrentView }}>
      <SafeAreaView style={styles.body}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <FinalView os={Platform.OS} />
      </SafeAreaView>
    </ViewContext.Provider>
  );
}
