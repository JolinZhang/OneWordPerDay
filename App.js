import React from 'react'
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstGradeWordList from './WordList/FirstGradeWordList';
import WordDetails from './Word/WordDetails';


function HomeScreen({navigation}) {
   
  const mapGrade = grades.map(grade => <li key={grade.id} onClick={() => navigation.navigate(grade.name)}>{grade.name}</li>);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container} >
      <ul>
        {mapGrade}
      </ul>
    </View>
  );
}

const grades = [
  {id: 0, name:'Prekindergarten'},
  {id: 1, name:'Kindergarten'},
  {id: 2, name:'First Grade'},
  {id: 3, name:'Second Grade'},
  {id: 4, name:'Third Grade'},
  {id: 5, name:'Forth Grade'},
  {id: 6, name:'Fifth Grade'},
  {id: 7, name:'Sixth Grade'},
  {id: 8, name:'Seventh Grade'}
];


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="First Grade" component={FirstGradeWordList} />
        <Stack.Screen name="Word Details" component={WordDetails} options={({ route }) => ({ title: route.params.word.name })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;