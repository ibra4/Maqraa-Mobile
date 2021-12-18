import * as React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import DrawerHeader from '../components/DrawerHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../assets/styles';
import HomeIndex from './Home/HomeIndex';
import GoalsIndex from './Goals/GoalsIndex';
import RegistrationIndex from './Registration/RegistrationIndex';
import PostsIndex from './Posts/PostsIndex';
import SupervisorsIndex from './Supervisors/SupervisorsIndex';
import TeachersIndex from './Teachers/TeachersIndex';
import TestimonialsIndex from './Testimonials/TestimonialsIndex';
import CertificatesIndex from './Certificates/CertificatesIndex';
import LibraryIndex from './Library/LibraryIndex';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => (
        <>
          <DrawerHeader />
          <View style={[styles.yellowBar, {width: '100%'}]} />
          <ScrollView>
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
          </ScrollView>
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
        component={TeachersIndex}
      />
      <Drawer.Screen
        name="Supervisors"
        options={{title: 'المشرفين'}}
        component={SupervisorsIndex}
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
        component={TestimonialsIndex}
      />
      <Drawer.Screen
        name="Certificates"
        options={{title: 'الشهادات الشهرية'}}
        component={CertificatesIndex}
      />
      <Drawer.Screen
        name="Library"
        options={{title: 'المكتبة'}}
        component={LibraryIndex}
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
