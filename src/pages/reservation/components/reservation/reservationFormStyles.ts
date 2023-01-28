import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    flex: 0.3,
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  timeAndSize: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  button: {
    display: "flex",
    flex: 0.5,
    // borderWidth: 2,
    // borderRadius: 20,
    // borderColor: "black",
    justifyContent: "flex-start",
  },
});
