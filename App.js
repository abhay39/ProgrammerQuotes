import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './src/screens/HomePage'


const Stack=createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#2c2c6c'} barStyle={'light-content'} />
      <Stack.Navigator
        screenOptions={{
          headerStyle:[{backgroundColor:'#2c2c6c'}],
          headerTintColor:'#fff',
          headerTitleStyle:{fontFamily:'Times New Roman',fontWeight:'900',fontSize:25}
        }}
      >
        <Stack.Screen name='Home' component={HomePage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})