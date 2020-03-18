import React, { Component } from 'react';
import Payment from 'react-native-payment_lib';
import DefaultPreference from 'react-native-default-preference';
import { View, Text } from 'native-base';
import { storeOrderInfo } from '../../redux/CommonAction';
import { connect } from 'react-redux';
const TAG = 'PaymentDemo';
class PaymentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { status: ''}
  }

  componentDidUpdate() {
    console.log(TAG+ ' componentDidUpdate called')
    let currentComponent = this;
    DefaultPreference.get('status').then(function(value) {{
      currentComponent.setState({ status: value })
      console.log(TAG+ 'status '+this.state.status)
      if(this.state.status != '') {
        {
          this.addOrder()
        }
      }
    }
    }); 
  }

  componentWillMount() {
    let currentComponent = this;
    DefaultPreference.get('status').then(function(value) {{
      currentComponent.setState({ status: value })
      if(this.state.status != '') {
        {currentComponent.props.navigation.pop()
        }
      }
    }
    });
  }

  addOrder() {
    console.log('add order....')
    const product = this.state.itemInfo.product;
    const addressInfo = this.state.addressInfo;
    const status = this.state.status;
    const orderStatus = status == 'Aprooved'? true :false;
    console.log(TAG+'Selected product:- '+product);
    console.log(TAG+'Selected Delivery address:- '+addressInfo);
    console.log(TAG+'Payment status- '+status);
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    const timeStamp = date+'/'+month+'/'+year
    const OrderInfo={
      'title': product.title,
      'subtitle': product.subtitle,
      'author': product.author,
      'published': product.published,
      'publisher': product.pulisher,
      'description': product.description,
      'website': product.website,
      'price': product.price,
      'time_stamp':  timeStamp,
      'location': 4,
      'address': 'test_address',
      'quantity': product.quantity,
      'status': orderStatus,
      'totalAmount': this.state.itemInfo.finalAmount,
}
    this.props.saveOrderStatus(OrderInfo);
    }

  render() {
    return (

        <Payment/>
    );
  }

  
}

const mapStateToProps = state => {
  const { commonReducer } = state;
  return {
    ...commonReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveOrderStatus: (OrderInfo) => {
      dispatch(storeOrderInfo(OrderInfo));
    },
  };
};

const MyComponent = connect(mapStateToProps, mapDispatchToProps)(PaymentDemo)
export default LogHOC(MyComponent, TAG);
