import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';

import NavigationScreens from '../../utils/NavigationConstants';
import { authenticateUser } from './LoginActions';
import Style from './style';
import NavigationConstants from '../../utils/NavigationConstants';
import TouchID from 'react-native-touch-id';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userAuthenticated) {
      //navigate to dashboard screen once Login
      this.props.navigation.navigate(NavigationScreens.DASHBOARD);
    }
  }

  _onTouchIdSelection() {
    TouchID.authenticate('Authenticate with Touch ID')
      .then(success => {
        // Success code
        this.props.navigation.navigate(NavigationConstants.HOME_NAVIGATOR)
      })
      .catch(error => {
        // Failure code
        Alert.alert('Failure');
      });

  }

  render() {
    return (
      <View style={Style.centerContainer}>
        <Text>Login screen will be shown here</Text>
        <Button
          buttonStyle={Style.primareButton}
          title="Login Now"
          onPress={() =>
            this.props.navigation.navigate(NavigationConstants.HOME_NAVIGATOR)
          }
        />
        <Button
          buttonStyle={Style.primareButton}
          title="Authenticate with Touch ID"
          onPress={() => this._onTouchIdSelection()}
        />
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: payload => {
      dispatch(authenticateUser(payload));
    },
  };
};

const mapStateToProps = state => {
  const { LoginReducer, commonReducer } = state;
  return {
    ...LoginReducer,
    ...commonReducer,
  };
};

const MyComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
export default MyComponent;
