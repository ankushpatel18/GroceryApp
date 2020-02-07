import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';

export default function LogHOC(MyComponent, tag) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                ref: undefined,
                tag: tag
            };
        }
        render() {
            return (
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <MyComponent ref={(comp) => this.ref = comp} {...this.props} />
                </View>);
        }

        componentDidMount() {
            console.log("This is " + this.state.tag)
            // console.log("test>>" + this.ref.state.text);
            // this.ref._testmethod();
        }
    }
}