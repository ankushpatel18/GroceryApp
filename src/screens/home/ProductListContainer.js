
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';


class ProductListContainer extends Component {

    constructor (props) {
        super (props);
    }

    render() {
        return (
            <Text>List of e-commorce products will be shown here</Text>
        );
    }
}


const MyComponent = connect(null, null)(ProductListContainer)
export default MyComponent;