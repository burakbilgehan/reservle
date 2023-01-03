import { ScrollView, Text, View } from "react-native";
import { styles } from "./AppStyles";

export function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Overview</Text>
        <Text>Menu</Text>
        <Text>Reviews</Text>
        <Text>Contact</Text>
      </View>
      <ScrollView stickyHeaderIndices={[0]}>
        <ScrollView horizontal>
          <View style={styles.content}>
            {[...Array(20).keys()].map((x) => (
              <Text key={x + 1} style={styles.contentElement}>
                {x + 1}
              </Text>
            ))}
            {/* <View style={styles.restaurant}></View> */}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
