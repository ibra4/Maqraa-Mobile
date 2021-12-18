import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {I18nManager} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './src/screens/DrawerNavigator';
import PostInnerIndex from './src/screens/Posts/inner/PostInnerIndex';

const Stack = createNativeStackNavigator();

I18nManager.forceRTL(true);

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="drawer" component={DrawerNavigator} />
        <Stack.Screen name="SinglePost" component={PostInnerIndex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
