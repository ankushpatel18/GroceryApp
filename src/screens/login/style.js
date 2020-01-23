import {
    StyleSheet,
} from 'react-native';
import { RED_COLOR, PRIMARY_BUTTON_BLUE, WHITE_COLOR } from '../../utils/colors';
import { moderateScale,verticalScale,scale } from '../../utils/scale';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    containerStyle: {
        flex: 1,
    },
    header: {
        backgroundColor: WHITE_COLOR,
        alignItems: 'center',
        paddingTop: moderateScale(22),
    },
    logo: {
        height: moderateScale(25),
        width: moderateScale(262)
    },
    registerButtonContainer: {
        backgroundColor: WHITE_COLOR
    },

    registerButtonText: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: PRIMARY_BUTTON_BLUE,
        fontSize: moderateScale(14)
        },
    elevatedViewTop: {
        top: 0,
        height: moderateScale(70),
        position: 'absolute',
        width: '100%',
        backgroundColor: WHITE_COLOR
    },
    elevatedView: {
        margin: moderateScale(30),
        backgroundColor: WHITE_COLOR,
        justifyContent: 'flex-start',
        paddingTop: moderateScale(10),
    },
    rememberMeText: {
        color: PRIMARY_BUTTON_BLUE,

        fontSize: moderateScale(14),
        fontWeight: 'normal',
    },
    checkBoxContainer: {
        backgroundColor: 'transparent',
        borderColor: WHITE_COLOR,
        padding: 0,
    },
    signInButtonContainer: {
        paddingHorizontal: 20,
        paddingTop: moderateScale(26)
    },
    signInButtonTitle: {
        fontSize: moderateScale(14)
    },
    forgotPasswordText: {
        paddingTop: moderateScale(36),
        paddingBottom: moderateScale(10),
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: PRIMARY_BUTTON_BLUE,
        fontSize: moderateScale(12)
    },
    skipText: {
        paddingTop: moderateScale(10),
        paddingBottom: moderateScale(10),
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: PRIMARY_BUTTON_BLUE,
        fontSize: moderateScale(12)
    },
    poweredByContainer: {
        paddingTop: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 13, 
    },
    poweredByLogo:{
      width: scale(178),
      height: verticalScale(19)
    },
    errorMessage: {
        backgroundColor: WHITE_COLOR,
        color: RED_COLOR,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    errorBox:{
        backgroundColor: WHITE_COLOR,
        paddingHorizontal: moderateScale(20),
        height: moderateScale(60),
        justifyContent: 'center'
    },
    activityIndicatorView: {
        position: 'absolute',
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        left: 0,
        bottom: 0,
        top: 0
    },
    activityIndicatorBox:{
        backgroundColor: 'white', 
        padding: 20, 
        justifyContent: 'center', 
        alignItems:'center', 
        overflow: 'hidden', 
        borderRadius:5
    },
    settingsButtonContainer:{
     
      position: 'absolute',
      top: moderateScale(22), 
      right: 20, 

    }
})