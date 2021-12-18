import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../assets/Colors';
import {fontSizes} from '../../assets/constants';

const PostItem = ({post}) => {
  const navigation = useNavigation();
  return (
    <View style={componentStyle.postItem}>
      <Image source={{uri: post.image}} style={componentStyle.postImage} />
      <Text style={componentStyle.postTitle}>{post.title}</Text>
      <Text>{post.brief}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SinglePost', {state: {postId: post.id}})}>
        <Text style={componentStyle.readMore}>{'إقرأ المزيد >>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

function Posts({posts}) {
  return (
    <ScrollView>
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </ScrollView>
  );
}

export default Posts;

const componentStyle = StyleSheet.create({
  postItem: {
    backgroundColor: Colors.black,
    padding: 20,
    borderRadius: 5,
    marginBottom: 15,
  },
  postTitle: {
    fontSize: fontSizes.l,
    color: Colors.yellow,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  readMore: {
    textAlign: 'right',
    color: Colors.yellow,
    padding: 10,
  },
});
