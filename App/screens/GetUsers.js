import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../action/user";


export default function GetUsers({ navigation }) {

    const UserData = useSelector(({ user }) => user);
    //console.log(UserData);
    const dispatch = useDispatch();

    useEffect(() => {

        getData();

    }, [])

    const [users, setUsers] = useState([])

    const getData = async () => {

        const result = await dispatch(getUserDetails())

        setUsers(result.data);

        // console.log(users);

    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Get Users</Text>
            <View style={styles.spaceDivider} />
            <View style={styles.spaceDivider} />

            {
                users.map((item) => {
                    return (
                        <View key={item.user_id}>

                            <Text>UserID: {item.user_id}</Text>
                            <Text>Name: {item.name}</Text>
                            <Text>Email: {item.email}</Text>
                            <Text>Created At: {item.created_at}</Text>
                            
                            <View style={styles.spaceDivider} />
                            <View style={styles.spaceDivider} />

                        </View>
                    )
                }
                )
            }

            {/* <Text style={styles.textData}>First Name: {UserData.firstName}</Text>
            <View style={styles.spaceDivider} />

            <Text style={styles.textData}>Middle Name: {UserData.middleName}</Text>
            <View style={styles.spaceDivider} />

            <Text style={styles.textData}>Last Name: {UserData.lastName}</Text>
            <View style={styles.spaceDivider} />

            <Text style={styles.textData}>Gender: {UserData.gender}</Text>
            <View style={styles.spaceDivider} />

            <Text style={styles.textData}>Age: {UserData.age}</Text>
            <View style={styles.spaceDivider} />

            <Text style={styles.textData}>Area of Interest: {UserData.aoi}</Text>
            <View style={styles.spaceDivider} />

            <Text style={styles.textData}>Email ID: {UserData.email}</Text>
            <View style={styles.spaceDivider} />

            <Text style={styles.textData}>Education: {UserData.education}</Text>
            <View style={styles.spaceDivider} />

            <Text style={styles.textData}>Collage: {UserData.collage}</Text>
            <View style={styles.spaceDivider} /> */}


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