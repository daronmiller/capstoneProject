import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements'; 

export default class Deals extends React.Component{
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
                <Card title="Teeth Whitening" style={styles.card}>
                <Image source={require('./assets/deals/teethWhitening.jpg')} style={styles.dealsImage}></Image>
                <Text style={styles.dealText}>Get 15% off a teeth whitening procedure for the entire month of March!</Text>
                </Card>

                <Card title="Six Month Smile Family BOGO" style={styles.card}>
                <View style={styles.beforeAfter}>
                <Image source={require('./assets/deals/6monthBefore.jpg')} style={styles.dealsImage2}></Image>
                <Image source={require('./assets/deals/6monthAfter.jpg')} style={styles.dealsImage2}></Image>
                </View>
                <Text style={styles.dealText}>Sign up for a 6 Month Smile Program with a family member to get 2 for the price of one!</Text>
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
dealText:{
        fontSize: 16,
        alignSelf: "center",
        paddingTop: 10
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
dealsImage: {
    flex: 1,
    width: "100%",
    height: 150,
    resizeMode: 'contain'
},
dealsImage2: {
    flex: 1,
    width: "48%",
    height: 120,
    resizeMode: 'contain'
},
card: {
    width: "90%",
    height: 200,
    alignItems: "center",
    justifyContent: "center"
},
beforeAfter: {
    flexDirection: "row"
}
})