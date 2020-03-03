import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {moderateScale} from '../utils/scale';

export default ProductListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> this.itemSelected(item)}>
       <Image
        source={{uri: item.image_url}}
        style={styles.thumbnail}
        resizeMode="cover"></Image>
       </TouchableOpacity>
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
    width: moderateScale(10),
    flex: 0.5,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#FFFFFF',
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
    color: 'gray'
  },
  price: {
    fontSize: moderateScale(16),
    marginStart : moderateScale(10),
    marginEnd : moderateScale(10),
    color: 'black'
  }
});
