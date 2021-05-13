import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import AddUser from '../screens/AddUser';
import Home from '../screens/Home';
import UpdateUser from '../screens/UpdateUser';

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddUser" component={AddUser} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
