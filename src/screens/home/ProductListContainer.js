
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


class ProductListContainer extends Component {

    constructor (props) {
        super (props);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
            <Text>List of e-commorce products will be shown here</Text>
            </View>
        );
    }
}


const MyComponent = connect(null, null)(ProductListContainer)
export default MyComponent;