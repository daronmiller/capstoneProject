import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import StaffPage from './StaffPage';
import StaffPageData from './StaffPageData';
import Merchandise from './Merchandise';
import Procedures from './Procedures';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      
      <Card title="Special Deals" style={styles.cardStyling}>
        <Text>Check out what specials and discounts we're offering on procedures</Text>
        <Button raised= {true} title="Meet our staff" onPress={()=>{this.props.navigation.navigate('Procedures')}}></Button>
          
        </Card>
        <Card title="Staff Biographies"style={styles.cardStyling}>
         <Image style ={styles.imageStyling} source={require('./assets/staff/images/Dr_Applegate.jpg')}/>
          <Text>Meet the wonderful staff at Applegate Family Dentistry</Text>
          <Button title="Read Staff Biographies" onPress={()=> {this.props.navigation.navigate("StaffPage");}}></Button>
          </Card>
        <Card width={250}title='Applegate Apparel'>
        <Button title="View Our Apparel" onPress={()=>{this.props.navigation.navigate("Merchandise");}}></Button>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Ba0121',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  cardStyling: {
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  

  },
  headerStyling: {
    fontSize: 22,
    backgroundColor: '#d11f15',
    
  },
  imageStyling: {
    aspectRatio: 1,
    borderRadius: 50,
    height: 75,
    alignItems: 'center',
    

      }
});
const navApp = createStackNavigator({
  Home: HomeScreen,
  StaffPage,
  Merchandise, 
  Procedures
  
},
{
  initialRouteName:'Home'
});

const AppContainer = createAppContainer(navApp);
export default class App extends React.Component{
  render(){
    return <AppContainer/>;
  }
}