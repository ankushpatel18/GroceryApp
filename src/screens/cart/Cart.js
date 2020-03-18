import React, { Component } from 'react';
import { Alert, Text } from 'react-native';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col, Text as NBText } from 'native-base';
import MyButton from '../components/MyButton';
import NavigationConstants from '../../utils/NavigationConstants';
import DefaultPreference from 'react-native-default-preference';
import { storeItemInfo } from '../../redux/CommonAction';
import { connect } from 'react-redux';

let TAG = 'Cart';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      status:'',
      finalAmount: 0,
    };
  }

    componentWillMount() {
    const { navigation } = this.props;
    const item = navigation.getParam('cart', 'None');
    this.setState({ product: item });

    DefaultPreference.get('status').then(function(value) {{
      currentComponent.setState({ status: value })
      {
        currentComponent.props.navigation.pop()
      }
    }
    });
  }


  render() {
      var quantity = this.state.product.quantity;
      var price = this.state.product.price;
      var finalAmount = quantity * price;
      this.state.finalAmount = finalAmount;
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
              
              </Col>
            </Grid>

          </View>
        </Content>
      </Container>
    );
  }

    showAddressScreen() {
      const item = {
        product : this.state.product,
        finalAmount: this.state.finalAmount
      }
      this.props.saveItemInfo(item)
      this.props.navigation.navigate(NavigationConstants.DELIVERY_ADDRESS)
    }
    
   
}

const mapDispatchToProps = dispatch => {
  return {
    saveItemInfo: itemInfo => {
      dispatch(storeItemInfo(itemInfo));
    },
  };
};


export default connect (null, mapDispatchToProps)(Cart);
