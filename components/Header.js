import {View, Text, StyleSheet} from 'react-native'
const Header = ({headerText}) =>{

  return(
    <View style={styles.helloText}>
    <Text style={styles.header}>{headerText}</Text>
   </View>
  );
};

const styles = StyleSheet.create(
  {
    helloText:{
      fontSize:20, 
      color: 'yellow',
      textAlign: 'center',
      backgroundColor: '#bc8f8f'
    },
    header:{
      height: 50,
      color: 'black',
      fontSize: 30,
    },
  });
  export default Header;