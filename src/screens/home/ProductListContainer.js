import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet,Button } from 'react-native';
import { connect } from 'react-redux';
import NavigationConstants from '../../utils/NavigationConstants';
import { fetchProductsFromServer } from './ProudctListActions';
import { FlatList } from 'react-native-gesture-handler';
import MyButton from './../components/MyButton';
import ProductListItem from '../../components/ProductListItem';
import Icon from 'react-native-vector-icons/Ionicons';

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: [] };
  }

  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Icon
        style={{ paddingLeft: 10 }}
        onPress={() => navigation.openDrawer()}
        name="md-menu"
        size={30}
      />
    ),
  })

  async componentDidMount() {
    console.log('componentDidMount Called');
    this.props.fetchLatestProducts();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    itemSelected = (selectedItem) => {
      this.props.navigation.navigate(NavigationConstants.PRODUCT_DETAILS_SCREEN, {  
        selectedItem: selectedItem,  
    })  
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          style={{ alignSelf: 'stretch' }}
          data={this.props.productsList}
          renderItem={ProductListItem}
          keyExtractor={item => item.product_id}
          numColumns={2}
        />
        {/* <MyButton
          title="Pick a location"
          customClick={() =>
            this.props.navigation.navigate(NavigationConstants.LOCATION_PICKER)
          }
        /> */}
      </View>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.state.dataSource.length == 0) {
      console.log('Total products found ' + this.props.productsList.length);
      this.setState({
        isLoading: false,
        dataSource: this.props.productsList,
      });
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLatestProducts: () => {
      dispatch(fetchProductsFromServer());
    },
  };
};
const mapStateToProps = state => {
  const { productListReducer } = state;
  return {
    ...productListReducer,
  };
};
const MyComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListContainer);

export default MyComponent;
