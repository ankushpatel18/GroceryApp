
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Style from './style';
import LogHOC from '../../custom_components/LogHOC'

let TAG = 'MyOrdersListContainer';
class MyOrdersListContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Style.centerContainer}>
                <Text>List of previous successful orders will be shown here</Text>
            </View>
        );
    }
}

const MyComponent = connect(null, null)(MyOrdersListContainer)
export default LogHOC(MyComponent, TAG);