import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements'; 


export default class Merchandise extends React.Component{
 
    render(){
        return(
            
            <View style={styles.container}>
                <Card title={merchandise.item}>
                <Image source={require('./assets/merchandise/images/shirt_1.png')}></Image>
                <Text style={styles.priceText}>Price: ${/*merchandise.items[0].price*/} </Text>
                </Card>
                
                


            </View>
        )
    }
}
const styles = StyleSheet.create({
container: {
    backgroundColor: '#Ba0121',
    alignItems: 'center', 
    justifyContent: 'space-around'
},
priceText:{
        fontSize: 22
    }
})
merchandise = require('./assets/merchandise/merchandise.json');