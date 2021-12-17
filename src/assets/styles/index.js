import {StyleSheet} from 'react-native';
import Colors from '../Colors';
import {fontSizes} from '../constants';

export default StyleSheet.create({
  mainTitle: {
    color: Colors.yellow,
    fontSize: fontSizes.xxl,
    marginBottom: 5,
  },
  yellowBar: {
    height: 2,
    width: 150,
    backgroundColor: Colors.yellow,
    marginBottom: 15,
  },
  subTitle: {
    color: 'white',
    fontSize: fontSizes.xl,
  },
  drawerStyle: {
    backgroundColor: Colors.black,
  },
  drawerItemStyle: {},
  drawerLabelStyle: {
    color: Colors.yellow,
  },
});
