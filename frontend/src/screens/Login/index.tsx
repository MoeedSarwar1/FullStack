import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import LoginStyles from './styles';

const Login = () => {
  const navigation = useNavigation();
  const styles = LoginStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // TODO: Add login logic here
    console.log('Login:', { email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Registeration')}
      />
    </View>
  );
};

export default Login;
