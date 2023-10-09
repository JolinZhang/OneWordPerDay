import React from 'react'

const FirstGradeWords = () => {
      return (
        <View >
          <ul>{wordItem}</ul>
        </View>
      );
  }
    
  const words = [
    {id: 0, name: 'age'},
    {id: 1, name: 'appear'},
    {id: 2, name: 'artist'},
    {id: 3, name: 'autumn'},
  ];

  const wordItem = words.map(word=> <li key={word.id}>{word.name}</li>)

  export default FirstGradeWords



