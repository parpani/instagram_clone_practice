import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";

import styles from "./style";

const UserProfileImage = (props) => {
    return (
        <View style={[styles.userImgContainer,{borderRadius: props.imageDimensions}]}>
            <Image source={props.profileImage} style={{width: props.imageDimensions, height:props.imageDimensions}}/>
        </View>
    )
}

UserProfileImage.propTypes = {
    profileImage: PropTypes.any.isRequired,
    imageDimensions: PropTypes.number.isRequired
}

export default UserProfileImage;