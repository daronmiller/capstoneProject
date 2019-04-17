import React from 'react';
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity, ScrollView } from 'react-native';
import {Card} from 'react-native-elements'; 

export default class CareCredit extends React.Component{
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
               
                <View style={styles.care}>
                <TouchableOpacity style={styles.touch} onPress={()=>{Linking.openURL('https://www.carecredit.com/apply/confirm.html?encm=AGFXbgZkUzYBPQVhUmYPZgM5A2JWM1VjUzJWZlQ8U24&sitecode=B3CALAdToolkitANCardDental');}}>
                <Image source={require('./assets/CareCreditApply.png')} style={styles.image}  ></Image>
                </TouchableOpacity>
                </View>

                <View style={styles.care}>
                <TouchableOpacity style={styles.touch} onPress={()=>{Linking.openURL('https://www.carecredit.com/Pay/TWM234/&sitecode=B3CPLAdToolkitPMPCard');}}>
                <Image source={require('./assets/CareCreditPay.png')} style={styles.image2}></Image>
                </TouchableOpacity>
                </View>
                

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
care: {
    width: "95%",
    height: 225,
    alignItems: "center",
    backgroundColor: '#fff',
},
insideContainer: {
    flex: 2,
    backgroundColor: '#e62e00',
    justifyContent: 'flex-start',
    paddingTop: 20,
    alignItems: 'center'
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
image: {
    width: "100%",
    height: 150,
    resizeMode: 'contain'
},
image2: {
    width: "100%",
    height: 225,
    resizeMode: 'contain'
},
touch: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
}
})