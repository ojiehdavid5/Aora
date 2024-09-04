import { View, Text,SafeAreaView,ScrollView,Image } from 'react-native'
import React from 'react'
import {images} from '../../constants'

const AuthLayout = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='justify-center w-full  h-full px-4 my-6'>
          <Image
          source={images.logo}
          resizeMode='contain'
          className='w-[115px] h-[35px]'
          
          />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
            Log in to Aora
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AuthLayout