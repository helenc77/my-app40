import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, FlatList, ActivityIndicator, Text, View, AppRegistry, Image, TextInput, Button} from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

//import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
	
	var something = componentDidMount(); 
	//var myObject = JSON.parse(something);
	//var something3 = myObj; 
	var something2 = 'myapp'; 

	
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your {something2}!</Text> 
	  <Text>Hello World!</Text> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((responseJson) => {
			//alert(responseJson[0].title);
			//return responseJson;
			return JSON.stringify(responseJson);
      })
      .catch((error) =>{
        console.error(error);
      });
  }