import React from 'react'
import {View, StyleSheet} from 'react-native'
import axios from 'axios';

const WordDetail = ({route}) => {
    
    const word = route.params.word;
    const wordValue = word.name
    GetWordDetails(wordValue)

    return(
        <View style={styles.container}>
            <div> {wordValue}</div>
        </View>
    )
}


const GetWordDetails = (wordValue) => {

  const learnerKey ="46575f77-716a-4f9e-93d1-cd430642e1f9" 
  const getWordBaseUrl = 'https://www.dictionaryapi.com/api/v3/references/learners/json/'+wordValue
  console.log(getWordBaseUrl)
  axios.get(getWordBaseUrl, {
    params: {
      key: learnerKey
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

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