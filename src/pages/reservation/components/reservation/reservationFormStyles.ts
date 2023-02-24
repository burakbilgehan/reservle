import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../../utils/Metrics";

export const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    flex: 1/2,
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "center",
    padding: 10,
    borderColor: "salmon",
    borderWidth: 8,
    borderStyle: "solid",
    borderRadius: 50,
    backgroundColor: "sandybrown"
  },
  date: {
    display: "flex",
    flex: 1 / 6,
    justifyContent: "center",
    alignItems: "stretch",
  },
  timeAndSize: {
    display: "flex",
    flexDirection: "row",
    flex: 1 / 6,
    justifyContent: "center",
    alignItems: "stretch",
  },
  button: {
    display: "flex",
    flex: 1 / 6,
    justifyContent: "center",
  },
  time: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  size: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
