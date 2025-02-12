import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';

// Application routes...

import LoginContainer from './screens/login/LoginContainer';
import LocalLoginContainer from './screens/login/LocalLoginContainer';
import ProductListContainer from './screens/home/ProductListContainer';
import DeliveryAddressContainer from './screens/deliveryaddress/DeliveryAddressContainer';
import ProductDetailsContainer from './screens/productdetails/ProductDetailsContainer';
import MyOrderListContainer from './screens/myorders/MyOrdersListContainer';
import LocationPickerContainer from './screens/map/LocationPickerContainer';
import Cart from './screens/cart/Cart';
import PaymentDemoContainer from './screens/cart/PaymentDemo';
import actualDimensions from './utils/DeviceDimension';
import AppDrawer from './AppDrawer';

//Add all screens related to product and product details in this stack
const ProductListStackNavigator = createStackNavigator(
  {
    DashboardNavigator: ProductListContainer,
    LocationPicker: LocationPickerContainer,
    ProductDetails: ProductDetailsContainer,
    Cart: Cart,
    DeliveryAddress: DeliveryAddressContainer,
    PaymentDemo:PaymentDemoContainer,
  },
  {
  
  },
);

//My order related screens will be added in this stack
const MyOrderStackNavigator = createStackNavigator(
  {
    MyOrder: MyOrderListContainer,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            style={{paddingLeft: 10}}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  },
);

//Left navigation drawer screens will be added here
const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: ProductListStackNavigator,
    },
    MyOrders: {
      screen: MyOrderStackNavigator,
    },
  },
  {
    drawerPosition: 'left',
    contentComponent: props => <AppDrawer {...props} />,

    // contentComponent: props => <AppDrawer {...props} />,     //use this for custom navigation drawer
    drawerWidth: actualDimensions.width * 0.6,
    drawerType: 'slide',
    minSwipeDistance: 20,
  },
);

const AppSwitchNavigator = createSwitchNavigator({
  LocalLogin: {screen: LocalLoginContainer},
  LoginScreen: {screen: LoginContainer},
  HomeNavigator: {screen: AppDrawerNavigator},
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;

