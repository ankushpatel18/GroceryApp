
import React, { Component } from 'react';
import { Image, Text,StyleSheet,Linking} from 'react-native';
import { View, Container, Content, Icon, Grid, Col, Text as NBText, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import MyText from '../components/MyText';
import MyButton from '../../screens/components/MyButton';
import LogHOC from '../../custom_components/LogHOC';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationConstants from '../../utils/NavigationConstants';
import { WebView } from 'react-native-webview';

let TAG = 'ProductDetailsContainer';

class ProductDetailsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {},
      quantity: 1,
    };
  }

  componentWillMount() {
    const { navigation } = this.props;  
    const item = navigation.getParam('selectedItem', 'None');  
    console.log(item);
    this.setState({ product: item });
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Content>
        <Image
        source={{uri: this.state.product.image_url}}
        style={styles.thumbnail}
        resizeMode="contain"></Image>

          <View style={{ backgroundColor: '#fdfdfd', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, alignItems: 'center' }}>
            <Grid>
            <Col>
                <View style={{ flex: 1, justifyContent: 'center'}}>
                  <Text style={{ fontSize: 18 }}>Name:</Text>
                </View>
              </Col>
              <Col size={3}>
                <Text style={{ fontSize: 18 }}>{this.state.product.title}</Text>
              </Col>
            </Grid>
            
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
              <Col size={3}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Button block icon transparent onPress={() => this.setState({ quantity: this.state.quantity > 1 ? this.state.quantity - 1 : 1 })} >
                    <Icon name='ios-remove' style={{ color: '#f05555' }} />
                  </Button>
                  <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', paddingLeft: 30, paddingRight: 30 }}>
                    <Text style={{ fontSize: 18 }}>{this.state.quantity}</Text>
                  </View>
                  <Button block icon transparent onPress={() => this.setState({ quantity: this.state.quantity + 1 })}>
                    <Icon style={{ color: '#f05555' }} name='ios-add' />
                  </Button>
                </View>
              </Col>

            </Grid>
            <Grid style={{ marginTop: 15 }}>
              <Col size={1}>
                <TouchableOpacity onPress={this.addToCart.bind(this)}>
                <MyButton
                    title="Proceed to Payment"
                 />
                </TouchableOpacity>
              </Col>
            </Grid>

            <View style={{ marginTop: 15, padding: 10, borderWidth: 1, borderRadius: 3, borderColor: 'rgba(149, 165, 166, 0.3)' }}>
              <Text style={{ marginBottom: 5 }}>Description</Text>
              <View style={{ width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10 }} />
              <NBText note>
                {this.state.product.description}
                <NBText style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.amazon.in/s/ref=nb_sb_ss_organic-pltr-v2_2_5?url=search-alias%3Daps&field-keywords=shoes+for+girls+stylish&sprefix=shoes%2Caps%2C703&crid=2IPKLE6WQ1YMH') } >View more...</NBText>

              </NBText>
            </View>
          </View>
        </Content>
      </Container>
    );
  }

  addToCart() {
    var product = this.state.product;
    product['quantity'] = this.state.quantity;
    this.props.navigation.navigate(NavigationConstants.CART, {  
        cart: this.state.product,  
    })  
  }

  showWebView() {
  var product = this.state.product;
  product['quantity'] = this.state.quantity;
  this.props.navigation.navigate(NavigationConstants.CART, {  
      cart: this.state.product,  
  })  
}
}

const MyComponent = connect(null, null)(ProductDetailsContainer)
export default LogHOC(MyComponent, TAG);

const styles = StyleSheet.create({

    thumbnail: {
      width: '100%',
      height: '100%',
      borderTopRightRadius : 5,
      borderTopLeftRadius: 5
    },
 
});
  

