import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text testID={"my text"} accessibilityLabel={"my text"} accessible={true} style={styles.text}>
          Appium Problem - 0.49.3
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
