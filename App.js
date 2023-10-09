import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen() {
  return (
    <View style={styles.container}>
    <ul>{gradeItem}</ul>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
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

const gradeItem = grades.map(grade => <li key={grade.id}>{grade.name}</li>);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;