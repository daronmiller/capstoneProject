import React from 'react';
import {Text, View, ScrollView, StyleSheet, FlatList, Image} from 'react-native';
import {Card} from 'react-native-elements';


export default class Merchandise extends React.Component{
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
          'https://api.jsonbin.io/b/5cc0cb0cc40c99367a069627/latest'
        , {method: 'GET',
        headers: {
            'secret-key': '$2a$10$yiF1mE1laI4/fNgFqptCveTu4B9dyUEmTSDS5gx7hczLUmMDKF/4u'
        }});
    
        const json = await response.json();
        this.setState({ data: json });
      };

    render(){
        return(
            <View style={styles.container}>
            <View style={styles.banner}>
            <Image style ={styles.bannerImage} source={require('./assets/ApplegateBanner.jpg')}/>
            </View>
            <View style={styles.insideContainer}><ScrollView>
                 <FlatList
                    data= {this.state.data}
                    renderItem={({item}) => 
                    <Card title={item.description} style={styles.card}>
                    <Image style={styles.shirtImage} source={{uri: item.url}}/>
                    <Text style={styles.priceText}>{item.price}</Text>
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
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
},
priceText:{
        fontSize: 22,
        alignSelf: "center"
    },
insideContainer: {
    flex: 2,
    backgroundColor: '#e62e00',
    justifyContent: 'flex-start',
    paddingTop: 20,
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
shirtImage: {
    flex: 1,
    width: "100%",
    height: 300,
    resizeMode: 'contain'
},
card: {
    width: "90%",
    height: 200
}
})
