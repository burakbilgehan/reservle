import { Text, View } from "react-native";
import Indicators from "./indicators/Indicators";
import { styles } from "./OverviewStyles";

const Overview = () => {
  return (
    <View style={styles.overview}>
      <View style={styles.indicators}>
        <Indicators />
      </View>
      <View style={styles.content}>
        <View style={styles.details}>
          <Text>Details</Text>
        </View>
        <View style={styles.photos}>
          <Text>Photos</Text>
        </View>
      </View>
    </View>
  );
};

export default Overview;
