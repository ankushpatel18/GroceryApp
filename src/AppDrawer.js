import React, {Component} from 'react';
import {DrawerItems} from 'react-navigation-drawer';

import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import {moderateScale} from './utils/scale';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

class AppDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: require('./assets/profile.png'),
    };
  }

  captureImage() {
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
      },
    };
    // Launch Camera:
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* Header view for navigation drawer */}
        <View style={style.headerContainer}>
          <TouchableOpacity onPress={this.captureImage.bind(this)}>
            <Image style={style.centerLogo} source={this.state.avatarSource} />
            <Text style={style.userNameText}>User name</Text>
          </TouchableOpacity>
        </View>
        {/* Items of navigation drawer added in navigator stack */}
        <DrawerItems {...this.props} />
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    padding: moderateScale(20),
    backgroundColor: 'skyblue',
  },
  centerLogo: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(100) / 2,
  },
  userNameText: {
    alignSelf: 'center',
    marginTop: moderateScale(10),
    fontSize: moderateScale(12),
  },
});

const mapStateToProps = state => {
  const {commonReducer} = state;
  return {
    ...commonReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showImagePicker: () => {
      dispatch(selectProfilePicture());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer);
