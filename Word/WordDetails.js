import React from 'react'
import {View, StyleSheet} from 'react-native'

const WordDetail = ({route}) => {
    
    const word = route.params.word;
    return(
        <View style={styles.container}>
            <div> {JSON.stringify(word.name)}</div>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default WordDetail