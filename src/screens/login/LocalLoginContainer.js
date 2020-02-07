import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import TouchID from 'react-native-touch-id';
import styles from './style';
import NavigationScreens from '../../utils/NavigationConstants';
import LogHOC from '../../custom_components/LogHOC';
let TAG = 'LocalLoginContainer';

class LocalLoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    shouldLogIn: false,
    isBiometerySupported: false
  }

  componentDidMount() {
    TouchID.isSupported()
      .then(biometryType => {
        console.log('biometryType:' + biometryType);
        if (biometryType === 'TouchID') {
          this.setState({ isBiometerySupported: true });
          this._showFingerPrintAuth();
        } else if (biometryType == true) {
          this.setState({ isBiometerySupported: true });
          this._showFingerPrintAuth();
        }
      })
  }

  componentDidUpdate() {
    if (this.state.shouldLogIn || !this.state.isBiometerySupported) {
      this.props.navigation.navigate(NavigationScreens.LOGIN);
    }
  }

  render() {
    return (
      <View style={styles.centerContainer}>
      </View>
    );
  }

  _showFingerPrintAuth() {
    if (this.state.isBiometerySupported) {
      this._authenticate();
    } else {
      this._showErrorAlert('UnSupported touchId', 'TouchID not supported')
    }
  }

  _authenticate() {
    return TouchID.authenticate()
      .then(success => {
        if (success) {
          this.setState({ shouldLogIn: true });
        } else {
          this._showErrorAlert('Authentication', 'Authenticated Failed');
        }
      })
      .catch(error => {
        this._showErrorAlert('Authentication Cancelled', error.message);
      });
  }

  _showErrorAlert(title, error) {
    Alert.alert(
      title,
      error,
      [
        { text: 'OK', onPress: () => { this.setState({ isBiometerySupported: false }); } },
      ],
      { cancelable: false }
    );
  }
}


export default LogHOC(LocalLoginContainer, TAG);
