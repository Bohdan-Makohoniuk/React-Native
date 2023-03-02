import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import React from 'react';
import * as Font from 'expo-font';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('./assets/images/PhotoBG.png')}
      >
        <Text style={styles.title}>Реєстріція</Text>
        <View style={styles.form}>
          <View>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
          </View>
        </View>
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
    // alignItems:"center",
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
    marginHorizontal: 16,
    color: '#E8E8E8',
    marginBottom: 16,

    // padding: 10,
    // borderWidth:343,
    // borderColor: "#E8E8E8",
  },
  form: {},
});
