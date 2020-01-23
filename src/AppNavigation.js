import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import AppDrawer from './components/AppDrawer';


// Application routes...
import actualDimensions from './utils/DeviceDimension';

import LoginContainer from './screens/login/LoginContainer';
import ProductListContainer from './screens/home/ProductListContainer';
import ProductDetailsContainer from './screens/home/ProductListContainer';
import MyOrderListContainer from './screens/myorders/MyOrdersListContainer';

//Stack navigator will be used for product details, address selection, payment and order confirmation flow 
const ProductStack = createStackNavigator({
  ProductListScreen: {
    screen: ProductListContainer
    },
  ProductDetailsScreen: {
    screen: ProductDetailsContainer
    }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      header: null
    })
  })


//Left navigation drawer screens will be added here  
const AppDrawerNav = createDrawerNavigator({
  DashboardScreen: {
    screen: ProductStack
  },
  MyOrdersScreen : {
    screen: MyOrderListContainer
  }
}, {
    drawerPosition: 'left',
    contentComponent: props => <AppDrawer {...props} />,
    drawerWidth: actualDimensions.width * 0.6,
    drawerType : 'slide',
  });

const AppNavigator = createSwitchNavigator({
  AppStack: {
    screen: AppDrawerNav
  },
  LoginScreen:{
    screen: LoginContainer,
    navigationOptions: { header: null }
  }
});

export default createAppContainer(AppNavigator);