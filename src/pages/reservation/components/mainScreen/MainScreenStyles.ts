import { Platform, StyleSheet } from "react-native";
import { horizontalScale } from "../../../../utils/Metrics";

export const styles = (windowWidth: number) =>
  StyleSheet.create({
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
          flex: 12,
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
      flex: 2,
      justifyContent: "center",
      paddingHorizontal: horizontalScale(1, windowWidth),
    },
    webFillerReservation: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: horizontalScale(1, windowWidth),
    },
  });
