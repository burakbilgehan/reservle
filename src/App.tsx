import { enGB, registerTranslation } from "react-native-paper-dates";
import ViewProvider from "./context/ViewContexts";
import { MainScreen } from "./pages/reservation/components/acreens/MainScreen";

registerTranslation("en-GB", enGB);

export function App() {
  return (
    <ViewProvider>
      <MainScreen />
    </ViewProvider>
  );
}
