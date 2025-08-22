import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { loginUser } from '../../network/AuthApi';
import LoginStyles from './styles';

const Login = () => {
  const navigation = useNavigation();
  const styles = LoginStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const data = await loginUser(email, password);
      console.log(data);
      if (data.token) {
        login(data.user, data.token);
      } else {
        Alert.alert('Login Failed', data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Login Error', (error as any).message || 'Unknown error');
    }
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
