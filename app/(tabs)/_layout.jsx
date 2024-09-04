import { View, Text,Image } from 'react-native'
import React from 'react'
import {Tabs,Redirect} from 'expo-router';
import {icons} from '../../constants';

const TabIcon=({ icon,color,name,focused })=>{
  return(
    <View className="justify-center items-center gap-20">
      <Image source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6  h-6"
      
      />
      <Text >{name}</Text>

    </View>
  )
}

const TabsLayout = () => {
  return (
   <>
   <Tabs
   screenOptions={{
    tabBarShowLabel:false
   }}
   
   >
    <Tabs.Screen
     name='home'
     options={{
        title: 'Home',
        headerShown:false,
        tabBarIcon:({ color,focused})=>(
<TabIcon
icon={icons.home}
color={color}
name="Home"
focused={focused}
className="w-6 h-6"


/>
        )
     }}
    
    />
   </Tabs>
   </>
  )
}

export default TabsLayout