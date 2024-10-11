import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { scaleFontSize } from "../../assets/styles/scaling";

const styles = StyleSheet.create({
    title: {
        color: '#022150',
        fontFamily:getFontFamily(800),
        //fontFamily:'Inter_24pt-ExtraLight',
        fontSize: scaleFontSize(24),
        fontStyle: 'normal',
        letterSpacing: 0.48,
    }
})

export default styles;