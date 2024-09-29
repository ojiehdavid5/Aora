import { View, Text,SafeAreaView,FlatList,Image,RefreshControl, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import {images} from '../../constants'
import {icons} from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import {getAllPosts,getLatestPosts} from '../../lib/appwrite'
// import { RefreshControl } from 'react-native-gesture-handler'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
import { useGlobalContext } from '../../context/GlobalProvider'

const Home = () => {
 const {user,setUser ,isLoggedIn}=useGlobalContext()
  const {data:posts,refetch}=useAppwrite(getAllPosts)
  const {data:latestPosts}=useAppwrite(getLatestPosts)


  const [refreshing, setRefreshing] = useState(false);
  const onRefresh=async()=>{
    setRefreshing(true);
    await refetch;

    setRefreshing(false);


  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
      data={posts}
      // data={[]}
      keyExtractor={(item)=>item.$id}
      renderItem={({item})=>(
        <VideoCard 
        video={item}
        // posts={latestPosts}
        
        />

      )}
      ListHeaderComponent={()=>(
        <View className='my-6 px-4 space-y-6'>
        <View className='justify-between items-start flex-row mb-6'>
        <View>
        <Text className='font-pmedium text-sm text-gray-100'>Welcome back</Text>
        <Text className='text-2xl  font-psemibold text-white'>{user?.username}</Text>
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

          <Trending  posts={latestPosts}/>

        </View>
          
        </View>
      )}

      ListEmptyComponent={()=>(
        <EmptyState
        title='No Videos  Found'
        subtitle='No videos created yet'
        
        />

      )}

      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      
      />
      <Text> Home</Text>
    </SafeAreaView>
  )
}

export default Home