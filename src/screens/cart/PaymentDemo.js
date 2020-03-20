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
    console.log(TAG+ ' componentDidUpdate called')
    let currentComponent = this;
    DefaultPreference.get('status').then(function(value) {{
      currentComponent.setState({ status: value })
      console.log(TAG+ 'status '+currentComponent.state.status)
      // if(currentComponent.state.status != '') {
      //   {

      //   }
      // }
    }
    }); 
  }

  componentDidMount() {
    console.log(TAG+ ' componentDidMount called')
  }

  // componentWillMount() {
  //   let currentComponent = this;
  //   DefaultPreference.get('status').then(function(value) {{
  //     currentComponent.setState({ status: value })
  //     if(this.state.status != '') {
  //       {currentComponent.props.navigation.pop()
  //       }
  //     }
  //   }
  //   });
  // }

  addOrder(orderStatus) {
    console.log('add order....itemInfo: '+JSON.stringify(this.props.itemInfo)+' addressInfo : '+this.props.addressInfo);
    const product = this.props.itemInfo.product;
    const finalAmount = this.props.itemInfo.finalAmount;
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
      'address': addressInfo.Name+'\n'+addressInfo.address+'\n'+'\nPincode: '+addressInfo.address+'\nContact No: '+addressInfo.number,
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
      this.addOrder(true);
      alert(`Transaction Successful \n ${data}`);
    }else{
      this.setState({status : false})
      this.addOrder(false);
      alert(`Transaction Failed \n ${data}`);
    }
    
  }

  _handleOkPress(status){
   if(status==='success'){
    this.props.navigation.navigate(NavigationConstants.HOME_NAVIGATOR);
   }else{
    console.log(TAG+ 'alert dismiss');
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
