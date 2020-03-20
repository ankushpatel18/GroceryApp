import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import MyButton from '../../screens/components/MyButton';
import MyText from '../../screens/components/MyText';
import NavigationScreens from '../../utils/NavigationConstants';
import {authenticateUser} from './LoginActions';
import Style from './style';
import NavigationConstants from '../../utils/NavigationConstants';
import LogHOC from '../../custom_components/LogHOC';
import OauthHelper from './oauth/OauthHelper';

let TAG = 'LoginContainer';
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldUserLogin: false,
    };
  }

  componentDidUpdate() {
    if (this.state.shouldUserLogin) {
      this.props.navigation.navigate(NavigationScreens.HOME_NAVIGATOR);
    }
  }

  _loginNow() {}

  async _loginGoogle() {
    const helper = await OauthHelper.build();
    helper
      .authenticateUserViaGoogle()
      .then(resp => {
        console.log('Should User Login' + resp);
        this.setState({shouldUserLogin: true});
      })
      .catch(err => console.log('There was an error' + err.message));
  }

 
  async _loginFacebook() {
    // const helper = await OauthHelper.build();
    // helper
    //   .authenticateUserViaFacebook()
    //   .then(resp => {
    //     console.log('Should User Login' + resp);
    //     this.setState({shouldUserLogin: true});
    //   })
    //   .catch(err => console.log('There was an error' + err.message));
    this.props.navigation.navigate(NavigationConstants.HOME_NAVIGATOR);
  }

  render() {
    console.log('rendering login called');
    return (
      <View style={Style.centerContainer}>
          <Image
            style={{width:100, height:100, alignSelf:'center'}}
            source={require('../../assets/app_logo.png')}
          />

        <TouchableOpacity
          style={[styles.btnParent, {backgroundColor: '#4267B2'}]}
          onPress={() => this._loginFacebook()}>
          <Image
            style={styles.btnImageStyle}
            source={require('../../assets/login_facebook_logo.png')}
          />
          <Text style={{color: 'white'}}>Login with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnParent, {backgroundColor: '#FFFFFF'}]}
          onPress={() => this._loginGoogle()}>
          <Image
            style={styles.btnImageStyle}
            source={require('../../assets/login_google_logo.png')}
          />
          <Text style={{color: 'gray'}}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnImageStyle: {
    height: 25,
    width: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  btnParent: {
    alignItems: 'center',
    margin: 15,
    height: 45,
    width: 200,
    shadowRadius: 10,
    elevation: 10,
    flexDirection: 'row',
  },
});
const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: payload => {
      dispatch(authenticateUser(payload));
    },
  };
};

const mapStateToProps = state => {
  const {LoginReducer, commonReducer} = state;
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
