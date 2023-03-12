// import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/auth/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen';

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthStack.NavigationContainer>
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Register" component={RegistrationScreen} />
        </AuthStack.NavigationContainer>
      </NavigationContainer>
    </>
  );
}
// ============================> Стилі <============================================
