import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';

// Application routes...

import LoginContainer from './screens/login/LoginContainer';
import ProductListContainer from './screens/home/ProductListContainer';
import ProductDetailsContainer from './screens/home/ProductListContainer';
import MyOrderListContainer from './screens/myorders/MyOrdersListContainer';
import actualDimensions from './utils/DeviceDimension';

const ProductListStackNavigator = createStackNavigator(
  {
    DashboardNavigator: ProductListContainer,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        title: 'Listing',
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
    // contentComponent: props => <AppDrawer {...props} />,
    drawerWidth: actualDimensions.width * 0.6,
    drawerType: 'slide',
    minSwipeDistance: 20,
  },
);

const AppSwitchNavigator = createSwitchNavigator({
  Login: {screen: LoginContainer},
  HomeNavigator: {screen: AppDrawerNavigator},
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
