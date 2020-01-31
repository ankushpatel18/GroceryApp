import React, {Component} from 'react';
import { DrawerItems } from 'react-navigation-drawer';

import {
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import { moderateScale } from './utils/scale';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';


class AppDrawer extends Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* Header view for navigation drawer */}
                <View style = {style.headerContainer}>
                    <TouchableOpacity>
                        <Image style= {style.centerLogo}   
                        source ={require('./assets/profile.png')} />        
                        <Text style={style.userNameText}>User name</Text>
                    </TouchableOpacity>
                </View>
                {/* Items of navigation drawer added in navigator stack */}
            <DrawerItems {...this.props} />
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    headerContainer : {
        alignItems : "center",
        padding : moderateScale(20),
        backgroundColor : 'skyblue'
    },
    centerLogo: {
        width : moderateScale(100),
        height : moderateScale(100),
        borderRadius: (moderateScale(100)/2)
    },
    userNameText: {
        alignSelf: "center",
        marginTop: moderateScale(10),
        fontSize: moderateScale(12)
    }
})


const mapStateToProps = (state) => {
    const {commonReducer} = state;
    return {
        ...commonReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showImagePicker: () => {
            dispatch(selectProfilePicture())
        }
    }
}

export default (connect (mapStateToProps, mapDispatchToProps) (AppDrawer));