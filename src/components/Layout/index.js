import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../assets/Colors';
import MainTitle from '../MainTitle';
import Header from './Header';

const componentStyle = StyleSheet.create({
  layout: {
    flex: 1,
  },
  childContainer: {
    flex: 1,
    backgroundColor: Colors.dark,
    padding: 15,
  },
});

function Layout({children}) {
  return (
    <View style={componentStyle.layout}>
      <Header />
      <View style={componentStyle.childContainer}>
        <MainTitle title="الرئيسية" />
        {children}
      </View>
    </View>
  );
}

export default Layout;
