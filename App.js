import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      
    </NavigationContainer>
  );
}
