import React from "react";
import { SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import globalStyles from "../../assets/styles/globalStyles";

import style from "./style";
import { ProfileTabsNavigator } from "../../navigation/MainNavigation";

const Profile =() =>{
    return(
        <SafeAreaView style={[globalStyles.backgroundWhite,globalStyles.flexOne]}>
            <ScrollView contentContainerStyle={globalStyles.flexGrow}>
                <View style={style.profileImageContainer}>
                    <View style={style.profileImageContent}>
                        <Image style={style.profileImage} source={require('../../assets/images/default_profile.png')}/>
                    </View>
                </View>
                <Text style={style.userName}>Meet Parpani</Text>
                <View style={style.statContainer}>
                    <View>
                        <Text style={style.statAmount}>45</Text>
                        <Text style={style.statType}>Following</Text>
                    </View>
                    <View style={style.statBorder} />
                    <View>
                        <Text style={style.statAmount}>30M</Text>
                        <Text style={style.statType}>Followers</Text>
                    </View>
                    <View style={style.statBorder} />
                    <View>
                        <Text style={style.statAmount}>100</Text>
                        <Text style={style.statType}>Posts</Text>
                    </View>
                </View>
                <View style={globalStyles.flexOne}>
                    <ProfileTabsNavigator />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile