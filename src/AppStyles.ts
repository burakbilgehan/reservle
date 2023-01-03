import Constants from "expo-constants";
import { Platform, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "./utils/Metrics";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
    backgroundColor: "purple",
    padding: 8,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "orange",
  },
  content: {
    flex: 6,
    ...Platform.select({
      ios: {
        backgroundColor: "yellow"
      },
      web: {
        backgroundColor: "powderblue"
      }
    })
  },
  contentElement: {
    height: verticalScale(90),
    width: horizontalScale(1500),
    margin: 10,
    backgroundColor: "red",
  }
});
