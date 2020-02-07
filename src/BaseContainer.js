import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';

import _ from 'lodash';

import {
  changeInternetState,
} from './redux/CommonAction';
import AppContainer from './AppNavigation';
import Log from './utils/Logger';


const TAG_BASE_CONTAINER = 'BaseContainer';

class BaseContainer extends Component {

  constructor(props) {
    super(props);
    this.internetSubscription = undefined;
    this.state = {
      showPriorityEventNotification: false
    };
  }



  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer
          ref={nav => this.navigator = nav}
          // onNavigationStateChange={this._onNavigationStateChange}
           >
        </AppContainer>
       
      </View >
    );
  }

 

  componentDidUpdate(prevProps) {
  }

  componentWillUnmount() {
    if (this.internetSubscription) {
      this.internetSubscription();
    }
  }

  

  _handleInternetConnection = state => {
    const internetState = {
      isInternetReachable: state.isInternetReachable,
      isConnected: state.isConnected,
    };
    this.props.updateInternetState(internetState);
    if (!(internetState.isInternetReachable && internetState.isConnected ) && internetState.isInternetReachable != undefined) {
      Log.i(TAG_BASE_CONTAINER, `No internet`);

    }
  };
}

function mapStateToProps(state) {
  const { commonReducer } = state;
  return {
    ...commonReducer
    };
}

function mapDispatchToProps(dispatch) {
  return {
    
    updateInternetState: internetState => {
      dispatch(changeInternetState(internetState));
    }
  };
}

const MyComponent = connect(mapStateToProps, mapDispatchToProps)(BaseContainer);
export default (MyComponent)