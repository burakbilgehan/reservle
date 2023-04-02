import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    flex: 1 / 2,
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "center",
    padding: 10,
    borderColor: "salmon",
    borderWidth: 8,
    borderStyle: "solid",
    borderRadius: 50,
    backgroundColor: "sandybrown",
    maxWidth: 320,
    minWidth: 320,
    alignSelf: "center",
  },
  date: {
    display: "flex",
    flex: 1 / 6,
    justifyContent: "center",
    paddingRight: 10,
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
    paddingRight: 10,
  },
  size: {
    flex: 1,
    justifyContent: "center",
    paddingRight: 10,
  },
});
