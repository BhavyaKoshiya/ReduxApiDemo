import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function CustomButton({ buttonStyle, buttonTextStyle, buttonContainerStyle, title, onPress, ...other }) {

    return (

        <View>
            <TouchableOpacity
                style={[styles.button, buttonStyle]}
                onPress={onPress}
                {...other}
            >
                <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({

    buttonText: {
        alignSelf: "center",
    },
    button: {
        backgroundColor: "dodgerblue",
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 30
    }
})