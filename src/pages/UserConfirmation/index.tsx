import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import colors from '../../styles/colors';

export function UserConfirmation() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😃</Text>
        <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? "padding" : "height"}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}></TextInput>
        </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },

  emoji: {
    fontSize: 36,
    paddingVertical: 24
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    fontWeight: "bold"
  },
  inputContainer: {
    paddingVertical: 40,
  },
  input: {
    borderBottomWidth: 1,
    width: Dimensions.get('window').width * 0.7
  }
})
