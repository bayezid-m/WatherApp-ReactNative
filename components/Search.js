import {View, TextInput, Button, StyleSheet, Text, Image} from 'react-native';
import { useState } from 'react';
import React from 'react';
const UpdateLocation = () =>{
    const [weatherData, setWeatherData] = useState({
    //location : '',
    city: 'Tampere',
    description: 'Sunny',
    temperature: 15.65,
    windSpeed: 3,
    weatherIcon: '01d',
  });

  const textInputField = React.createRef();
    const updateLocation = (updateLocation) => {
    fetchWeatherData(updateLocation);
  };

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '&units=metric&appid=372f58cdd4578e431749980646541770';
  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(url + location + apiKey);
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
  return(
    <View>
    <View  style = {{flexDirection: 'row'}}> 
    <View style={styles.text}>
    <Text style = {{fontSize:40}}>{weatherData.city }</Text>
       <Text >{weatherData.temperature + " °C"}</Text>
      <Text>{weatherData.description}</Text>
      <Text>{weatherData.windSpeed + " mph"}</Text>
      </View>
    <View>
     <Image style={styles.icon} source={"https://openweathermap.org/img/w/" + weatherData.weatherIcon + ".png"}></Image>
      </View>
    </View>
      
       <View style = {{flexDirection: 'row',
                   backgroundColor: `#deb887`
  }}>
  
  <TextInput  placeholder={"Search a city"}
              ref = {textInputField}
              style={styles.textInputStyle}>
  </TextInput>
  <Button  color="#9400d3" title={"Search"} style={styles.updateButton} onPress={() => updateLocation(textInputField.current.value)}></Button>

  </View>
    </View>
 
  );
}
const styles = StyleSheet.create(
  {
  textInputStyle:{
      height: 40,
      borderWidth: 2,
      margin: 12,
      paddig: 10,
      borderRadius: 10,
      borderColor: 'black',
      backgroundColor: `#f0f8ff`,
       alignItems: 'center',
        justifyContent: 'center',
            flex: 1,
    },
  updateButton:{
        paddig: 10,
          height: 40,
      borderWidth: 2,
      margin: 12,
  },
  icon:{
    width: 70,height: 80
  },
    text:{
    fontSize: 30,
    marginRight: 80,
    marginLeft: 10,
    textAlign: 'Left',
    flex: 1,
  },
}
);
export default UpdateLocation;