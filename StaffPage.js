 import React from 'react';
 import {Text, View,StyleSheet, Image, ScrollView, FlatList} from 'react-native';
 import {Card} from 'react-native-elements';
 import sData from "./assets/staff.json";


 export default class StaffPage extends React.Component {
     static navigationOptions = {
        header: null,
      };

      state = {
        data: []
    };
    
    componentDidMount(){
        this.fetchData();
    };

    fetchData = async () => {
        const response = await fetch(
          'https://api.jsonbin.io/b/5cc0c92a2ac8ec3696969235/latest'
        , {method: 'GET',
        headers: {
            'secret-key': '$2a$10$yiF1mE1laI4/fNgFqptCveTu4B9dyUEmTSDS5gx7hczLUmMDKF/4u'
        }});
    
        const json = await response.json();
        this.setState({ data: json });
      };
     
     render() {
         return ( 
            <View style={styles.container}> 
            <View style={styles.banner}>
            <Image style ={styles.bannerImage} source={require('./assets/ApplegateBanner.jpg')}/>
            </View>
            <View style={styles.insideContainer}><ScrollView >
            <FlatList
                    data={this.state.data}
                    renderItem={({item}) => 
                    <Card title={item.name} style={styles.cardStyling}>
                    <Image style={styles.imageStyling} source={{uri: item.url}}/>
                    <Text style={styles.bioText}>{item.bio}</Text>
                    </Card>}
                />
         
        </ScrollView></View>
         
         </View>
         )
     }
 }
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e62e00',
        justifyContent: 'flex-start',
      },
    bioText:{
        flexWrap: 'wrap',
        paddingTop: 10
        //fontFamily: "calibri"
    },
    containerBanner: {
        flex: 1,
        backgroundColor: '#e62e00',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    insideContainer: {
      flex: 2,
      backgroundColor: '#e62e00',
      justifyContent: 'flex-start',
      alignItems: 'stretch'
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
  imageStyling: {
    flex: 1,
    width: "100%",
    height: 150,
    resizeMode: 'contain'
  },
  cardStyling: {
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  }
});

 module.export = StaffPage;