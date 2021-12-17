import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../assets/Colors';
import {fontSizes} from '../assets/constants';

function ListItem({text, size = 'l'}) {
  const componentStyle = StyleSheet.create({
    itemContainer: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    itemText: {
        fontSize: fontSizes[size]
    },
    itemBar: {
      height: 4,
      width: 10,
      backgroundColor: Colors.yellow,
      marginRight: 10,
      bottom: 0,
    },
  });

  return (
    <View style={componentStyle.itemContainer}>
      <View style={componentStyle.itemBar} />
      <Text style={componentStyle.itemText}>{text}</Text>
    </View>
  );
}

export default ListItem;
