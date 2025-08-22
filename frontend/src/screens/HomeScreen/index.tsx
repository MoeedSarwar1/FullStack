import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const HomeScreen: React.FC = () => {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user?.name || 'User'}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
