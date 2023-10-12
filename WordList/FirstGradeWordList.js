import React from 'react'
import { View, StyleSheet } from 'react-native';

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



