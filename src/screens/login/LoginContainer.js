import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';

import NavigationScreens from '../../utils/NavigationConstants';
import { authenticateUser } from './LoginActions';
import Style from './style';
import NavigationConstants from '../../utils/NavigationConstants';
import LogHOC from '../../custom_components/LogHOC';

let TAG = 'LoginContainer';
class LoginContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentDidUpdate(prevProps) {
    if (this.props.userAuthenticated) {
      this.props.navigation.navigate(NavigationScreens.HOME_NAVIGATOR);
    }
  }

  render() {
    console.log('rendering login called');
    return (
      <View style={Style.centerContainer}>
        <Button
          buttonStyle={Style.primareButton}
          title="Login Now"
          onPress={() =>
            this.props.navigation.navigate(NavigationConstants.HOME_NAVIGATOR)
          }
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
export default LogHOC(MyComponent, TAG);
