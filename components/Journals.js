import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import JournalCard from './JournalCard';
import { Icon } from 'react-native-elements'

const journals = [
  {
    id: 1,
    image: require('../assets/1.jpg'),
    title: 'Barnets bog',
    description: 'Laurits'
  },
  {
    id: 2,
    image: require('../assets/2.jpg'),
    title: 'Barnets bog',
    description: 'Laura Mai',
  },
  {
    id: 3,
    image: require('../assets/3.jpg'),
    title: 'Thailand',
    description: 'Sommeren 2017',
  }
]

export default class JournalsScreen extends Component {
  onAddJournal = () => {
    console.log('navigate');
    this.props.navigation.navigate('addJournalScreen');
  }

  onJournalPress = (id) => {
    console.log('onJournalPress', id);
    this.props.navigation.navigate('timeline', {id});
  };

  render() {
    const {height, width} = Dimensions.get('window');

    return (
      <View style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {journals.map(({id, image, title, description}) => {
            return <JournalCard key={id} image={image} title={title} description={description} onPress={this.onJournalPress.bind(this, id)}/>
          })}
        </ScrollView>
        <Icon name='add' onPress={this.onAddJournal} reverse raised containerStyle={{backgroundColor: '#2c9cdb', position: 'absolute', right: 13, bottom: 3}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 10
  }
});
