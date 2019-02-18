import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import StaffPage from './StaffPage';
import StaffPageData from './StaffPageData';
import Merchandise from './Merchandise';
import Procedures from './Procedures';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image style ={styles.bannerImage} source={require('./assets/ApplegateBanner.jpg')}/>
        </View>

        <View style={styles.insideContainer}>

        <View style={styles.homeScreenContainer}>
            <TouchableOpacity style={styles.homeScreenBox} onPress={()=> {this.props.navigation.navigate("Procedures");}}>
              <Icon style={styles.icon}
                name='account-circle'
                type='material-community'
                size='60'
                color='#fff'
              />
              <Text style={styles.boxText}>Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.homeScreenBox} onPress={()=> {this.props.navigation.navigate("StaffPage");}}>
              <Icon style={styles.icon}
                name='users'
                type='font-awesome'
                size='60'
                color='#fff'
              />
              <Text style={styles.boxText}>Staff</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.homeScreenContainer}>
            <TouchableOpacity style={styles.homeScreenBox} onPress={()=> {this.props.navigation.navigate("Procedures");}}>
              <Icon style={styles.icon}
                name='tooth'
                type='material-community'
                size='60'
                color='#fff'
              />
              <Text style={styles.boxText}>Procedures</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.homeScreenBox} onPress={()=>{this.props.navigation.navigate("Merchandise");}}>
            <Icon style={styles.icon} 
                name='new'
                type='entypo'
                size='60'
                color='#fff'
              />
              <Text style={styles.boxText}>Deals</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.homeScreenContainer}>

          <TouchableOpacity style={styles.homeScreenBox} onPress={()=>{this.props.navigation.navigate("Merchandise");}}>
            <Icon style={styles.icon} 
                name='tshirt-crew'
                type='material-community'
                size='60'
                color='#fff'
              />
              <Text style={styles.boxText}>Merchandise</Text>
            </TouchableOpacity>  
          
          <TouchableOpacity style={styles.homeScreenBox} onPress={()=>{this.props.navigation.navigate("Merchandise");}}>
            <Icon style={styles.icon} 
                name='info-with-circle'
                type='entypo'
                size='60'
                color='#fff'
              />
              <Text style={styles.boxText}>Information</Text>
            </TouchableOpacity>
            

          </View>

          {/* <Card title="Special Deals" style={styles.cardStyling}>
              <Text>Check out what specials and discounts we're offering on procedures</Text>
              <Button raised= {true} title= "View Available Procedures" onPress={()=>{this.props.navigation.navigate('Procedures')}}></Button>
          </Card>

          <Card title="Staff Biographies"style={styles.cardStyling}>
             <Image style ={styles.imageStyling} source={require('./assets/staff/images/Dr_Applegate.jpg')}/>
              <Text>Meet the wonderful staff at Applegate Family Dentistry</Text>
              <Button title="Read Staff Biographies" onPress={()=> {this.props.navigation.navigate("StaffPage");}}></Button>
          </Card>

          <Card title='Applegate Apparel' style={styles.cardStyling}>
            <Text>Take a look at some Applegate merchandise</Text>
            <Button title="View Our Apparel" onPress={()=>{this.props.navigation.navigate("Merchandise");}}></Button>
          </Card> */}
        
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  insideContainer: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 10,
    alignItems: 'stretch'
  },
  // cardStyling: {
  //   textAlign: 'center',
  //   alignItems: 'stretch',
  //   flexDirection: 'row'

  // },
  headerStyling: {
    fontSize: 22,
    backgroundColor: '#d11f15',
    
  },
  imageStyling: {
    aspectRatio: 1,
    borderRadius: 50,
    height: 75,
    alignItems: 'center',
  },
  bannerImage: {
      height: 145,
      width: "100%",
      marginTop: 35,
  },
  banner: {
    backgroundColor: "#fff",
    alignItems: "stretch",
  },
  homeScreenContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    height: '27%',
    width: '100%',
    justifyContent: 'space-evenly',
    //padding: 10,
  },
  homeScreenBox: {
    backgroundColor: '#e62e00',
    height: 180,
    width: '49%',
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon: {
    alignSelf:"center",
  },
  boxText: {
    paddingBottom: 10,
    fontSize: 22,
    color: "#fff"
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