import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import { Icon} from 'react-native-elements'


export default class InfoPage extends React.Component{
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
            <Image style ={styles.topImage} source={require('./assets/office.jpg')}></Image>

                
                <View style={styles.infoEntry}>
                <Icon 
                    name='phone'
                    type='entypo'
                    size={20}
                    color='#e62e00'
                />
                <Text style={styles.text}>
                (765) 747-9611
                </Text>
                </View>

                <View style={styles.infoEntry}>
                <Icon 
                    name='email'
                    type='entypo'
                    size={20}
                    color='#e62e00'
                />
                <Text style={styles.text}>
                greg.applegate.dds@gmail.com
                </Text>
                </View>

                <View style={styles.infoEntry}>
                <Icon 
                    name='location-pin'
                    type='entypo'
                    size={20}
                    color='#e62e00'
                />
                <Text style={styles.text}>
                3590 N. Briarwood Ln. • Muncie, IN 47304
                </Text>
                </View>

                <View style={styles.infoEntry}>
                <Text style={styles.hourEntry}>Hours:</Text>
                </View>

                <View style={styles.hours}>
                
                <Text style={styles.hourEntry}>
                Monday{"\n"}
                Tuesday{"\n"}
                Wednesday{"\n"}
                Thursday{"\n"}
                Friday{"\n"}
                Saturday{"\n"}
                Sunday{"\n"}
                </Text>
                <Text style={styles.hourEntry}>
                8:00 AM - 5:00 PM{"\n"}
                8:00 AM - 5:00 PM{"\n"}
                8:00 AM - 5:00 PM{"\n"}
                8:00 AM - 5:00 PM{"\n"}
                Closed{"\n"}
                Closed{"\n"}
                Closed{"\n"}
                </Text>
                </View>
                
                


            </View></ScrollView></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e62e00',
        justifyContent: 'flex-start',
      },
      insideContainer: {
        flex: 2,
        backgroundColor: '#e62e00',
        justifyContent: 'space-between',
        paddingTop: 20,
        alignItems: 'center'
      },
    bannerImage: {
        height: 150,
        width: "100%",
        marginTop: 35,
    },
    banner: {
      backgroundColor: "#fff",
      alignItems: "stretch",
    },
    text: {
        fontSize: 16,
        paddingLeft: 5,
        textAlign: "center",
    },
    topImage: {
        width: "90%",
        height: 175,
        alignSelf: "center"
    },
    infoEntry: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        width: "90%",
    },
    hours: {
        flexDirection: "row",
        paddingTop: 20,
        backgroundColor: "#fff",
    },
    hourEntry: {
        width: "45%",
        fontSize: 18,
        textAlign: "center",
    }
    })