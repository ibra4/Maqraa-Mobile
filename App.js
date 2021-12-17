import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import HomeIndex from './src/screens/Home/HomeIndex';
import {I18nManager, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import styles from './src/assets/styles';
import DrawerHeader from './src/components/DrawerHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GoalsIndex from './src/screens/Goals/GoalsIndex';
import RegistrationIndex from './src/screens/Registration/RegistrationIndex';

const Drawer = createDrawerNavigator();

I18nManager.forceRTL(true);

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => (
          <>
            <DrawerHeader />
            <View style={[styles.yellowBar, {width: '100%'}]} />
            <DrawerItemList {...props} />
            <View style={[styles.yellowBar, {width: '100%'}]} />
            <View>
              <TouchableOpacity>
                <Text style={componentStyle.drawerLabelStyle}>
                  القرآن الكريم
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={componentStyle.drawerLabelStyle}>تواصل معنا</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={componentStyle.drawerLabelStyle}>
                  إعدادات التطبيق
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        screenOptions={{
          headerShown: false,
          drawerStyle: styles.drawerStyle,
          drawerItemStyle: styles.drawerItemStyle,
          drawerLabelStyle: styles.drawerLabelStyle,
          drawerPosition: 'right',
        }}>
        <Drawer.Screen
          name="Home"
          options={{title: 'الرئيسية'}}
          component={HomeIndex}
        />
        <Drawer.Screen
          name="Goals"
          options={{title: 'أهداف المقرأة'}}
          component={GoalsIndex}
        />
        <Drawer.Screen
          name="Teachers"
          options={{title: 'المعلمين'}}
          component={HomeIndex}
        />
        <Drawer.Screen
          name="Supervisors"
          options={{title: 'المشرفين'}}
          component={HomeIndex}
        />
        <Drawer.Screen
          name="Registration"
          options={{title: 'شروط الالتحاق والتسجيل'}}
          component={RegistrationIndex}
        />
        <Drawer.Screen
          name="Testimonials"
          options={{title: 'التزكيات'}}
          component={HomeIndex}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const componentStyle = StyleSheet.create({
  drawerLabelStyle: {
    ...styles.drawerLabelStyle,
    padding: 15,
  },
});
