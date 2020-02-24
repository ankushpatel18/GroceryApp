import React, {Component} from 'react';
import NetInfo from '@react-native-community/netinfo';

import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import _ from 'lodash';

import {changeInternetState} from './redux/CommonAction';
import AppContainer from './AppNavigation';
import Log from './utils/Logger';

const TAG_BASE_CONTAINER = 'BaseContainer';

class BaseContainer extends Component {
  constructor(props) {
    super(props);
    this.internetSubscription = undefined;
    this.state = {
      showPriorityEventNotification: false,
    };
  }

  componentDidMount() {
    this.internetSubscription = NetInfo.addEventListener(state => {
      Log.i(TAG_BASE_CONTAINER, `state.isInternetReachable = ` +state.isInternetReachable);
      Log.i(TAG_BASE_CONTAINER, `state.isConnected = ` +state.isConnected);
      const internetState = {
        isInternetReachable: state.isInternetReachable,
        isConnected: state.isConnected,
      };
      this.props.updateInternetState(internetState);
      if (
        !(internetState.isInternetReachable && internetState.isConnected) &&
        internetState.isInternetReachable != undefined ) {
        Log.i(TAG_BASE_CONTAINER, `No internet`);
      }
      else {
        Log.i(TAG_BASE_CONTAINER, `Internet connected`);
      }
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <AppContainer
          ref={nav => (this.navigator = nav)}
          // onNavigationStateChange={this._onNavigationStateChange}
        ></AppContainer>
      </View>
    );
  }

  componentWillUnmount() {
    if (this.internetSubscription) {
      this.internetSubscription();
    }
  }
}

function mapStateToProps(state) {
  const {commonReducer} = state;
  return {
    ...commonReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateInternetState: internetState => {
      dispatch(changeInternetState(internetState));
    },
  };
}

const MyComponent = connect(mapStateToProps, mapDispatchToProps)(BaseContainer);
export default MyComponent;
