import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import { addUser, deleteUser, updateUser } from "../action/user";
import { CustomButton } from "../components/Button";
import { TextBox } from "../components/TextBox";

export default function AddUser({ navigation }) {

    const [uid, setUid] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const __onAddUser = () => {
        let details = {
            name: name,
            email: email,
            profile_pic: image,
        }
        addUser(details);
    }

    const __onUpdateUser = () => {
        let details = {
            user_id: uid,
            name: name,
            email: email,
        }
        updateUser(details);
    }


    const __onDeleteUser = () => {
        let details = {
            user_id: uid,
        }
        deleteUser(details);
    }

    let image = null;

    const pickFromGallery = () => {
        try {
            ImagePicker.openPicker({})
                .then(response => {

                    image = {
                        uri: response.path,
                        name: 'file' + new Date().getTime() + '.png',
                        type: response.mime
                    }
                    // const imageUri = Platform.OS === 'ios' ? response.sourceURL : response.path;
                    // console.log(image);
                    // setProfilePic(imageUri)

                }).catch(e => { console.log(e) });
        } catch (error) {
            console.log(error);
        }
    }
    const pickFromCamera = async () => {
        try {
            ImagePicker.openCamera({})
                .then(response => {
                    image = {
                        uri: response.path,
                        name: 'file' + new Date().getTime() + '.png',
                        type: response.mime
                    }
                    // const imageUri = Platform.OS === 'ios' ? response.sourceURL : response.path;
                    // console.log(imageUri);
                    // setProfilePic(imageUri)
                }).catch(e => { console.log(e) });;
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Add User</Text>
            <View style={styles.spaceDivider} />
            <View style={styles.spaceDivider} />

            <TextBox
                placeholder="Name"
                onChangeText={text => setName(text)}
                placeholderTextColor="lightgrey"
            />
            <View style={styles.spaceDivider} />

            <TextBox
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                keyboardType='email-address'
                placeholderTextColor="lightgrey"
            />
            <View style={styles.spaceDivider} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={{ flex: 1 }}>
                    <CustomButton title='Gallery' onPress={pickFromGallery} />
                </View>
                <View style={{ width: 10 }} />

                <View style={{ flex: 1 }}>
                    <CustomButton title='Camera' onPress={pickFromCamera} />
                </View>

            </View>

            <View style={styles.spaceDivider} />

            <CustomButton title='ADD USER' onPress={__onAddUser} />

            <View style={styles.spaceDivider} />
            <View style={styles.spaceDivider} />

            <Text style={styles.title}>Update User</Text>
            <View style={styles.spaceDivider} />
            <View style={styles.spaceDivider} />

            <TextBox
                placeholder="User Id"
                onChangeText={text => setUid(text)}
                placeholderTextColor="lightgrey"
            />
            <View style={styles.spaceDivider} />

            <TextBox
                placeholder="Name"
                onChangeText={text => setName(text)}
                placeholderTextColor="lightgrey"
            />
            <View style={styles.spaceDivider} />

            <TextBox
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                keyboardType='email-address'
                placeholderTextColor="lightgrey"
            />
            <View style={styles.spaceDivider} />

            <CustomButton title='Update' onPress={__onUpdateUser} />

            <View style={styles.spaceDivider} />
            <View style={styles.spaceDivider} />

            <Text style={styles.title}>Delete User</Text>
            <View style={styles.spaceDivider} />
            <View style={styles.spaceDivider} />

            <TextBox
                placeholder="User Id"
                onChangeText={text => setUid(text)}
                placeholderTextColor="lightgrey"
            />
            <View style={styles.spaceDivider} />

            <CustomButton title='Delete User' onPress={__onDeleteUser} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    spaceDivider: {
        height: 10
    },
    textData: {
        fontSize: 18,
        color: '#595959'
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#595959'
    },
    button: {
        backgroundColor: '#9a09ff',
        borderRadius: 30,
        alignItems: 'center',
        width: 200,
        paddingVertical: 15,
        paddingHorizontal: 30
    }
});