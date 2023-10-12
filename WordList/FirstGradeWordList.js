import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FirstGradeWordList = ({navigation}) => {
      const mapWord = words.map(word=> <li key={word.id} onClick={() => navigation.navigate("Word Details", {word})}>{word.name}</li>)

      return (
        <View style={styles.container} >
          <ul>{mapWord}</ul>
        </View>
      );
  }
    
  const words = [
    {id: 0, name: 'age'},
    {id: 1, name: 'appear'},
    {id: 2, name: 'artist'},
    {id: 3, name: 'autumn'},
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default FirstGradeWordList



