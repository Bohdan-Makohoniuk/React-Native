import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
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
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

const initialState = {
  email: '',
  password: '',
};

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const keyboardHide = () => {
    setIsShowKeyboard(false), Keyboard.dismiss();
    setstate(initialState);
    console.log(Platform.OS);
    console.log(state);
  };

  const [state, setstate] = useState(initialState);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/images/PhotoBG.png')}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{ ...styles.form, marginBottom: isShowKeyboard ? 10 : 0 }}
            >
              <Text style={styles.title}>Увійти</Text>
              <View>
                <TextInput
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={value =>
                    setstate(prevState => ({ ...prevState, email: value }))
                  }
                  placeholder="Адреса електронної пошти"
                />

                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={value =>
                    setstate(prevState => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={keyboardHide}
                >
                  <Text style={styles.btnText}>Вхід</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
// ============================> Стилі <============================================
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
    marginBottom: 33,
    letterSpacing: '0.01em',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 16,
    color: '#E8E8E8',
  },

  form: {
    marginHorizontal: 16,
    // marginBottom: 50,
  },

  btn: {
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    backgroundColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    // fontFamily: 'Bold',
    width: 156,
    height: 19,
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
