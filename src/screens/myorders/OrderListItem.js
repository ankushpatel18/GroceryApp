import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {moderateScale} from '../../utils/scale';

export default OrderListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.header}>Order Details</Text>
      <View style = {styles.lineStyle} />
      <Text numberOfLines={1} style={styles.text}>
        {'Order Date: '+item.time_stamp}
      </Text>
      <Text numberOfLines={1} style={styles.text}>
        {'Order Address: '+item.address}
      </Text>
      <Text numberOfLines={1} style={styles.text}>
      {'Product Title: '+item.title}
      </Text>
      <Text numberOfLines={1} style={styles.text}>
      {'Product Author: '+item.author}
      </Text>
      <Text numberOfLines={1} style={styles.text}>
      {'Product Price: $'+ item.price}
      </Text>
      <Text numberOfLines={1} style={styles.text}>
      {'Product Quantity: '+ item.quantity}
      </Text>
      <Text numberOfLines={1} style={styles.text}>
        {'Total Amount: '+item.totalAmount}
      </Text>
      <Text numberOfLines={1} style={item.status == 'false'?styles.statusFailure:styles.statusSuccess}>
        {item.status=='false'?' Transaction was unsuccessfull ':' Transaction was successfull '}
      </Text>
      <View style = {styles.lineStyle} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFFFFF',
    margin: moderateScale(10),
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  statusSuccess: {
    backgroundColor: '#00ff00',
    fontSize: moderateScale(16),
    marginStart : moderateScale(10),
    marginEnd : moderateScale(10),
    color: 'black'
  },
  statusFailure: {
    flex:1,
    fontSize: moderateScale(16),
    backgroundColor: '#ff0000',
    marginStart : moderateScale(10),
    marginEnd : moderateScale(10),
    color: 'black'
  },
  thumbnail: {
    width: '100%',
    height: '30%',
    borderTopRightRadius : 5,
    borderTopLeftRadius: 5
  },
  text: {
    fontSize: moderateScale(16),
    marginStart : moderateScale(10),
    marginEnd : moderateScale(10),
    color: 'black'
  },
  
  header: {
    fontSize: moderateScale(20),
    marginStart : moderateScale(10),
    marginEnd : moderateScale(10),
    color: 'black'
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
}
});
