import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card><Text>Meet our Staff</Text></Card>
        <Card><Text>Applegate Apparel</Text></Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
