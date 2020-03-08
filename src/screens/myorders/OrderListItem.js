import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {moderateScale} from '../../utils/scale';

export default OrderListItem = ({item}) => {
  return (
    <View style={item.status == 'true'?styles.container:styles.errorContainer}>
      <Image
        source={{uri: item.image_url}}
        style={styles.thumbnail}
        resizeMode="center"></Image>
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
      <Text numberOfLines={1} style={styles.author}>
        {item.author}
      </Text>
      <Text numberOfLines={1} style={styles.price}>
        ${item.price}
      </Text>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#00FF00',
    margin: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  
  errorContainer: {
    flex:1,
    backgroundColor: '#ff0000',
    margin: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  thumbnail: {
    width: '100%',
    height: moderateScale(100),
    borderTopRightRadius : moderateScale(5),
    borderTopLeftRadius: moderateScale(5)
  },
  title: {
    fontSize: moderateScale(16),
    marginStart : moderateScale(10),
    marginEnd : moderateScale(10),
    color: 'black'
  },
  author: {
    fontSize: moderateScale(12),
    marginStart : moderateScale(10),
    marginEnd : moderateScale(10),
    color: 'black'
  },
  price: {
    fontSize: moderateScale(16),
    marginStart : moderateScale(10),
    marginEnd : moderateScale(10),
    color: 'black'
  }
});
