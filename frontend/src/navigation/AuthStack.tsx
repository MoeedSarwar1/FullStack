import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Login';
import Registeration from '../screens/Registeration';
import { AuthScreens } from './enums';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthScreens.Login}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={AuthScreens.Login} component={Login} />
      <Stack.Screen
        name={AuthScreens.Registeration}
        component={Registeration}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
