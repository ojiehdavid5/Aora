import { View, Text,SafeAreaView,FlatList,Image,RefreshControl, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import {images} from '../../constants'
import {icons} from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import {getAllPosts,getLatestPosts,searchPosts} from '../../lib/appwrite'
// import { RefreshControl } from 'react-native-gesture-handler'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
import { useLocalSearchParams } from 'expo-router'


const Search = () => {
  const {query} = useLocalSearchParams();
 
  const {data:posts,refetch}=useAppwrite(searchPosts(query));
  useEffect(() => {
    refetch();
  
   
  }, [query])
  


  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
      data={posts}
      // data={[]}
      keyExtractor={(item)=>item.$id}
      renderItem={({item})=>(
        <VideoCard video={item}/>

      )}
      ListHeaderComponent={()=>(
        <View className='my-6 px-4 space-y-6'>
        <View className='justify-between items-start flex-row mb-6'>
        <View>
        <Text className='font-pmedium text-sm text-gray-100'>Search Result</Text>
        <Text className='text-2xl  font-psemibold text-white'>{query}</Text>
        </View>
        <View className='mt-1.5'>

          <Image
          source={icons.search}
          className='w-9 h-10'
          resizeMode='contain'
          
          />


        </View>
        
        </View>

        <SearchInput/>
        
        </View>
      )}

      ListEmptyComponent={()=>(
        <EmptyState
        title='No Videos  Found'
        subtitle='No videos created yet'
        
        />

      )}

      
      />
      <Text> Home</Text>
    </SafeAreaView>
  )
}

export default Search