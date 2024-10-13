import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

import styles from "./style";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { horizontalScale } from "../../assets/styles/scaling";


const UserStory = (props) => {
    return <View style={styles.storyContainer}>
       <UserProfileImage profileImage={props.profileImage} imageDimensions={horizontalScale(65)}/>
        <Text style={styles.firstNameStyle}>{props.firstName}</Text>
    </View>
};

UserStory.propTypes = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.any.isRequired
}

export default UserStory; 