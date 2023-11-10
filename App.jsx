/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Home from './src/screens/home/home'
import Card from './src/components/card/card'
import React, { Component, useEffect } from 'react'
import { Image,ScrollView, Text, View,Platform ,StyleSheet, TextInput, Button, Touchable, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native'
import { useState } from 'react'
import Footer from './src/components/footer/footer'
// import appStyle from './style'
export default function App() {
  const [count,setCount]=useState(0)
  const [userName,setUserName]=useState("")
  const [todos,setTodos]=useState([])
  const [loader,setLoader]=useState(false)
  const doIncrement=()=>{
    setCount(count+1)
  }
  const doDecrement=()=>{
    setCount(count-1)
  }
  const inputHandler=(text)=>{
      setUserName(text)
  }
  const fetchProducts=async()=>{
    setLoader(true)
     let data=await fetch('https://dummyjson.com/todos');
     const result=await data.json()
     console.log(result.todos)
     setTodos(result.todos)
     setLoader(false)
     return result
  }
  useEffect(()=>{
    fetchProducts()
  },[])
  const CardComponent=Platform.OS==="ios"?Footer:Card
     console.log("platform.ios",Platform.OS)
    return (
      
      <ScrollView >
        <CardComponent/>
        <Home title="A react native course"/>
        <TextInput onChangeText={inputHandler} style={{height:40,borderColor:'gray',backgroundColor:'white',borderWidth:1}} placeholder='hello' defaultValue='lkljsdfkljklj'/>
        <Text style={appStyle.header}>pakistan zindabad </Text>
        <Text style={{fontSize:20,color:"white",backgroundColor:"blue"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, saepe aspernatur suscipit in ipsa enim id vel cupiditate recusandae iure at facilis accusamus natus quos culpa facere illo exercitationem qui!</Text>
        <Card number={count}/>
        <Footer/>
        <Button  onPress={doIncrement} title='add +'/>
        <Button  onPress={doDecrement} title='sub -'/>
         <Text>{userName}</Text>
         <TouchableOpacity onPress={fetchProducts} style={{backgroundColor:'green',padding:10,width:100,borderRadius:20}}>
          <Text>Fetch Products</Text>
         </TouchableOpacity>
         
          {loader?<ActivityIndicator/>:<FlatList data={todos} renderItem={
            ({item})=>{
                return <View >
                  <Text>{item.id}</Text>
                  <Text>{item.todo}</Text>
                </View>
              }
          }/>
          // todos?.map((item,i)=>{
          //   return <View key={i}>
          //     <Text>{item.id}</Text>
          //     <Text>{item.todo}</Text>
          //   </View>
          // })
    }
         
          </ScrollView>
     
     
    )
  }
  const appStyle=StyleSheet.create({
    header:{
        backgroundColor:'yellow',
        marginTop: Platform.OS=="ios"?20:0,

    },
    footer:{
        backgroundColor:'aqua'
    }
})

