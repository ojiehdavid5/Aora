import { StyleSheet, Text, View ,StatusBar,SafeAreaView, ScrollView,Image} from 'react-native'
import React from 'react'
import {Slot,Link} from "expo-router"
import { images}   from "../constants/";
import CustomButton from "../components/CustomButton"
import {Redirect ,router} from 'expo-router';



const RootLayout = () => {
  return (

   

        
<SafeAreaView className="bg-primary h-full">
  <ScrollView contentContainerStyle={{height: '100%'}}>
    <View className='w-full items-center  h-full px-4'>
<Image 
source={images.logo}
className="w-[130px] h-[84px]"
resizeMode='contain'

/>
<Image
source={images.cards}
className="max-w-[380px] w-full h-[300px]"
resizeMode='contain'

/>

<View className='relative mt-9'>
  <Text className='text-4xl text-white font-bold  text-center'>
Discover Endless Possiblities  With{' '} <Text className='text-secondary-200'>Aora</Text>
  </Text>
  <Image 
  source={images.path}
  className='w-[136px] h-[15px] absolute  -bottom-2 -right-2'
  resizeMode='contain'
  
  />

</View>

<Text className='text-center  text-gray-100  mt-7  text-sm font-pregular'> Where creativity meets innovation:embark on a journey of limitless exploration  with Aora</Text>

<CustomButton
title='Continue With Email'
handlePress={()=>router.push('./sign-in')}
containerStyles='w-full mt-7'

/>
    </View>
  </ScrollView>
  <StatusBar
  backgroundColor='#161622'
  style='dark'
  />
    
</SafeAreaView>

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
