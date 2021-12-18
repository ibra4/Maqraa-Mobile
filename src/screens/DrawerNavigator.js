import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import DrawerHeader from '../components/DrawerHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeIndex from './Home/HomeIndex';
import GoalsIndex from './Goals/GoalsIndex';
import RegistrationIndex from './Registration/RegistrationIndex';
import PostsIndex from './Posts/PostsIndex';
import styles from '../assets/styles';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
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
              <Text style={componentStyle.drawerLabelStyle}>القرآن الكريم</Text>
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
        name="Posts"
        options={{title: 'المنشورات'}}
        component={PostsIndex}
      />
      <Drawer.Screen
        name="Testimonials"
        options={{title: 'التزكيات'}}
        component={HomeIndex}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

const componentStyle = StyleSheet.create({
    drawerLabelStyle: {
      ...styles.drawerLabelStyle,
      padding: 15,
    },
  });