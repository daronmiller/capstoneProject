import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {Card} from 'react-native-elements';
 export default class Procedures extends React.Component{
     render(){
         return(
             <ScrollView >
             <View style={styles.container}>
            <Card title="Tooth Whitening">
                <Text>Teeth Whitening or “bleaching” is a safe, effective procedure to whiten and brighten your teeth and make you look years younger.</Text>
            </Card>
            <Card title="Crowns and Bridges">
                <Text>Crowns and bridges refer to the restoration of teeth using porcelain. Whether covering or capping a tooth (crown) or spanning areas of missing or extracted teeth (bridge), we can meet your needs in this area.</Text>
            </Card>
            <Card title="Teeth Straightening">
                <Text>Straight teeth give you a great smile and self-confidence. Our office can work with you to explain the options we offer in this area.</Text>
            </Card>
            <Card title="Porcelain Veneers">
                <Text>Veneers are a cosmetic solution to change your smile by improving their color, size, or shape. Veneers can be done in 2 simple visits.</Text>
            </Card>

            <Card title="Tooth Colored Fillings">
                <Text>Veneers are a cosmetic solution to change your smile by improving their color, size, or shape. Veneers can be done in 2 simple visits.</Text>
            </Card>
            </View>
            </ScrollView>


         )
     }
 }
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#Ba0121',
      alignItems: 'center',
      justifyContent: 'space-around',
    },});