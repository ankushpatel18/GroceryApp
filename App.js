import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import * as COLORS from './src/utils/colors';
import BaseContainer from './src/BaseContainer';


export default class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      store: store()
    };
    console.disableYellowBox = true;
    this.initialSetup()
  }

  /*
    * Perform App initial setup
  */
  initialSetup = () => {
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE_COLOR }}>
          <StatusBar
            backgroundColor={COLORS.WHITE_COLOR}
            barStyle='dark-content' />
            <Text>Grocery store app</Text>
             <BaseContainer />
        </SafeAreaView>
      </Provider>
    );
  }
}