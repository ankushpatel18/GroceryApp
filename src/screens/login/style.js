
import {StyleSheet} from 'react-native';
import { moderateScale } from '../../utils/scale';


export default StyleSheet.create({
centerContainer: {
flex: 1,
justifyContent: "center",
alignItems : "center"
},
primareButton :{
    paddingEnd : moderateScale(20),
    paddingStart : moderateScale(20),
    margin :moderateScale(10)
}
})

