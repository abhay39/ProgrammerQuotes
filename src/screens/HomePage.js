import {  StyleSheet,FlatList,  Text, TouchableOpacity, View, Image, ScrollView,  } from 'react-native'
import React, {  useLayoutEffect, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HomePage = () => {


  useLayoutEffect(()=>{
    fetchAPI()
  },[fetchAPI])

  const [random, setRandom] = useState('')
  const [quoteOfTheDay, setQuoteOfTheDay]=useState([])
  const [totalAuthors, setTotalAuthors]=useState('')
  

  const fetchAPI=()=>{
    fetch('https://programming-quotes-api.herokuapp.com/Quotes?count=0').then(response => response.json())
    .then(response =>{
        // results.push(response.)
        // console.log(response[0].author)
        // console.log(response[0].en)
        setQuoteOfTheDay(response)
    }).catch(err => console.error(err));

    fetch('https://programming-quotes-api.herokuapp.com/Quotes/random').then(response => response.json())
    .then(response =>{
        // results.push(response.)
        // console.log(response[0].author)
        // console.log(response[0].en)
        setRandom(response)
    }).catch(err => console.error(err));

    
}

// console.log(totalAuthors)


  return (
    <View style={{backgroundColor:'#2c2c6c',height:'100%',flex:1}}>
      <Text style={{fontSize:20,color:'white',fontWeight:'300',marginTop:5,textAlign:'center'}}>Random Quote</Text>
      <View style={{margin:20,marginTop:10,borderColor:'green',borderWidth:3,borderRadius:25,padding:5,alignItems:'center'}}  
              >
                <Text style={{fontSize:25,color:'white',fontWeight:'500',textAlign:'center',marginRight:20,marginLeft:20}} selectable={true}>"{random.en}"</Text>
                <Text style={{marginTop:10,fontSize:20,color:'white',fontWeight:'400',textAlign:'center',marginBottom:5}}>By: {random.author}</Text>
              </View>
        <Text style={{fontSize:23,color:'white',fontWeight:'800',marginTop:5,textAlign:'center',marginBottom:15}}>Total Quotes</Text>
        {/* <FlatList 
          data={quoteOfTheDay}
          renderItem={({item})=>{
            return(
              <View style={{margin:20,marginTop:10,borderColor:'green',borderWidth:3,borderRadius:25,padding:5,alignItems:'center'}}>
                <Text style={{fontSize:25,color:'white',fontWeight:'500',textAlign:'center',marginRight:20,marginLeft:20}} selectable={true}>"{item.en}"</Text>
                <View style={{alignItems:'center',marginTop:10}}
                  
                >
                    <FontAwesome name='user-circle-o' size={50} color="white" />
                    <Text style={{marginTop:10,fontSize:20,color:'white',fontWeight:'400',textAlign:'center',marginBottom:5}} selectable={true}>By: {item.author}</Text>
                </View>
              </View>
            )
          }}
        />  */}
        <ScrollView>
          {
            quoteOfTheDay.map((item, index)=>{
              return(
                <View key={index} style={{margin:20,marginTop:10,borderColor:'green',borderWidth:3,borderRadius:25,padding:5,alignItems:'center'}}>
                  <Text style={{fontSize:25,color:'white',fontWeight:'500',textAlign:'center',marginRight:20,marginLeft:20}} selectable={true}>"{item.en}"</Text>
                  <View style={{alignItems:'center',marginTop:10}}
                    
                  >
                      <FontAwesome name='user-circle-o' size={50} color="white" />
                      <Text style={{marginTop:10,fontSize:20,color:'white',fontWeight:'400',textAlign:'center',marginBottom:5}} selectable={true}>By: {item.author}</Text>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>

        {/* <FlatList 
          data={quoteOfTheDay}
          renderItem={({item})=>{
            return(
              <View style={{margin:20,marginTop:10,borderColor:'green',borderWidth:3,borderRadius:25,padding:5,alignItems:'center'}}>
                <Text style={{fontSize:25,color:'white',fontWeight:'500',textAlign:'center',marginRight:20,marginLeft:20}} selectable={true}>"{item.en}"</Text>
                <View style={{alignItems:'center',marginTop:10}}
                  
                >
                    <FontAwesome name='user-circle-o' size={50} color="white" />
                    <Text style={{marginTop:10,fontSize:20,color:'white',fontWeight:'400',textAlign:'center',marginBottom:5}} selectable={true}>By: {item.author}</Text>
                </View>
              </View>
            )
          }}
        /> */}

      
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({})