import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function DrawerHeader() {
  return (

    <View style={comonentStyle.logoContainer}>
        <Image
          source={require('../assets/images/logo_long.png')}
          style={comonentStyle.logo}
          resizeMode='contain'
        />
    </View>
    
  );
}

export default DrawerHeader;

const comonentStyle = StyleSheet.create({
    logo: {
        width: "90%",
    },
    logoContainer: {
        // backgroundColor: Colors.black,
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        height: 90
    }
})