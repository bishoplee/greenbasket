import { StyleSheet, Platform, StatusBar } from "react-native";

const top = StatusBar.currentHeight + 6

export default StyleSheet.create({
  safeArea: {
    // flex: 1,
    // backgroundColor: theme.primary, // change this color to brand color
    height: "100%",
    paddingTop: Platform.OS === "android" ? top : 0,
  }
});