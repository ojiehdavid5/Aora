import { View, Text,SafeAreaView,FlatList,Image } from 'react-native'
import React from 'react'
import {images} from '../../constants'
import SearchInput from '../../components/SearchInput'

const Home = () => {
  return (
    <SafeAreaView className='bg-primary'>
      <FlatList
      data={[{id:1},{id:2},{id:3}]}
      keyExtractor={(item)=>item.$id}
      renderItem={({item})=>(
        <Text className='text-4xl'>{item.id}</Text>

      )}
      ListHeaderComponent={()=>(
        <View className='my-6 px-4 space-y-6'>
        <View className='justify-between items-start flex-row mb-6'>
        <View>
        <Text className='font-pmedium text-sm text-gray-100'>Welcome back</Text>
        <Text className='text-2xl  font-psemibold text-white'>CHUKS</Text>
        </View>
        <View className='mt-1.5'>
          <Image
          source={images.logoSmall}
          className='w-9 h-10'
          resizeMode='contain'
          
          />


        </View>
        
        </View>

        <SearchInput/>
        <View className='w-full flex-1 pt-5 pb-8'>
          <Text className='text-gray-100 text-lg font-pregular'>
            Lastest videos

          </Text>

        </View>
          
        </View>
      )}
      
      />
      <Text> Home</Text>
    </SafeAreaView>
  )
}

export default Home