import React, { Component } from 'react';
import Payment from 'react-native-payment_lib';
import DefaultPreference from 'react-native-default-preference';

export default class PaymentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { status: ''}
  }

  componentWillMount() {
    let currentComponent = this;
    DefaultPreference.get('status').then(function(value) {{
      currentComponent.setState({ status: value })
      if(this.state.status != '') {
        {currentComponent.props.navigation.pop()}
      }
    }
    });
  }

  render() {
    return (
        <Payment/>
    );
  }
}
