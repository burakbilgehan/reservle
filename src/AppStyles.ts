import { StyleSheet } from "react-native";
import { verticalScale } from "./utils/Metrics";

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    color: "black",
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  content: {
    flex: 10,
    flexDirection: "column",
    height: 200,
  },
  contentElement: {
    flex: 1,
    backgroundColor: "lightcoral",
  },
  webWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  webFiller: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    flexDirection: "column",
  }
});
