import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import GetUsers from '../screens/GetUsers';
import AddUser from '../screens/AddUser';


function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddUser" screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetUsers" component={GetUsers}/>
        <Stack.Screen name="AddUser" component={AddUser}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
