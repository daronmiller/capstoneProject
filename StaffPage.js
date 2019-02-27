 import React from 'react';
 import {Text, View,StyleSheet, Image, ScrollView, FlatList} from 'react-native';
 import {Card} from 'react-native-elements';
 import zData from "./assets/staff/staff.json";

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
         <ScrollView ><View style={styles.insideContaine}>
         {/* <FlatList
  data={zData}
  renderItem={({item}) => 
  <Card title={item.name} style={styles.cardStyling}>
  <Image style={styles.imageStyling} source={{uri: './assets/ApplegateBanner.jpg'}}/>
  <Text>Contact: {item.email}</Text>
  <Text style={styles.bioText}>{item.bio}</Text>
  </Card>}
/> */}
        <Card title="Dr. Greg Applegate" style={styles.cardStyling}>
        <Image style={styles.imageStyling} source={require('./assets/staff/images/Dr_Applegate.jpg')}/>
        <Text style={styles.bioText}>Dr. Greg Applegate is a native of Yorktown and graduated from Yorktown High School. He obtained his Bachelor of Science Degree from Ball State University and his Doctor of Dental Surgery Degree from Indiana University School of Dentistry. After graduating from dental school, Dr. Applegate returned to Muncie to set up his dental practice along with his wife Amy and their three children. Dr. Applegate has proven to excel in a higher standard of patient care and cosmetic dentistry. Through his vision and commitment to advanced education and continued patient care, Dr. Applegate offers his patient’s dentistry of the future.</Text>
        </Card>

        <Card title="Kylie" style={styles.cardStyling}>
        <Image style={styles.imageStyling} source={require('./assets/staff/images/Employee_Kylie.jpg')}/>
        <Text style={styles.bioText}>Kylie is an Expanded Duties Dental Assistant and has worked for Dr. Applegate for 6 years. Kylie is a graduate of Delta High School, and continued her education at Ball State University. In her free time she enjoys spending time with her husband and her 1 year old son. She also enjoys coaching Munciana Volleyball.</Text>
        </Card>

        <Card title="Tasha" style={styles.cardStyling}>
        <Image style={styles.imageStyling} source={require('./assets/staff/images/Employee_Tasha.jpg')}/>
        <Text style={styles.bioText}>Tasha  is our Office Manager who has recently joined Dr. Applegate and his staff. She is a graduate of Monroe Central High School. In her free time she enjoys spending time with her husband, her 15 year old son, and her 11 year old daughter.</Text>
        </Card>
        </View>
         </ScrollView>
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