import React, { Component } from 'react';
import { Alert, Text } from 'react-native';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col, Text as NBText } from 'native-base';
import MyButton from '../components/MyButton';
import { storeOrderInfo } from '../../redux/CommonAction';
import { connect } from 'react-redux';
import LogHOC from '../../custom_components/LogHOC';
import NavigationConstants from '../../utils/NavigationConstants';
import DefaultPreference from 'react-native-default-preference';

let TAG = 'Cart';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      status:''
    };
  }

    componentWillMount() {
    const { navigation } = this.props;
    const item = navigation.getParam('cart', 'None');
    this.setState({ product: item });

    DefaultPreference.get('status').then(function(value) {{
      currentComponent.setState({ status: value })
      {currentComponent.props.navigation.pop()}
    }
    });
  }


  render() {
      var quantity = this.state.product.quantity;
      var price = this.state.product.price;
      
      var finalAmount = quantity * price;
      DefaultPreference.set('amount', finalAmount.toString()).then(function() {console.log('done')});


    return(
      <Container style={{ backgroundColor: 'white' }}>
        <Content>
          <View style={{ backgroundColor: '#fdfdfd', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, alignItems: 'center' }}>

            <Grid>
              <Col>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>Price:</Text>
                </View>
              </Col>
              <Col>
                <Text style={{ fontSize: 18 }}>${this.state.product.price}</Text>
              </Col>
            </Grid>


            <Grid>
              <Col>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>Quantity:</Text>
                </View>
              </Col>
              <Col>
                <Text style={{ fontSize: 18 }}>{this.state.product.quantity}</Text>
              </Col>
            </Grid>

            <Grid>
              <Col>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>Amount:</Text>
                </View>
              </Col>
              <Col>
                <Text style={{ fontSize: 18 }}>${finalAmount}</Text>
              </Col>
            </Grid>

            <Grid style={{ marginTop: 15 }}>
              <Col size={1}>
              <MyButton
                    title="Delivery address"
                    customClick={() =>
                      this.showAddressScreen()
                    }
                  />
                  <MyButton
                    title="Test Add to Order"
                    customClick={() =>
                      this.testOrder()
                    }
                  />

              </Col>
            </Grid>

          </View>
        </Content>
      </Container>
    );
  }

  checkOut() {
    this.props.navigation.navigate(NavigationConstants.PAYMENT_DEMO)
    }

    showAddressScreen() {
      this.props.navigation.navigate(NavigationConstants.DELIVERY_ADDRESS)
    }
    
    testOrder() {
      console.log('test....')
      const product = this.state.product;
      const finalAmount = this.state.product.quantity * this.state.product.price;
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
        'status': this.state.status,
        'totalAmount': finalAmount
}
      this.props.saveOrderStatus(OrderInfo);
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

const MyComponent = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default LogHOC(MyComponent, TAG);
