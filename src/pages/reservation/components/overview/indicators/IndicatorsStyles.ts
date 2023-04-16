import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body: {
    // positioning
    display: "flex",
    ...Platform.select({
      web: {
        flexDirection: "row",
        // spread children
        justifyContent: "space-evenly",
        // vertically centered
        alignItems: "center",
        height: "100%",
      },
      ios: {
        flexDirection: "column",
      },
    }),
    //

    backgroundColor: "seashell",
    // border
    borderColor: "salmon",
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: 20,
  },
});
