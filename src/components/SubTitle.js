import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from '../assets/styles';

function SubTitle({title}) {
  return (
    <>
      <Text style={styles.subTitle}>{title}</Text>
    </>
  );
}

export default SubTitle;
