
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Style from './style';
import OrderListItem from './OrderListItem';
import { FlatList } from 'react-native-gesture-handler';
import OrdersRepo from '../../database/OrdersRepo';
import Log from '../../utils/Logger';
import _ from 'lodash';
let TAG = 'MyOrdersListContainer';
export default class MyOrdersListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { orderList: [] };
    }

    componentDidMount(){
      this.getOrders(); 
    }



    getOrders = async() => {
     
      const orderRepo = await OrdersRepo.build();
      const data = await orderRepo.getOrders();
      this.setState({
        orderList: data
      });
      return data;
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
              style={{ alignSelf: 'stretch' }}
              data={this.state.orderList}
              renderItem={OrderListItem}
              keyExtractor={item => item.id}
              numColumns={1}
            />
          </View>
        );
    }
}
// const MyComponent = connect(null, null)(MyOrdersListContainer)
// export default (MyComponent);