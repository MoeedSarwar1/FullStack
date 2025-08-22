import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

export enum HomeScreens {
  Home = 'HomeScreen',
}

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName={HomeScreens.Home}>
    <Stack.Screen name={HomeScreens.Home} component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeStack;
