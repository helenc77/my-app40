import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';

var something = 'an apple';

enableScreens();
componentDidMount();

function HomeScreen({ navigation }) {
	
	return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
	  <Text style={styles.textbox}>{something}</Text> 
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    backgroundColor: '#ccc',
	width: '50%',
  },
});

function componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/todos')
	  .then((response) => response.json())
	  .then((responseJson) => {
			//alert(responseJson[0].title);
			something = 'a pear';
			//console.log(responseJson[0].title);
			console.log(something);
			return true;
			//return JSON.stringify(responseJson);
	  })
	  .catch((error) =>{
		console.error(error);
	  });
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
		<Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
