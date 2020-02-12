import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {connect} from 'react-redux';
import Style from './style';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import RNLocation from 'react-native-location';
import {saveDeliveryLocation} from './LocationPickerActions';

let TAG = 'LocationPickerContainer';
class LocationPickerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 22.7196,
      longitude: 75.8333,
      error: null,
    };
  }

  componentDidMount() {
    RNLocation.requestPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'fine', // or 'fine'
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    }).then(granted => {
      if (granted) {
        this.getCurrentLocation();
      }
    });
  }

  //get latestLocation of device,  LOCATION permission must be granted
  getCurrentLocation() {
    RNLocation.configure({distanceFilter: null});
    RNLocation.getLatestLocation({timeout: 60000}).then(latestLocation => {
      // Use the location here
      this.setState({
        latitude: latestLocation.latitude,
        longitude: latestLocation.longitude,
      });
    });
  }

  render() {
    return (
      <View style={Style.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={Style.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            draggable
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
            onDragEnd={e => {
              this.setState({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          />
        </MapView>
        <Button
          title="Save location"
          onPress={() => {
            //Save latitude and longitude in reducer and then go back
            this.props.saveDeliveryLocation(
              this.state.latitude,
              this.state.longitude,
            ),
              this.props.navigation.goBack()
          }}
        />
      </View>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    saveDeliveryLocation: (latitude, longitude) => {
      dispatch(saveDeliveryLocation(latitude, longitude));
    },
  };
};
export default connect(null, mapDispatchToProps)(LocationPickerContainer);
