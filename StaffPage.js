 import React from 'react';
 import {Text, View,StyleSheet, Image, ScrollView} from 'react-native';
 import {Card} from 'react-native-elements';
 import StaffPageData from './StaffPageData'

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
         }
     componentDidMount() {
         this.getEmployeeData();
     }*/
     static navigationOptions = {
        header: null,
      };
     
     render() {
         return ( 
            <View style={styles.container}> 
            <View style={styles.banner}>
            <Image style ={styles.bannerImage} source={require('./assets/ApplegateBanner.jpg')}/>
            </View>
         <ScrollView ><View style={styles.insideContainer}>
         <Card title="Dr. Greg Applegate"style={styles.cardStyling}>
         <Image style ={styles.imageStyling} source={require('./assets/staff/images/Dr_Applegate.jpg')}/>
         <Text style={styles.bioText}>Dr. Greg Applegate is a native of Yorktown and graduated from Yorktown High School. He obtained his Bachelor of Science Degree from Ball State University and his Doctor of Dental Surgery Degree from Indiana University School of Dentistry.</Text>
         
         </Card>
         <Card title="Kylie"style={styles.cardStyling}>
         
         <Image style ={styles.imageStyling} source={require('./assets/staff/images/Employee_Kylie.jpg')}/>
         <Text style={styles.bioText}>Kylie is an Expanded Duties Dental Assistant and has worked for Dr. Applegate for 6 years. Kylie is a graduate of Delta High School, and continued her education at Ball State University. In her free time she enjoys spending time with her husband and her 1 year old son. She also enjoys coaching Munciana Volleyball.</Text>
         
         </Card></View></ScrollView>
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