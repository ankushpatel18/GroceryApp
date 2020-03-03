/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Alert,Text,TouchableOpacity } from 'react-native';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col, Text as NBText } from 'native-base';
import MyButton from '../../screens/components/MyButton';


export default class Cart extends Component {
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
    console.log('Checkout Clicked...');
  }
}

const styles={
  title: {
    fontFamily: 'Roboto',
    fontWeight: '100'
  }
};


