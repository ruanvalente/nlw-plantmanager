import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Button } from "../../components/Button";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function UserConfirmation() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <Text style={styles.emoji}>😃</Text>
          <Text style={styles.title}>Como podemos {"\n"} chamar você?</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor={colors.body_light}
            ></TextInput>
          </View>
          <Button title="Confirmar" />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  emoji: {
    fontSize: 36,
    paddingVertical: 24,
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  inputContainer: {
    paddingVertical: 40,
  },
  input: {
    width: Dimensions.get("window").width * 0.7,
    paddingVertical: 12,
    borderBottomWidth: 1,
    fontSize: 17,
    lineHeight: 23,
    color: colors.heading,
    borderColor: colors.gray,
    fontFamily: fonts.text,
    textAlign: "center",
  },
});
