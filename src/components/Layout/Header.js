import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../assets/Colors';

const BackButton = () => (
  <TouchableOpacity style={styles.backWrapper}>
    <View style={styles.backBar} />
    <View style={styles.backBar} />
    <View style={styles.backBar} />
  </TouchableOpacity>
);

function Header() {
  return (
    <View style={styles.header}>
      <BackButton />
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo_base.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>مقرأة آل خالدي</Text>
      </TouchableOpacity>
      <Text>الرجوع</Text>
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
