import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeIndex from './src/screens/Home/HomeIndex';
import {I18nManager} from 'react-native';

const Stack = createNativeStackNavigator();
I18nManager.forceRTL(true);

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeIndex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
