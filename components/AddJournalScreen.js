import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';

export default class AddJournalScreen extends Component {

  render() {
    const {height, width} = Dimensions.get('window');

    return (
      <View style={{flex:1}}>
        <ScrollView>
        </ScrollView>
      </View>
    )
  }
}
