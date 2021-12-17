import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from '../assets/styles';

function MainTitle({title}) {
  return (
    <>
      <Text style={styles.mainTitle}>{title}</Text>
      <View style={styles.yellowBar}></View>
    </>
  );
}

export default MainTitle;
