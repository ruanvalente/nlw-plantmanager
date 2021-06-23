import React from "react";
import { StyleSheet, View } from "react-native";

import { Welcome } from "./src/pages/Welcome";
import { UserConfirmation } from './src/pages/UserConfirmation'

export default function App() {
  return (
    <View style={styles.container}>
      <UserConfirmation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
