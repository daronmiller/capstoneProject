import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
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
            <Image style ={styles.topImage} source={require('./assets/office.jpg')}></Image>
                

            <View style={styles.insideContainer}>
            <View>
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

                <Text style={styles.text}>
                {"\n\n"}Hours: {"\n\n"}
                Monday         8:00 AM - 5:00 PM{"\n"}
                Tuesday        8:00 AM - 5:00 PM{"\n"}
                Wednesday  8:00 AM - 5:00 PM{"\n"}
                Thursday      8:00 AM - 5:00 PM{"\n"}
                Friday                    Closed{"\n"}
                Saturday               Closed{"\n"}
                Sunday                 Closed{"\n"}
                </Text>
                 
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
      insideContainer: {
        flex: 2,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        paddingTop: 20,
        alignItems: 'stretch'
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
        fontSize: 18,
        paddingLeft: 5
    },
    topImage: {
        width: "95%",
        height: 175,
        alignSelf: "center"
    },
    infoEntry: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20
    }
    })