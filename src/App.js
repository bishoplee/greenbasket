import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font'
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from 'expo-navigation-bar';

import Splash from './Screens/Splash'
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import EmailSignUp from './Screens/EmailSignUp';

// import AndroidSafeArea from './Utils/AndroidSafeArea';
// import { theme } from './Styles/Theme';

const Stack = createNativeStackNavigator()


export default function App() {
  if (Platform.OS === "android") {
    // enables edge-to-edge mode
    NavigationBar.setPositionAsync('absolute')
    // transparent backgrounds to see through
    NavigationBar.setBackgroundColorAsync('#ffffff00')
    // changes the color of the button icons "dark||light"
    NavigationBar.setButtonStyleAsync("dark");
  }

  const [fontsLoaded] = useFonts({
    MtThin: require('./assets/fonts/static/Montserrat-Thin.ttf'),
    MtLight: require('./assets/fonts/static/Montserrat-Light.ttf'),
    MtMedium: require('./assets/fonts/static/Montserrat-Medium.ttf'),
    MtRegular: require('./assets/fonts/static/Montserrat-Regular.ttf'),
    MtSemiBold: require('./assets/fonts/static/Montserrat-SemiBold.ttf'),
    Esteban: require('./assets/fonts/static/Esteban-Regular.ttf'),
  })

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName='Splash'
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="EmailSignUp" component={EmailSignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',//theme.accent1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
