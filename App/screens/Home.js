import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUserDetails } from "../action/user";
import { plusIcon } from "../Assets/Icons";
import { CTHeader } from "../components/Header";
import { useIsFocused } from '@react-navigation/native';


export default function Home({ navigation }) {

    const UserData = useSelector(({ user }) => user);
    //console.log(UserData);
    let ImagePlaceholder = 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'

    const dispatch = useDispatch();

    const isFocused = useIsFocused();

    useEffect(() => {

        getData();

    }, [isFocused])

    const [users, setUsers] = useState([])

    const getData = async () => {

        const result = await dispatch(getUserDetails())

        setUsers(result.data);

        // console.log(users);

    }

    const __onDeleteUser = async (item) => {
        let details = {
            user_id: item.user_id,
        }
        await deleteUser(details);
        getData();
    }


    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    onPress={() => navigation.navigate('UpdateUser', { Data: item })}
                    style={{ padding: 10, borderWidth: 1, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: Dimensions.get('window').width - 20 }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: Dimensions.get('window').width * 0.2 }}>
                            <Image
                                source={{ uri: item.profile_pic ? item.profile_pic : ImagePlaceholder }}
                                style={{ height: 75, width: 75, borderRadius: 15 }}
                            />
                        </View>
                        <View style={{ width: 10 }} />

                        <View style={{ width: Dimensions.get('window').width * 0.5 }}>
                            <Text style={{ color: '#000' }}>UserID: {item.user_id}</Text>
                            <Text style={{ color: '#000' }}>Name: {item.name}</Text>
                            <Text style={{ color: '#000' }}>Email: {item.email}</Text>
                            <Text style={{ color: '#000' }}>Created At: {item.created_at}</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={{ backgroundColor: 'red', padding: 10, borderRadius: 10, }}
                        onPress={() =>
                            Alert.alert(
                                "Are you Sure?",
                                "Do you really want to delete this record? This Process cannot be undone.",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () => console.log("Deletion Canceled"),
                                        style: "cancel"
                                    },
                                    { text: "OK", onPress: () => __onDeleteUser(item) }
                                ])
                        }
                    >
                        <Text style={{ color: '#fff' }}>Delete</Text>
                    </TouchableOpacity>

                </TouchableOpacity>
                <View style={{ height: 10 }} />
            </>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <CTHeader
                title='API Demo'
                headerColor='white'
                statusbarStyle='dark-content'
                statusbarColor='lightgrey'
                headerAlign='left'
                rightComp={(
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddUser')}
                    >
                        <Image style={{ height: 20, width: 20, resizeMode: 'contain', }} source={plusIcon} />
                    </TouchableOpacity>)}
            />
            <View style={{ flex: 1, padding: 10, backgroundColor: '#fff' }}>


                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 16 }}>===============</Text>
                    <Text style={{ fontSize: 16 }}> User Data </Text>
                    <Text style={{ fontSize: 16 }}>===============</Text>
                </View>
                <View style={styles.spaceDivider} />
                {users ?
                    <FlatList
                        data={users}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.user_id.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                    :
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Text>No Data Found</Text>
                    </View>

                }
            </View>
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
        fontSize: 40,
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