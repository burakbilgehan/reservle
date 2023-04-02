import { useContext } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  useWindowDimensions,
  View,
} from "react-native";
import { ScreenViews, ViewContext } from "../../../../context/ViewContexts";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Overview from "../overview/Overview";
import ReservationForm from "../reservation/ReservationForm";
import { styles as defaultStyle } from "./MainScreenStyles";

export function MainScreen() {
  const { width } = useWindowDimensions();
  const styles = defaultStyle(width);
  const { currentView } = useContext(ViewContext);

  const mainContent = <Overview />;

  const MobileContent = () => {
    switch (currentView) {
      case ScreenViews.ReservationView:
        return <ReservationForm />;
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
          <View style={styles.webFiller}>{mainContent}</View>
          <View style={styles.webFillerReservation}>
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
        return width > 1024 ? <WebView /> : <MobileView />;
    }
  };

  return (
    <SafeAreaView style={defaultStyle(width).body}>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <FinalView os={Platform.OS} />
    </SafeAreaView>
  );
}
