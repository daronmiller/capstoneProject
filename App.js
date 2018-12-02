import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import StaffPage from './StaffPage';
import StaffPageData from './StaffPageData';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      
      <Card title="Special Deals" style={styles.cardStyling}>
        <Text>Check out what specials and discounts we're offering on procedures</Text>
        <Button raised= {true} title="Meet our staff"></Button>
          
        </Card>
        <Card title="Staff Biographies"style={styles.cardStyling}>
          <Image style ={styles.imageStyling} source={require('./assets/staff/images/Dr_Applegate.jpg')}/>
          <Text>Meet the wonderful staff at Applegate Family Dentistry</Text>
          <Button title="Read Staff Biographies" onPress={()=> {this.props.navigation.navigate("StaffPage");}}></Button>
          </Card>
        <Card><Text>Applegate Apparel</Text>
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
  },
  cardStyling: {
    backgroundColor: '#ef2f24',
    textAlign: 'center',
  

  },
  headerStyling: {
    fontSize: 22,
    backgroundColor: '#d11f15'
  },
  imageStyling: {
    aspectRatio: 1,
    borderRadius: 50,
    height: 75
      }
});
const navApp = createStackNavigator({
  Home: HomeScreen,
  StaffPage,
  
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