import { Platform, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "./utils/Metrics";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "ghostwhite",
    padding: 8,
  },
  content: {
    flex: 6,
    ...Platform.select({
      ios: {
        backgroundColor: "yellow",
        width: horizontalScale(100),
      },
      web: {
        backgroundColor: "ghostwhite",
        width: horizontalScale(30),
      },
    }),
  },
  contentElement: {
    height: verticalScale(10),
    alignSelf:'stretch',
    margin: 10,
    backgroundColor: "lightcoral",
  },
});
