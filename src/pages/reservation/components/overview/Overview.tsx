import { Text, View } from "react-native";
import Indicators from "./indicators/Indicators";
import { styles } from "./OverviewStyles";
import Photos from "./photos/Photos";
import Details from "./details/Details";

const Overview = () => {
  return (
    <View style={styles.overview}>
      <View style={styles.indicators}>
        <Indicators />
      </View>
      <View style={styles.content}>
        <View style={styles.details}>
          <Details />
        </View>
        <View style={styles.photos}>
          <Photos />
        </View>
      </View>
    </View>
  );
};

export default Overview;
