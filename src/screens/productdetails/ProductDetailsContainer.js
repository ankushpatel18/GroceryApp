
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';


class ProductDetailsContainer extends Component {

    constructor (props) {
        super (props);
    }

    render() {
        return (
            <Text>Details of e-commorce products will be shown here</Text>
        );
    }
}

const MyComponent = connect(null, null)(ProductDetailsContainer)
export default MyComponent;