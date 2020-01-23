
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';


class MyOrdersListContainer extends Component {

    constructor (props) {
        super (props);
    }

    render() {
        return (<View style ={flexDirection= 'row',
        alignItems= 'center'} >
            <Text>List of previous successful orders will be shown here</Text>
            </View>
        );
    }
}

const MyComponent = connect(null, null)(MyOrdersListContainer)
export default MyComponent;