import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({
    storyContainer:{
        marginRight: horizontalScale(20),
    },
    firstNameStyle:{
        color: '#022150',
        fontSize:scaleFontSize(14),
        fontFamily:'Roboto',
        fontWeight:'500',
        marginTop:verticalScale(8),
        textAlign:'center'
    },
})

export default styles;