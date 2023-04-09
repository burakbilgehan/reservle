import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overview: {
    flex: 5 / 6,
    flexDirection: "column",
    //borders
    borderColor: "salmon",
    borderWidth: 8,
    borderStyle: "solid",
    borderRadius: 50,
  },
  indicators: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  content: {
    flex: 11,
    ...Platform.select({
      web: {
        flexDirection: "row",
      },
      ios: {
        flexDirection: "column",
      },
    }),
    marginHorizontal: 10,
    marginVertical: 20,
  },
  details: {
    flex: 1,
  },
  photos: {
    flex: 1,
  },
});
