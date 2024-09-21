import { View, Text,SafeAreaView,FlatList,Image,RefreshControl, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import {images} from '../../constants'
import {icons} from '../../constants'
import SearchInput from '../../components/SearchInput'
// import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import {searchPosts} from '../../lib/appwrite'
// import { RefreshControl } from 'react-native-gesture-handler'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
import { useLocalSearchParams } from 'expo-router'


const Search = () => {
  const {query} = useLocalSearchParams();
 
  // const {data:posts,refetch}=useAppwrite(() => searchPosts(query));
  const {data:posts,refetch} = useAppwrite(()=>searchPosts(query))

  console.log(query,posts);
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
        <View className='my-6 px-4 '>
        <Text className='font-pmedium text-sm text-gray-100'>Search Result</Text>
        <Text className='text-2xl  font-psemibold text-white'>{query}</Text>

        <View className='mt-6 mb-8'>
        <SearchInput  initialQuery={query}/>

        </View>



        


        
        </View>
      )}

      ListEmptyComponent={()=>(
        <EmptyState
        title='No Videos  Found'
        subtitle='No videos found for this query'
        
        />

      )}

      
      />
      <Text> Home</Text>
    </SafeAreaView>
  )
}

export default Search