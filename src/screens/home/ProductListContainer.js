import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import NavigationConstants from '../../utils/NavigationConstants';
import ProductRepo from '../../database/ProductRepo';

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // sample to query
    // const productRepo = await ProductRepo.build();
    // var product1 = {
    //   "product_id": "9781593275846",
    //   "title": "Eloquent JavaScript, Second Edition",
    //   "subtitle": "A Modern Introduction to Programming",
    //   "author": "Marijn Haverbeke",
    //   "published": "2014-12-14T00:00:00.000Z",
    //   "publisher": "No Starch Press",
    //   "price": 472,
    //   "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    //   "website": "http://eloquentjavascript.net/",
    //   "image_url": ""
    // };
    // await productRepo.deleteProducts();
    // await productRepo.saveProduct(product1);
    // const products = await productRepo.getProducts();
    // products.forEach(element => {
    //   console.log('element ' + element);
    //   console.log('element ' + element.title);
    // });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>List of e-commorce products will be shown here</Text>
        <Button
          title="Pick a location"
          onPress={() =>
            this.props.navigation.navigate(NavigationConstants.LOCATION_PICKER)
          } />

      </View>
    );
  }
}

const MyComponent = connect(null, null)(ProductListContainer);
export default MyComponent;
