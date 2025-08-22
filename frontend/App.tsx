// In your React Native component
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import AuthStack from './src/navigation/AuthStack';
import HomeStack from './src/navigation/HomeStack';

const RootNavigator = () => {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);

  // Simulate a short loading when switching stacks
  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [token]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="small" color="#007AFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {token ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const App = () => (
  <AuthProvider>
    <RootNavigator />
  </AuthProvider>
);

export default App;
