import Header from './Header'
import ForecastItem from './ForecastItem';
import {View, Button, StyleSheet, Text, FlatList, SafeAreaView} from 'react-native';
import {useState, useEffect} from 'react';
const Forecast = ({cityname})=>{

const [weatherForeCast, setWeatherForcast] = useState({city:{name: "Fetching"}});

useEffect(()=>{
fetchWeatherForecast(cityname);
}, []);

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=';
 const apiKey = '&units=metric&appid=372f58cdd4578e431749980646541770'
 const fetchWeatherForecast = async (location)=>{
  try{
    const response = await fetch(url + location + apiKey);
    const weatherObject = await response.json();
    setWeatherForcast(weatherObject);
  }
  catch(err){
      console.error(error);
  }
};
  return(

 <SafeAreaView>
    <FlatList showsVerticalScrollIndicator={false} 
    horizontal
     data={weatherForeCast.list}
     renderItem={ ({item})=>
       <ForecastItem
       time={item.dt_txt.substring(11)}
       temperature={item.main.temp}
       description={item.weather[0].description}
       windspeed={item.wind.speed}
       icon={item.weather[0].icon}
       ></ForecastItem>
     }
    ></FlatList>
   </SafeAreaView>
  );
};
export default Forecast;






