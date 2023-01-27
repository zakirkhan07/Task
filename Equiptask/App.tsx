/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import InputScreen from './src/InputScreen';
import FindDistance from './src/FindDistance';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InputScreen">
        <Stack.Screen name="FindDistance" component={FindDistance} />
        <Stack.Screen
          name="InputScreen"
          component={InputScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'tomato'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
