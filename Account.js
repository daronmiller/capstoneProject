import React from 'react';
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity, TextInput } from 'react-native';
import { Card, ListItem,Button, Icon, Header } from 'react-native-elements'
import {createStackNavigator, createAppContainer} from 'react-navigation';

var users = { 
    "user1"  :  "123", 
    "user2"   :  "Shark", 
    "user3"      :  'talk' 
  }
export default class Account extends React.Component {
    static navigationOptions = {
        header: null,
      };
    constructor(props){
        super(props);
        this.state={
            username: '',
            password:''
        }
    }
    
    login = () =>{
            if(this.state.username in users && this.state.password===users[this.state.username]){
                
                alert('Login successful');
                this.props.navigation.navigate("AccountDash");

            }else{
                alert('Incorrect username or password')
            }        
    }


    render() {
        return (
            <View style={styles.container}>
        <View style={styles.banner}>
          <Image style ={styles.bannerImage} source={require('./assets/ApplegateBanner.jpg')}/>
        </View>
            <View>
                <View style={styles.input}>
                    <Text style={styles.label}>Username:</Text>
                    <TextInput style={styles.textField} autoCapitalize='none' value={this.state.username} onChangeText={(username) => this.setState({username})}></TextInput>
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput style={styles.textField} autoCapitalize='none' secureTextEntry={true} value={this.state.password} onChangeText={(password)=>this.setState({password})}></TextInput>
                </View>
                <View style={{paddingTop: 20}}>
                <Button backgroundColor= '#e62e00' style={styles.loginButton} onPress={this.login}  title='Login'></Button>
                </View>
            </View>
</View>
        )}      
}
const styles = StyleSheet.create({
    loginButton: {
        width: "90%",
        height: 80,
        alignSelf: "center"
    }, bannerImage: {
        height: 150,
        width: "100%",
        marginTop: 35,
    },
    banner: {
      backgroundColor: "#fff",
      alignItems: "stretch",
      paddingTop: 100
    },
    input: {
        flexDirection: "row",
        height: 50,
        paddingTop: 10,
        paddingLeft: 5,
        justifyContent: "flex-start"
    },
    label: {
        width: "20%",
        paddingTop: 10
    },
    textField: {
        width: "75%",
        backgroundColor: "#faf1f1",
    }

});
        
module.export = Account;