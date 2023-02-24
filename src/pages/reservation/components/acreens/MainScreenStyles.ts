import { Platform, StyleSheet } from "react-native";
import { horizontalScale } from "../../../../utils/Metrics";

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
    justifyContent: "center",
    ...Platform.select({
      web: {
        flex: 22,
      },
    }),
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
    maxWidth: horizontalScale(33),
    justifyContent: "center",
    marginHorizontal: 100
  },
  flatList: {
    flex: 1,
    flexDirection: "column",
  },
});
