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
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const loadApplication = async () => {
  await Font.loadAsync({
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    // 'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
    // 'Roboto-700': require('./assets/fonts/Roboto-Bold.ttf'),
  });
};

const initialState = {
  email: '',
  password: '',
};

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const keyboardHide = () => {
    setIsShowKeyboard(false), Keyboard.dismiss();
    setstate(initialState);
    console.log(Platform.OS);
    console.log(state);
  };
  const [state, setstate] = useState(initialState);

  const [isReady, setisReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setisReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('./assets/images/PhotoBG.png')}
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
                />

                <TextInput
                  style={styles.input}
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
    fontFamily: 'Roboto-400',
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
