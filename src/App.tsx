import { View } from "react-native";
import { enGB, registerTranslation } from "react-native-paper-dates";
import { styles } from "./AppStyles";
import ReservationInfoProvider from "./context/ReservationInfoContext";
import RestaurantOverviewProvider from "./context/RestaurantOverviewContext";
import ViewProvider from "./context/ViewContexts";
import { MainScreen } from "./pages/reservation/components/mainScreen/MainScreen";

registerTranslation("en-GB", enGB);

export function App() {
  return (
    <View style={styles.body}>
      <ViewProvider>
        <ReservationInfoProvider>
          <RestaurantOverviewProvider>
            <MainScreen />
          </RestaurantOverviewProvider>
        </ReservationInfoProvider>
      </ViewProvider>
    </View>
  );
}
