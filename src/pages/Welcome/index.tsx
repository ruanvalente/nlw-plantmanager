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

import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import wateringBackground from "../../assets/watering.png";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserConfirmation");
  }
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

      <TouchableOpacity style={styles.buttonWelcome} onPress={handleStart}>
        <Feather
          name="chevron-right"
          style={{ color: colors.white, fontSize: 32 }}
        />
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
    fontSize: 32,
    lineHeight: 38,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
  },

  subtitle: {
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.body_dark,
    lineHeight: 25,
  },
  wateringBackground: {
    width: Dimensions.get("window").width * 0.7,
  },
  buttonWelcome: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 16,
    backgroundColor: colors.green,
  },
});
