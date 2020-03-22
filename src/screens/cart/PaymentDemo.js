import React, { Component } from 'react';
import {Alert} from 'react-native';
import Payment from 'react-native-payment_lib';
import DefaultPreference from 'react-native-default-preference';
import { View, Text } from 'native-base';
import { storeOrderInfo } from '../../redux/CommonAction';
import { connect } from 'react-redux';
import NavigationConstants from '../../utils/NavigationConstants';
import LogHOC from '../../custom_components/LogHOC';
const TAG = 'PaymentDemo';
class PaymentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { status: ''}
  }


  componentDidUpdate() {
    console.log(TAG+ ' componentDidUpdate called productInfo: '+JSON.stringify(this.props.productInfo))
  }

  componentDidMount() {
    console.log(TAG+ ' componentDidMount called productInfo: '+JSON.stringify(this.props.productInfo))
  }

  addOrder(orderStatus) {
    console.log('add order....productInfo: '+JSON.stringify(this.props.productInfo)+' addressInfo : '+JSON.stringify(this.props.addressInfo));
    const product = this.props.productInfo;
    const finalAmount = this.props.productInfo.finalAmount;
    const addressInfo = this.props.addressInfo;
    //{"Name": "T", "address": "Test", "number": 1234, "pincode": 123456}
    const status = this.state.status;
    //const orderStatus = status == 'Approved'? true :false;
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
      'address': addressInfo.Name+'\n'+addressInfo.address+'\n'+'\nPincode: '+addressInfo.pincode+'\nContact No: '+addressInfo.number,
      'quantity': product.quantity,
      'status': orderStatus,
      'totalAmount': finalAmount,
}
    this.props.saveOrderStatus(OrderInfo);
    }

  render() {
    return (

        <Payment onTransactionStateChange={this._onTransactionStateChange}/>
    );
  }

  
  /**
   * Navigation change listener callback to handle navigation state changes.
   */
  _onTransactionStateChange = (status, data) => {
    console.log(TAG+ ' _onTransactionStateChange status: '+status+' data: '+data);
    if(status==='success'){
      this.setState({status : true})
      this.addOrder('true');
      this._showErrorAlert(status,'Payment was successfull',true);
      //alert(`Transaction Successful \n ${data}`);
    }else{
      this.setState({status : false})
      this.addOrder('false');
      //alert(`Transaction Failed \n ${data}`);
      this._showErrorAlert(status,'Payment was failed', false);
    }
    
  }

  _handleOkPress(status){
    console.log(TAG+ ' _handleOkPress status : '+status);
   if(status){
    console.log(TAG+ ' navigate to Home');
    this.props.navigation.navigate(NavigationConstants.PRODUCT_LIST);
   }else{
    console.log(TAG+ 'alert dismiss payment failure');
   }
  }

  _showErrorAlert(title, error,status) {
    Alert.alert(
      title,
      error,
      [
        { text: 'OK', onPress: () => { this._handleOkPress(status) } },
      ],
      { cancelable: false }
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
