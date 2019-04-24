import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image, FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import dData from "./assets/deals.json";

export default class Deals extends React.Component{
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
          'https://api.jsonbin.io/b/5cc0c65ac40c99367a06949e/latest'
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
                    data={this.state.data}
                    renderItem={({item}) => 
                    <Card title={item.title} style={styles.card}>
                    <Image style={styles.dealsImage} source={{uri: item.url}}/>
                    <Text style={styles.dealText}>{item.info}</Text>
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
dealText:{
        fontSize: 16,
        alignSelf: "center",
        paddingTop: 10
    },
insideContainer: {
    flex: 2,
    backgroundColor: '#e62e00',
    justifyContent: 'flex-start',
    paddingTop: 20,
    alignItems: 'stretch'
  },
containerBanner: {
    flex: 1,
    backgroundColor: '#Ba0121',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column'
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
dealsImage: {
    flex: 1,
    width: "100%",
    height: 150,
    resizeMode: 'contain'
},
dealsImage2: {
    flex: 1,
    width: "48%",
    height: 120,
    resizeMode: 'contain'
},
card: {
    width: "90%",
    height: 200,
    alignItems: "center",
    justifyContent: "center"
},
beforeAfter: {
    flexDirection: "row"
}
})