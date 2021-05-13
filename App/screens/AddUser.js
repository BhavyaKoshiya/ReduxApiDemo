import React, { useState } from 'react';
import { View, Text, StyleSheet, ToastAndroid, Image } from 'react-native';
import { CTHeader } from '../components/Header';
import ImagePicker from 'react-native-image-crop-picker';
import { addUser, } from "../action/user";
import { CustomButton } from "../components/Button";
import { TextBox } from "../components/TextBox";


export default function AddUser({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState();
    let ImagePlaceholder = 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'


    const __onAddUser = async () => {
        if (name === '' || email === '') {

            ToastAndroid.show('Enter all Field', ToastAndroid.SHORT);
        } else {
            if (validateEmail(email)) {
                let details = {
                    name: name,
                    email: email,
                    profile_pic: image,
                }
                ToastAndroid.show('Adding User....', ToastAndroid.SHORT);
                await addUser(details);
                navigation.goBack();
                ToastAndroid.show('User Added....', ToastAndroid.SHORT);

            } else {
                ToastAndroid.show('Please enter valid Email', ToastAndroid.SHORT);

            }
        }
    }

    const validateEmail = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        return expression.test(String(email).toLowerCase())
    }

    const pickFromGallery = () => {
        try {
            ImagePicker.openPicker({
                width: 500,
                height: 500,
                cropping: true
            })
                .then(response => {
                    setImage({
                        uri: response.path,
                        name: 'file' + new Date().getTime() + '.png',
                        type: response.mime
                    })
                }).catch(e => { console.log(e) });
        } catch (error) {
            console.log(error);
        }
    }
    const pickFromCamera = async () => {
        try {
            ImagePicker.openCamera({
                width: 500,
                height: 500,
                cropping: true
            })
                .then(response => {
                    setImage({
                        uri: response.path,
                        name: 'file' + new Date().getTime() + '.png',
                        type: response.mime
                    })
                }).catch(e => { console.log(e) });;
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <View style={{ flex: 1 }}>
            <CTHeader
                title='ADD DATA'
                headerColor='white'
                statusbarStyle='dark-content'
                statusbarColor='white'
                headerAlign='left'
                onBackPress={() => navigation.goBack()}
            />
            <View style={styles.container}>
                <Text style={{ marginLeft: 20, fontSize: 16 }}>Name</Text>

                <TextBox
                    placeholder="Name"
                    onChangeText={text => setName(text)}
                    placeholderTextColor="lightgrey"
                />
                <View style={styles.spaceDivider} />
                <Text style={{ marginLeft: 20, fontSize: 16 }}>Email</Text>

                <TextBox
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    keyboardType='email-address'
                    placeholderTextColor="lightgrey"
                />
                <View style={styles.spaceDivider} />
                <Text style={{ marginLeft: 20, fontSize: 16 }}>Profile Picture</Text>
                <View style={styles.spaceDivider} />


                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View style={{ flex: 1 }}>
                        <CustomButton title='Gallery' onPress={pickFromGallery} />
                        <View style={{ height: 5 }} />
                        <CustomButton title='Camera' onPress={pickFromCamera} />
                    </View>
                    <View style={{ width: 20 }} />

                    <View >
                        <Image style={{ height: 100, width: 100, resizeMode: 'contain' }} source={{ uri: image ? image.uri : ImagePlaceholder }} />
                    </View>
                    <View style={{ width: 20 }} />
                </View>

                <View style={styles.spaceDivider} />

                <CustomButton title='ADD USER' onPress={__onAddUser} />

                <View style={styles.spaceDivider} />
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