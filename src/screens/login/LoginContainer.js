import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
  } from 'react-native';
  
import NavigationScreens from '../../utils/NavigationConstants';
import {   authenticateUser } from './LoginActions'


const TAG_LOGIN_CONTAINER = 'LoginContainer'
class LoginContainer extends Component {
    constructor(props) {
        super(props);
       
    }

     componentDidUpdate(prevProps) {
        if (this.props.userAuthenticated) {
            //navigate to dashboard screen once Login
            this.props.navigation.navigate(NavigationScreens.DASHBOARD)
        }
    
    }

    render() {
        return (
           <Text>Login screen will be shown here</Text>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
    
       
        authenticateUser: (payload) => {
            dispatch(authenticateUser(payload))
        }   
    }
}

const mapStateToProps = (state) => {

    const { LoginReducer, commonReducer } = state;
    return {
        ...LoginReducer, ...commonReducer
    }
}

const MyComponent = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
export default MyComponent;