import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements'; 

export default class Merchandise extends React.Component{
    static navigationOptions = {
        header: null,
      };

    render(){
        return(
            <View style={styles.container}>
            <View style={styles.banner}>
            <Image style ={styles.bannerImage} source={require('./assets/ApplegateBanner.jpg')}/>
            </View>
            <View style={styles.insideContainer}>
                <Card title={merchandise.item}>
                <Image source={require('./assets/merchandise/images/shirt_1.png')}></Image>
                <Text style={styles.priceText}>Price: ${merchandise.price} </Text>
                </Card>
                
                


            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
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
    banner: {
        backgroundColor: "#fff",
        alignItems: "stretch",
      },
bannerImage: {
    height: 145,
    width: "100%",
    marginTop: 35,
}
})
merchandise = require('./assets/merchandise/merchandise.json');