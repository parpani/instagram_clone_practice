import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "./scaling";

const globalStyles = new StyleSheet.create({
    header: {
        marginLeft: horizontalScale(27), 
        marginRight: horizontalScale(17), 
        marginTop: verticalScale(30), 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between'
    },
    messageIcon: {
        padding:horizontalScale(14), 
        backgroundColor:'#F9FAFB', 
        borderRadius:horizontalScale(100)
    },
    messageNumberContainer:{
        position:'absolute',
        right:horizontalScale(10),
        top:verticalScale(12),
        backgroundColor: '#F35BAC',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderRadius:horizontalScale(10),
        width:horizontalScale(10),
        height:horizontalScale(10)     //if given verticalScale then it will not be a proper circle 
    },
    messageNumber:{
        color:'#FFFFFF',
        fontSize:scaleFontSize(6),
        fontWeight:'600',
        fontFamily:'Roboto',
    },
    userStoryContainer:{
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(28)
    },
    userPostContainer:{
        marginHorizontal:horizontalScale(24),
    }

});

export default globalStyles;