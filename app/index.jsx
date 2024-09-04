import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import React from 'react'
import {Slot,Link} from "expo-router"



const RootLayout = () => {
  return (
    <>
    <View style={styles.container}>

    <Text className='text-5xl '>Aora</Text>
    <StatusBar style="auto"/>
    <Link href="/home"> 
    Go to home
    
    </Link>

        
    </View>

    </>

  )
  
}

export default RootLayout  

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'#fff'


    }
})
