import React, {Component} from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';

import { DrawerItemContainer } from '../components/DrawerItemContainer';
import NavigationScreens from '../utils/NavigationConstants';
import { moderateScale } from '../utils/scale';

class AppDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: true
        }
    }

    _changeSwitchValue = () => {
        this.setState({
            sound: !this.state.sound
        })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <DrawerItemContainer
                    iconName = 'settings'
                    onPress={() => this.props.navigation.navigate(NavigationScreens.DASHBOARD, { from: NavigationScreens.APPLICATION_STACK })}
                    itemTitle = "Home"
                     />
                <DrawerItemContainer
                    iconName = 'cloud-upload'
                    disabled = {this.props.uploadingLogs}
                    itemTitle = "My Orders"
                    onPress={() => this.props.navigation.navigate(NavigationScreens.MY_ORDERS_LIST, { from: NavigationScreens.APPLICATION_STACK })}

                  />
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    title: {
        fontSize: moderateScale(16),
        fontWeight: '500'
    }
})

const mapStateToProps = (state) => {
    const {commonReducer} = state;
    return {
        ...commonReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        exportLogs: () => {
            dispatch(exportLogsToFile(true))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (AppDrawer);