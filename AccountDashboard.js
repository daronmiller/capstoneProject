import React from 'react';
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity,ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements';
import {createStackNavigator, createAppContainer} from 'react-navigation';
export default class Account extends React.Component {
    static navigationOptions = {
        header: null,
      };


    render(){
        return(<ScrollView><View style={styles.container}>
            <View style={styles.banner}>
              <Image style ={styles.bannerImage} source={require('./assets/ApplegateBanner.jpg')}/>
            </View>
    
            <View style={styles.insideContainer}>
    
            <View style={styles.homeScreenContainer}>
                <TouchableOpacity style={styles.homeScreenBox} onPress={()=> {this.props.navigation.navigate("Account");}}>
                  <Icon style={styles.icon}
                    name='credit-card'
                    type='feather'
                    size={60}
                    color='#fff'
                  />
                  <Text style={styles.boxText}>Account Balance</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.homeScreenBox} onPress={()=> {this.props.navigation.navigate("StaffPage");}}>
                  <Icon style={styles.icon}
                    name='calendar'
                    type='font-awesome'
                    size={60}
                    color='#fff'
                  />
                  <Text style={styles.boxText}>Appointments</Text>
                </TouchableOpacity>
    
              </View>
    
              <View style={styles.homeScreenContainer}>
                <TouchableOpacity style={styles.homeScreenBox} onPress={()=> {this.props.navigation.navigate("Procedures");}}>
                  <Icon style={styles.icon}
                    name='exit-to-app'
                    type='materialicons'
                    size={60}
                    color='#fff'
                  />
                  <Text style={styles.boxText}>Logout</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.homeScreenBox} onPress={()=>{this.props.navigation.navigate("Deals");}}>
                <Icon style={styles.icon} 
                    name='new'
                    type='entypo'
                    size={60}
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
                    size={60}
                    color='#fff'
                  />
                  <Text style={styles.boxText}>Merchandise</Text>
                </TouchableOpacity>  
              
              <TouchableOpacity style={styles.homeScreenBox} onPress={()=>{this.props.navigation.navigate("InfoPage");}}>
                <Icon style={styles.icon} 
                    name='info-with-circle'
                    type='entypo'
                    size={60}
                    color='#fff'
                  />
                  <Text style={styles.boxText}>Information</Text>
                </TouchableOpacity>
                
    
              </View>
    
              <View style={styles.bottomView}>
                
                <Icon style={styles.bottomIcon} onPress={()=>{Linking.openURL('https://twitter.com/ApplegateFamDen');}}
                  name='twitter-with-circle'
                  type='entypo'
                  size={40}
                  color='#e62e00'
                />
                <Icon style={styles.bottomIcon} onPress={()=>{Linking.openURL('https://www.facebook.com/Applegate-Family-Dentistry-418702484845584/');}}
                  name='facebook-with-circle'
                  type='entypo'
                  size={40}
                  color='#e62e00'
                />
                <Icon style={styles.bottomIcon} onPress={()=>{Linking.openURL('https://www.instagram.com/applegate_family_dentistry/');}}
                  name='instagram-with-circle'
                  type='entypo'
                  size={40}
                  color='#e62e00'
                />
                <Icon style={styles.bottomIcon} onPress={()=>{Linking.openURL('http://www.applegatefamilydentist.com');}}
                  name='globe'
                  type='entypo'
                  size={40}
                  color='#e62e00'
                />
              </View>
            
              </View>
          </View></ScrollView>
        );
      }
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#e62e00',
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
          paddingBottom: 20,
          fontSize: 22,
          color: "#fff"
        },
      bottomView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 40,
        alignItems: "center"
      }
      });
      

module.export = Account;
 