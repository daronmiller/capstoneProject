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

          <View style={styles.bottomView}>
            <Icon style={styles.bottomIcon}
              name='twitter-with-circle'
              type='entypo'
              size='40'
              color='#e62e00'
            />
            <Icon style={styles.bottomIcon}
              name='facebook-with-circle'
              type='entypo'
              size='40'
              color='#e62e00'
            />
            <Icon style={styles.bottomIcon}
              name='instagram-with-circle'
              type='entypo'
              size='40'
              color='#e62e00'
            />
            <Icon style={styles.bottomIcon}
              name='globe'
              type='entypo'
              size='40'
              color='#e62e00'
            />
          </View>
        
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
    paddingTop: 20,
    alignItems: 'stretch'
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
  },
  bannerImage: {
      height: 150,
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
  },
  priceText:{
    fontSize: 22
},
containerBanner: {
flex: 1,
backgroundColor: '#Ba0121',
alignItems: 'stretch',
justifyContent: 'flex-start',
flexDirection: 'column'
},
bottomView: {
  flexDirection: "row",
  justifyContent: "space-evenly",
  paddingTop: 40,
  alignItems: "center"
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