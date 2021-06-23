import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";

import wateringBackground from "../../assets/watering.png";
import colors from "../../styles/colors";

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}suas plantas de {"\n"} forma fácil
      </Text>

      <Image source={wateringBackground} style={styles.wateringBackground} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas{"\n"} plantas. Nós cuidamos de lembrar
        você sempre{"\n"} que precisar.
      </Text>

      <TouchableOpacity style={styles.buttonWelcome}>
        <Text style={{ color: "white", fontWeight: "bold" }}>{">"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? 80 : 0,
  },

  title: {
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 38,
    textAlign: "center",
    color: colors.heading,
  },

  subtitle: {
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 17,
    color: colors.body_dark,
    lineHeight: 25,
  },
  wateringBackground: {
    width: Dimensions.get('window').width * 0.7,
    height:  Dimensions.get('window').height * 0.7
  },
  buttonWelcome: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 56,
    borderRadius: 16,
    backgroundColor: colors.green,
  },
});
