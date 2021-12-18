import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../assets/Colors';

const MenuButton = ({openDrawer}) => {
  return (
    <TouchableOpacity style={styles.backWrapper} onPress={() => openDrawer()}>
      <View style={styles.backBar} />
      <View style={styles.backBar} />
      <View style={styles.backBar} />
    </TouchableOpacity>
  );
};

function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>الرجوع</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo_base.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>مقرأة آل خالدي</Text>
      </TouchableOpacity>
      <View />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    marginLeft: 10,
  },
  backWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 50,
    height: 30,
  },
  backBar: {
    width: 40,
    height: 2,
    backgroundColor: Colors.yellow,
  },
});
