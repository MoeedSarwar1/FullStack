// In your React Native component
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/data') // Replace with your server's IP and port
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{message ? message : 'Error Fetching Data'}</Text>
    </View>
  );
};

export default App;
