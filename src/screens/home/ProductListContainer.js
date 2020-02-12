import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import NavigationConstants from '../../utils/NavigationConstants';
// import ProductRepo from '../../database/ProductRepo';

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    //sample to query
    // const productRepo = await ProductRepo.build();
    // var product1 = {
    //     id: 1,
    //     title: 'abc',
    //     artist: 'abc',
    //     image: 'abc,
    //     thumbnail_image: 'efg',
    //     price:200
    // };
    // await productRepo.deleteProducts();
    // await productRepo.saveProduct(product1);
    // const products = await productRepo.getProducts();
    // products.forEach(element => {
    //     console.log('element ' + element);
    //     console.log('element ' + element.name);
    // });
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>List of e-commorce products will be shown here</Text>
        <Button
        title = "Pick a location"
          onPress={() =>
            this.props.navigation.navigate(NavigationConstants.LOCATION_PICKER)
          }/>
          
      </View>
    );
  }
}

const MyComponent = connect(null, null)(ProductListContainer);
export default MyComponent;
