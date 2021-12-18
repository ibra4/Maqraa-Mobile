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

function InnerLayout({children, title, loading = false, padding = true}) {
  return (
    <View style={componentStyle.layout}>
      <Header />
      <View style={componentStyle.childContainer}>
        <MainTitle title={title} />
        {loading ? <Text>جار التحميل ...</Text> : children}
      </View>
    </View>
  );
}

export default InnerLayout;
