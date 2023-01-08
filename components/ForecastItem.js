import {View, Text, StyleSheet, Image} from 'react-native';
import Forecast from './Forecast';


const ForecastListItem=({time, description, temperature, windspeed, icon})=>{

return(
   <View style = {{flexDirection: 'column', borderColor: 'black',  borderWidth: 1, margin: 1, borderRadius: 5, marginTop: 20}} >
<View >
<Text>{time}</Text>
<Text>{temperature}</Text>
<Text>{description}</Text>
<Text>{windspeed}</Text>
<Text>  </Text>
</View>

<Image style ={ {width: 50,height: 50,marginLeft: 0,}}source={"https://openweathermap.org/img/w/" + icon + ".png"}/>
</View>

);
};

export default ForecastListItem;