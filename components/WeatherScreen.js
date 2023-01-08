import { useState, useEffect, useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  Platform,
  ToastAndroid,
  Alert,
  Component
} from 'react-native';
import { Accelerometer } from 'expo-sensors';
import * as Location from 'expo-location';
import Header from './Header';
import WeatherInfo from './WeatherInfo';
import Forecast from './Forecast';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState({
    city: 'Tampere',
    description: 'Sunny',
    temperature: 15.65,
    windSpeed: 3,
    weatherIcon: '01d',
  });
  var celc = weatherData.temperature-273;
   const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  });
    useEffect(() => {
    getLocation();

  }, []);

 const getLocation=async()=>{
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
      });
    
    } catch (err) {
      console.error(error);
    } 
    // delay();
 }
 setTimeout(()=> {
        fetchWeatherData();
      }
      ,500);

  //https://api.openweathermap.org/data/2.5/weather?lat=61.45&lon=23.85&appid=372f58cdd4578e431749980646541770
  //url + location.latitude.toFixed(2) + '&lon=' + location.longitude.toFixed(2) + apiKey
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
  const lat = location.latitude.toFixed(2);
  const lon = location.longitude.toFixed(2);
  const apiKey = '&appid=372f58cdd4578e431749980646541770';
  //const iconImage = 'https://openweathermap.org/image/w/';
  const fetchWeatherData = async () => {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon + '&appid=372f58cdd4578e431749980646541770');
      const jsonWeatherObject = await response.json();
      setWeatherData({
        city: jsonWeatherObject.name,
        description: jsonWeatherObject.weather[0].description,
        temperature: jsonWeatherObject.main.temp,
        windSpeed: jsonWeatherObject.wind.speed,
        weatherIcon: jsonWeatherObject.weather[0].icon,
      });
    } catch (err) {
      console.error(error);
    }
  };

  
   const createButtonAlert = () =>
    Alert.alert('Alert Title', 'This is forcast in iOS', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
 

  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={weatherData.city}></Header>
      <WeatherInfo
        description={weatherData.description}
        temperature={celc.toFixed(2)}
        windSpeed={weatherData.windSpeed}
        weatherIcon={weatherData.weatherIcon}></WeatherInfo>
        <View style = {styles.buttons} >
         <Text>{"Latitude: " + location.latitude.toFixed(2) +"  Latitude: " + +location.longitude.toFixed(2)}</Text>
        </View>
        <Text style={{marginTop:200, fontStyle: Blob}}>Forcast of {weatherData.city}</Text>
       <Forecast
        cityname={weatherData.city}></Forecast>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? '#a9a9a9': '#b0c4de',
  },
  buttons:{
     
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  }
});

export default WeatherScreen;
