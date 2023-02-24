import { View } from "react-native";
import { enGB, registerTranslation } from "react-native-paper-dates";
import { styles } from "./AppStyles";
import ViewProvider from "./context/ViewContexts";
import { MainScreen } from "./pages/reservation/components/acreens/MainScreen";

registerTranslation("en-GB", enGB);

export function App() {
  return (
    <View style={styles.body}>
      <ViewProvider>
        <MainScreen />
      </ViewProvider>
    </View>
  );
}
