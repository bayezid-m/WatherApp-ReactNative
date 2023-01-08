import * as React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ButtoonButtoonhmm,
  TextInput,
  Image,
  SafeAreaView,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RootSiblingParent } from 'react-native-root-siblings';

import Sensor from './components/Sensor';
import WeatherScreen from './components/WeatherScreen';
import Forecast from './components/Forecast';
// import Developer from './components/Developer';
import Search from './components/Search';
//const Tab = createStackNavigator();
//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  //const[helloMessage, setHelloMessage] = useState("HelloWorld");
 
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home"
                    activeColor="#00bfff"
                    inactiveColor="#f0edf6"
                    barStyle={{ backgroundColor: '#191970' }}>
   <Tab.Screen name ="Weather" component = {WeatherScreen}/>
    <Tab.Screen name ="Search" component = {Search}/>
     <Tab.Screen name ="Sensor" component = {Sensor} />
    </Tab.Navigator>
</NavigationContainer>

  );
};

export default App;
