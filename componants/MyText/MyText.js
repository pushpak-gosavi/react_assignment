import React from "react";
import { Text, View } from "react-native";
import Proptypes from "prop-types";
import Style from "./style";
import style from "./style";

const MyText = ({name}) => {
    const handelOnPressEvent = () => {
        alert('You just pressed the text component')
    }
    return(
        <View>
            <Text style = {style.text} onPress={ ()=> handelOnPressEvent()}>
                Hello, {name}!
            </Text>
        </View>
    );
};

MyText.Proptypes = {
    name : Proptypes.string.isRequired,
} 

export default MyText;