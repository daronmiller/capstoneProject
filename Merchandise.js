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
            <View style={styles.insideContainer}><ScrollView>
                <Card title="Shirt 1 (S, M, L, XL)" style={styles.card}>
                <Image source={require('./assets/merchandise/images/shirt1.jpg')} style={styles.shirtImage}></Image>
                <Text style={styles.priceText}>Price: $15 </Text>
                </Card>

                <Card title="Shirt 2 (S, M, L, XL)">
                <Image source={require('./assets/merchandise/images/shirt2.jpg')} style={styles.shirtImage}></Image>
                <Text style={styles.priceText}>Price: $15 </Text>
                </Card>

                <Card title="Shirt 3 (S, M, L, XL)">
                <Image source={require('./assets/merchandise/images/shirt3.jpg')} style={styles.shirtImage}></Image>
                <Text style={styles.priceText}>Price: $15 </Text>
                </Card>

                <Card title="Shirt 4 (S, M, L)">
                <Image source={require('./assets/merchandise/images/shirt4.jpg')} style={styles.shirtImage}></Image>
                <Text style={styles.priceText}>Price: $15 </Text>
                </Card>

                <Card title="Toothbrush">
                <Image source={require('./assets/merchandise/images/toothbrush.jpg')} style={styles.shirtImage}></Image>
                <Text style={styles.priceText}>Price: $5 </Text>
                </Card>
                
                


            </ScrollView></View>
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
        fontSize: 22,
        alignSelf: "center"
    },
insideContainer: {
    flex: 2,
    backgroundColor: '#e62e00',
    justifyContent: 'flex-start',
    paddingTop: 20,
    alignItems: 'stretch'
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
},
shirtImage: {
    flex: 1,
    width: "100%",
    height: 150,
    resizeMode: 'contain'
},
card: {
    width: "90%",
    height: 200
}
})
merchandise = require('./assets/merchandise/merchandise.json');