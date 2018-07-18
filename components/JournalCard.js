import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default class JournalCard extends Component {
  render() {
    const { image, title, description } = this.props;

    return(
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}
        testID="Accounts_MyCardTool"
      >
        <ImageBackground
          source={image}
          style={styles.background}
          imageStyle={{ borderRadius: 10, opacity: 0.4 }}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,    
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
  }
});