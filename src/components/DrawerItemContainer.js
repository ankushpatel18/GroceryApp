import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Log from '../utils/Logger';
import * as Colors from '../utils/colors';
import {moderateScale} from '../utils/scale';

const TAG_APP_DRAWER = 'TAG_APP_DRAWER';

export const DrawerItemContainer = (props) => {
    return (
        <View style={styles.container}>
            <Icon name={props.iconName} size={moderateScale(22)} />
            <TouchableOpacity
                disabled={props.disabled}
                style={styles.touchable}
                onPress={() => props.onPress ? props.onPress() : Log.d(TAG_APP_DRAWER, 'drawer item pressed', false)} >
                    <Text style={styles.title}>{props.itemTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        height: moderateScale(50),
        borderBottomWidth: 0.5,
        borderColor: Colors.LIGHT_GREY,
        flexDirection: 'row',
        alignItems: 'center'
    },
    touchable: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: moderateScale(10)
    },
    title: {
        fontSize: moderateScale(16),
        fontWeight: '500'
    },
})