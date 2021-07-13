/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Landing from './Components/Landing';
import NbPlayers from './Components/NbPlayers';
import InfosPlayers from './Components/InfosPlayers';


const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();

const App = ({navigation}) => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing}/>
        <Stack.Screen name="NbPlayers" component={NbPlayers}/>
        <Stack.Screen name="InfosPlayers" component={InfosPlayers}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
