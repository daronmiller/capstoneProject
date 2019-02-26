 import React from 'react';
 import {Text, View,StyleSheet, Image, ScrollView, FlatList} from 'react-native';
 import {Card} from 'react-native-elements';
 import StaffPageData from './StaffPageData';
 import zData from "./assets/staff/staff.json"

 export default class StaffPage extends React.Component {

    /* getEmployeeData() {
         return ('./staff/staff.json')
         .then((response) => response.json())
         .then((responseJson)=>{
             this.setState({data: responseJson.employees});
            })
            .catch(error=>{
                console.error(error);
            });
         }*/
    //  componentDidMount() {
    //      //this.getEmployeeData();
    //      Font.loadAsync({
    //       'calibri': require('./assets/fonts/Calibri.ttf'),
    //     });
    //  }
     static navigationOptions = {
        header: null,
      };
     
     render() {
         return ( 
            <View style={styles.container}> 
            <View style={styles.banner}>
            <Image style ={styles.bannerImage} source={require('./assets/ApplegateBanner.jpg')}/>
            </View>
         <ScrollView ><FlatList
  data={zData}
  renderItem={({item}) => <View><Text>{item.name}</Text>
  <Image style={{width: 100}} source={{ uri: item.image_uri}}/>
  <Text>{item.email}</Text>
  
  </View>}
/>
           
         </ScrollView>
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
        backgroundColor: '#e62e00',
        justifyContent: 'flex-start',
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