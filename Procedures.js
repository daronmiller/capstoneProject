import React from 'react';
import {Text, ScrollView, StyleSheet, View, Image} from 'react-native';
import {Card} from 'react-native-elements';

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
                
            </Card>
            <Card title="Crowns and Bridges">
                <Text style={styles.infoText}>Crowns and bridges refer to the restoration of teeth using porcelain. Whether covering or capping a tooth (crown) or spanning areas of missing or extracted teeth (bridge), we can meet your needs in this area.</Text>
                
            </Card>
            <Card title="Teeth Straightening">
                <Text style={styles.infoText}>Straight teeth give you a great smile and self-confidence. Our office can work with you to explain the options we offer in this area.</Text>
                 
            </Card>
            <Card title="Porcelain Veneers">
                <Text style={styles.infoText}>Veneers are a cosmetic solution to change your smile by improving their color, size, or shape. Veneers can be done in 2 simple visits.</Text>
                 
            </Card>
            <Card title="Tooth Colored Fillings">
                <Text style={styles.infoText}>“White” fillings are done today because they are proven to be better for your teeth and they also look great.</Text>
            </Card>
            <Card title="Full Mouth Reconstruction">
                <Text style={styles.infoText}>A procedure that allows us to enhance and recreate a beautiful smile when
teeth are missing, severely broken, not straight or just not perfect. This procedure can be done in a few short visits (as seen on T.V. show, Extreme Makeover).</Text>
            </Card>
            <Card title="Sedation">
                <Text style={styles.infoText}>We offer oral and nitrous oxide (laughing gas) sedation to make you feel more relaxed in the dental chair.</Text>
            </Card>
            <Card title="Bridges">
                <Text style={styles.infoText}>A bridge is used to fill the space where a tooth has been previously. It fills in the spaces and restores your smile.</Text>
            </Card>
            <Card title="Crowns">
                <Text style={styles.infoText}>A crown or “cap” is the best solution to protect your teeth when you are at risk for fractures or breaks. Crowns can be done in 2 appointments.</Text>
            </Card>
            <Card title="Extractions">
                <Text style={styles.infoText}>Whether as a youngster or an adult – sometimes extractions are called for when a tooth has been damaged or decayed beyond repair. We strive to provide this service while insuring your comfort. If needed we can provide sedation services to assist in your comfort during this service.</Text>
            </Card>
            <Card title="Dentures & Partials">
                <Text style={styles.infoText}>Done to replace missing teeth to give you your beautiful smile back.</Text>
            </Card>
            <Card title="Root Canals">
                <Text style={styles.infoText}>When a tooth is in danger of future infection or severe decay, it can sometimes still be saved by performing a root canal.
Today root canal procedures are very efficient & painless. They can be done in one appointment and can save your smile.</Text>
            </Card>
            <Card title="Oral Surgery">
                <Text style={styles.infoText}>Most general dentists don’t offer these services to their guests. However, we do offer oral surgery in our office to save our patient’s time & money. We complete 95% of oral surgeries in our office.</Text>
            </Card>
            <Card title="Onlay/Inlay">
                <Text style={styles.infoText}>Procedure done to strengthen and protect the tooth with the least amount of tooth structure taken away. Onlay’s are much stronger than a regular filling.</Text>
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