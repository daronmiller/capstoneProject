import React from 'react';
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity, TextInput } from 'react-native';
import { Card, ListItem,Button, Icon, Header } from 'react-native-elements'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import StaffPage from './StaffPage';
import Merchandise from './Merchandise';
import Procedures from './Procedures';
import InfoPage from './InfoPage';
var users = { 
    "user1"  :  "123", 
    "user2"   :  "Shark", 
    "user3"      :  'talk' 
  }
export default class Account extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            username: '',
            password:''

        }
    }
    
    login = () =>{
        for(x in users){
            if(this.state.username in users && this.state.password===users[x]){
                
                alert('login successful');
                this.props.navigation.navigate("Home");

            }
        }
        
    }


    render() {
        return (
            <View style={styles.container}>
        <View style={styles.banner}>
          <Image style ={styles.bannerImage} source={require('./assets/ApplegateBanner.jpg')}/>
        </View>
            <View>
                <View>
                    <Text >Username:</Text>
                    <TextInput value={this.state.username} onChangeText={(username) => this.setState({username})}></TextInput>
                </View>
                <View>
                    <Text>Password:</Text>
                    <TextInput value={this.state.password} onChangeText={(password)=>this.setState({password})}></TextInput>
                </View>
                <Button onPress={this.login} style={styles.loginButton} title='Login' backgroundColor='#e62e00'></Button>

            </View>
</View>
        )}      
}
const styles = StyleSheet.create({
    loginButton: {
        color: '#e62e00',
    }, bannerImage: {
        height: 150,
        width: "100%",
        marginTop: 35,
    },
    banner: {
      backgroundColor: "#fff",
      alignItems: "stretch",
    },


});
        
module.export = Account;
 