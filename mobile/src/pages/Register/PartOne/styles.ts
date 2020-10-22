import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    width: "100%",
    padding: 32,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  points: {
    flexDirection: "row",
  },

  point: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
