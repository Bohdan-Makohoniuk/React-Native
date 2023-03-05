import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import * as Font from 'expo-font';

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('./assets/images/PhotoBG.png')}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 60 : 0 }}
          >
            <Text style={styles.title}>Реєстріція</Text>
            <View>
              <TextInput
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                <Text style={styles.btnText}>Зареєструватись</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: '0.01em',
    textAlign: 'center',
    marginBottom: 33,
  },
  input: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    color: '#E8E8E8',
    marginBottom: 16,
  },

  form: {
    marginHorizontal: 16,
    // marginBottom: 50,
  },

  btn: {
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginTop: 43,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    width: 156,
    height: 19,
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
  },
});
