import React from 'react';
import {Text, ScrollView, StyleSheet, View, Image, Dimensions} from 'react-native';
import {Card} from 'react-native-elements';
import { Video } from 'expo';
 export default class Procedures extends React.Component{
    static navigationOptions = {
        header: null,
      }; 
    render(){
         return(
             <View style={styles.container}>
             <View style={styles.banner}>
            <Image style ={styles.bannerImage} source={require('./assets/ApplegateBanner.jpg')}/>
            </View>

             <ScrollView><View style={styles.insideContainer}>
            <Card title="Tooth Whitening">
                <Text style={styles.infoText}>Teeth Whitening or “bleaching” is a safe, effective procedure to whiten and brighten your teeth and make you look years younger.</Text>
                <Video
	                source={{uri:'https://storage.googleapis.com/coverr-main/mp4/Tel-Aviv-Beach.mp4'}}
	                resizeMode="contain"
                    isLooping
                    useNativeControls
	                style={{ width:"100%", height: 300 }}
	                />
            </Card>
            <Card title="Crowns and Bridges">
                <Text style={styles.infoText}>Crowns and bridges refer to the restoration of teeth using porcelain. Whether covering or capping a tooth (crown) or spanning areas of missing or extracted teeth (bridge), we can meet your needs in this area.</Text>
                <Video
	                source={{uri:'https://storage.googleapis.com/coverr-main/mp4/4X4-in-Vinyard.mp4'}}
	                resizeMode="contain"
                    isLooping
                    useNativeControls
	                style={{ width:"100%", height: 300 }}
	                />
            </Card>
            <Card title="Teeth Straightening">
                <Text style={styles.bioText}>Straight teeth give you a great smile and self-confidence. Our office can work with you to explain the options we offer in this area.</Text>
            </Card>
            <Card title="Porcelain Veneers">
                <Text style={styles.bioText}>Veneers are a cosmetic solution to change your smile by improving their color, size, or shape. Veneers can be done in 2 simple visits.</Text>
            </Card>

            <Card title="Tooth Colored Fillings">
                <Text style={styles.bioText}>Veneers are a cosmetic solution to change your smile by improving their color, size, or shape. Veneers can be done in 2 simple visits.</Text>
            </Card>
            </View></ScrollView>
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
    containerBanner: {
        flex: 1,
        backgroundColor: '#e62e00',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    insideContainer: {
        backgroundColor: '#e62e00',
        justifyContent: 'flex-start',
      },
    banner: {
        backgroundColor: "#fff",
        alignItems: "stretch",
      },
      cardStyling: {
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    
      },
      bannerImage: {
        height: 145,
        width: "100%",
        marginTop: 35,
    },
    infoText: {
      alignSelf: "center",
      paddingBottom: 10
    }
});