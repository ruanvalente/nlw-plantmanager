import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacityProps,
} from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest} activeOpacity={0.7}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get("window").width * 0.7,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 56,
    borderRadius: 16,
    backgroundColor: colors.green,
  },

  buttonText: {
    color: colors.white,
    fontSize: 17,
    lineHeight: 23,
    textAlign: "center",
    fontFamily: fonts.text,
  },
});
