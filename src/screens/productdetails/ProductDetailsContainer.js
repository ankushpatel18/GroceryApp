
import React, { Component } from 'react';

import { connect } from 'react-redux';
import MyText from '../components/MyText';
import LogHOC from '../../custom_components/LogHOC'
let TAG = 'ProductDetailsContainer';
class ProductDetailsContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MyText text="Details of e-commorce products will be shown here"></MyText>
        );
    }
}

const MyComponent = connect(null, null)(ProductDetailsContainer)
export default LogHOC(MyComponent, TAG);