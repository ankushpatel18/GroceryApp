import React, { Component } from 'react';
import { Image, Text,StyleSheet} from 'react-native';
import { View, Container, Content, Icon, Grid, Col, Text as NBText, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import MyText from '../components/MyText';
import MyButton from '../../screens/components/MyButton';
import LogHOC from '../../custom_components/LogHOC';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Payment from 'react-native-payment_library_test1';

let TAG = 'Cart';

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {},
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
                <TouchableOpacity onPress={this.checkout.bind(this)}>
                <MyButton
                    title="Checkout"
                 />
                </TouchableOpacity>
              </Col>
            </Grid>

          </View>
        </Content>
      </Container>
    );
  }

  checkout() {
   <Payment />
  }
}

const MyComponent = connect(null, null)(Cart)
export default LogHOC(MyComponent, TAG);

const styles = StyleSheet.create({

  title: {
    fontFamily: 'Roboto',
    fontWeight: '100'
  },
 
});