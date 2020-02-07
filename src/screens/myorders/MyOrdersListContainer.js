
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Style from './style';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

let TAG = 'MyOrdersListContainer';
class MyOrdersListContainer extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={Style.mapContainer}>  
            {/* <Text>List of previous successful orders will be shown here</Text> */}
             <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={Style.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
            </View>
        );
    }
}

const MyComponent = connect(null, null)(MyOrdersListContainer)
export default LogHOC(MyComponent, TAG);