import React, { Component } from 'react';
import { Alert, Text } from 'react-native';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col, Text as NBText } from 'native-base';
import MyButton from '../components/MyButton';
import { storeOrderInfo } from '../../redux/CommonAction';
import { connect } from 'react-redux';
import LogHOC from '../../custom_components/LogHOC';
import NavigationConstants from '../../utils/NavigationConstants';
// import userDefaults from 'react-native-user-defaults'

let TAG = 'Cart';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentWillMount() {
    const { navigation } = this.props;
    const item = navigation.getParam('cart', 'None');
    this.setState({ product: item });
  }

  render() {
    var quantity = this.state.product.quantity;
    var price = this.state.product.price;

    var finalAmount = quantity * price;
    // userDefaults.set("amount", finalAmount.toString(), "group.com.company.app", (err, data) => {
    //   if(!err) console.log(data)
    //  })

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
                    title="Checkout"
                    customClick={() =>
                      this.checkOut()
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

    testOrder() {
      console.log('test....')
      const product = this.state.product;
      const OrderInfo={
        'title': product.title,
        'subtitle': product.subtitle,
        'author': product.author,
        'published': product.published,
        'publisher': product.pulisher,
        'description': product.description,
        'website': product.website,
        'price': product.price,
        'time_stamp':  '09 March',
        'location': 4,
        'address': 'test_address',
        'quantity': 2,
        'status': 'true'
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
