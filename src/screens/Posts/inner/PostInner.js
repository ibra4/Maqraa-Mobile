import React from 'react';
import {Image, ScrollView, Text} from 'react-native';
import styles from '../../../assets/styles';

function PostInner({data}) {
  return (
    <ScrollView>
      <Image source={{uri: data.image}} style={{width: '100%', height: 200, marginBottom: 10}} />
      <Text style={[styles.subTitle, {marginBottom: 10}]}>{data.title}</Text>
      <Text>{data.description}</Text>
    </ScrollView>
  );
}

export default PostInner;
