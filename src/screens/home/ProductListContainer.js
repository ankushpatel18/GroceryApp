import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import NavigationConstants from '../../utils/NavigationConstants';
import MyButton from './../components/MyButton';
import { ProductList } from '../components/ProductList';
impoty
import { fetchProductsFromServer } from './ProudctListActions';
import Log from '../../utils/Logger';


class ProductListContainer extends Component {

  TAG = "ProductListContainer"
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  async componentDidMount() {
    // this.props.fetchLatestProducts();
    return fetch('https://us-central1-test-app-6ef40.cloudfunctions.net/app/products')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('API response')
        console.log((responseJson))
        Log.i(this.TAG, 'api response' + (responseJson))

        this.setState({
          isLoading: false,
          dataSource: responseJson.products,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ProductList dataSource={this.state.dataSource} />
        <MyButton
          title="Pick a location"
          customClick={() =>
            this.props.navigation.navigate(NavigationConstants.LOCATION_PICKER)
          } />

      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    fetchLatestProducts: () => {
      dispatch(fetchProductsFromServer());
    }
  }
}

const MyComponent = connect(null, mapDispatchToProps)(ProductListContainer);
export default MyComponent;
