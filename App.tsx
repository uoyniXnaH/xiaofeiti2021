import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/Home';
import Birthday from './src/Birthday';
import Future from './src/Future';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Home'}>
        <Stack.Screen name="Home" options={{title: '❤'}} component={Home} />
        <Stack.Screen name="Birthday" options={{title: 'Happy birthday~'}} component={Birthday} />
        <Stack.Screen name="Future" options={{title: '2021→2022'}} component={Future} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
