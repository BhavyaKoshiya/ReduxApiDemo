import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ToastAndroid } from "react-native";
import { updateUser } from "../action/user";
import { CustomButton } from "../components/Button";
import { CTHeader } from "../components/Header";
import { TextBox } from "../components/TextBox";

export default function UpdateUser({ navigation, route }) {

    const [uid, setUid] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    useEffect(() => {
        getUser();
    }, [])

    const getUser = () => {
        let Data = route.params.Data;
        console.log(Data);
        setUid(Data.user_id.toString());
        setName(Data.name);
        setEmail(Data.email);

    }

    const validateEmail = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        return expression.test(String(email).toLowerCase())
    }

    const __onUpdateUser = async () => {

        if (name === '' || email === '') {
            // console.log(validateEmail(addEmail));

            ToastAndroid.show('Enter all Field', ToastAndroid.SHORT);
        } else {
            if (validateEmail(email)) {
                let details = {
                    user_id: uid,
                    name: name,
                    email: email,
                }
                await updateUser(details);
                navigation.goBack();
                ToastAndroid.show('User Updated....', ToastAndroid.SHORT);

            } else {
                ToastAndroid.show('Please enter valid Email', ToastAndroid.SHORT);
            }
        }
       
    }
    return (
        <View style={{ flex: 1 }}>
            <CTHeader
                title='UPDATE DATA'
                headerColor='white'
                statusbarStyle='dark-content'
                statusbarColor='white'
                headerAlign='left'
                onBackPress={() => navigation.goBack()}
            />
            <View style={styles.container}>
                <Text style={{ marginLeft: 20, fontSize: 16 }}>User ID</Text>

                <TextBox
                    value={uid}
                    editable={false}
                    placeholder="User Id"
                    onChangeText={text => setUid(text)}
                    placeholderTextColor="lightgrey"
                />
                <View style={styles.spaceDivider} />
                <Text style={{ marginLeft: 20, fontSize: 16 }}>Name</Text>
                <TextBox
                    value={name}
                    placeholder="Name"
                    onChangeText={text => setName(text)}
                    placeholderTextColor="lightgrey"
                />
                <View style={styles.spaceDivider} />
                <Text style={{ marginLeft: 20, fontSize: 16 }}>Email</Text>

                <TextBox
                    value={email}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    keyboardType='email-address'
                    placeholderTextColor="lightgrey"
                />
                <View style={styles.spaceDivider} />

                <CustomButton title='Update' onPress={__onUpdateUser} />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    spaceDivider: {
        height: 10
    },
});