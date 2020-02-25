import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import MyButton from '../../screens/components/MyButton';
import MyText from '../../screens/components/MyText';
import NavigationScreens from '../../utils/NavigationConstants';
import { authenticateUser } from './LoginActions';
import Style from './style';
import NavigationConstants from '../../utils/NavigationConstants';
import LogHOC from '../../custom_components/LogHOC';
import OauthHelper from './oauth/OauthHelper';

let TAG = 'LoginContainer';
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldUserLogin: false
    };
  }

  componentDidUpdate() {
    if (this.state.shouldUserLogin) {
      this.props.navigation.navigate(NavigationScreens.HOME_NAVIGATOR);
    }

  }

  _loginNow() {
  }

  async _loginGoogle() {
    const helper = await OauthHelper.build();
    helper.authenticateUserViaGoogle().then(resp => {
      console.log('Should User Login' + resp)
      this.setState({ shouldUserLogin: true });
    })
      .catch(err => console.log('There was an error' + err.message));

  }

  async _loginFacebook() {
    const helper = await OauthHelper.build();
    helper.authenticateUserViaFacebook().then(resp => {
      console.log('Should User Login' + resp)
      this.setState({ shouldUserLogin: true });
    })
      .catch(err => console.log('There was an error' + err.message));
  }

  render() {
    console.log('rendering login called');
    return (
      <View style={Style.centerContainer}>

        <MyButton
          title="Login Now"
          customClick={() =>
            this.props.navigation.navigate(NavigationConstants.HOME_NAVIGATOR)
          }
        />
        <MyButton
          title="Google Login"
          customClick={() =>
            this._loginGoogle()
          } />

        <MyButton
          title="Facebook Login"
          customClick={() =>
            this._loginFacebook()
          } />
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
