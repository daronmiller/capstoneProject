import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header
        leftComponent={{icon: 'menu',}}
        centerComponent={{text: 'Applegate Family Dentistry'}}
        rightComponent={<Button title="Login"></Button>}
        />

      
      <Card title="Special Deals" style={styles.cardStyling}>
        <Text>Check out what specials and discounts we're offering on procedures</Text>
        <Button raised= {true} title="Meet our staff"></Button>
          
        </Card>
        <Card title="Staff Biographies"style={styles.cardStyling}>
          <Image style ={styles.imageStyling} source={require('./assets/staff/images/Dr_Applegate.jpg')}/>
          <Text>Meet the wonderful staff at Applegate Family Dentristry</Text>
          <Button title="Read Staff Biographies"></Button>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cardStyling: {
    backgroundColor: '#ef2f24',
    textAlign: 'center',
    fontSize: 54

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
