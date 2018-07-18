import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import JournalsScreen from './components/Journals';
import AddJournalScreen from './components/AddJournalScreen';
import Journal from './components/Journal';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator(
  {
    journals: { screen: JournalsScreen, navigationOptions: { header: null } },
    journal: { screen: Journal, navigationOptions: { header: null } },
    addJournalScreen: { screen: AddJournalScreen, navigationOptions: { title: 'Add journal' } },
  },   
  {
    initialRouteName: 'journals',
  },
  { 
    header: {
      visible:false 
    }
  }
);
