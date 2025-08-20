import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import LoginStyles from './styles';

const Login = () => {
  const navigation = useNavigation();
  const styles = LoginStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => {}} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Registeration')}
      />
    </View>
  );
};

export default Login;
