import { ScrollView, Text, View, SafeAreaView } from "react-native";
import { styles } from "./AppStyles";
import Header from "./pages/reservation/components/header/Header";
import ReservationForm from "./pages/reservation/components/reservation/ReservationForm";
import { enGB, registerTranslation } from "react-native-paper-dates";

registerTranslation("en-GB", enGB);

export function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <Header />
        <ScrollView horizontal>
          <View style={styles.content}>
            {[...Array(20).keys()].map((x) => (
              <Text key={x + 1} style={styles.contentElement}>
                {x + 1}
              </Text>
            ))}
            <ReservationForm />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
