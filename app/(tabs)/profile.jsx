import { View, Text,SafeAreaView,FlatList,Image,RefreshControl, Alert, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import {images} from '../../constants'
import {icons} from '../../constants'
import EmptyState from '../../components/EmptyState'
import {getUserPosts, signOut} from '../../lib/appwrite'
// import { RefreshControl } from 'react-native-gesture-handler'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
import { router, useLocalSearchParams } from 'expo-router'
import {useGlobalContext} from '../../context/GlobalProvider'
import InfoBox from '../../components/InfoBox'


const Profile = () => {
 const{user,setUser,setIsLoggedIn}=useGlobalContext();
  // const {data:posts,refetch}=useAppwrite(() => searchPosts(query));
  const {data:posts,refetch} = useAppwrite(()=>getUserPosts(user.$id))


  useEffect(() => {
    refetch();
  
   
  }, [])
  

  const logout=async()=>{
    await signOut();
    setUser(null);
    setIsLoggedIn(false);
    router.replace('/sign-in')

  }


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
        <View className='w-full  justify-center items-center mt-6 mb-12 px-4'>
          <TouchableOpacity
          onPress={logout}
          
          className='w-full items-end'>
            <Image source={icons.logout} 
            resizeMode='contain'
            className='w-8 h-8 '
            
            />
          </TouchableOpacity>

          <View className='w-16  justify-center items-center h-16  border border-secondary-200 rounded-lg'>
            <Image source={{uri:user?.avatar}}
            className='w-[90%] h-[90%]'
            
            />

          </View>
          <InfoBox 
          title={user?.useName}
          containerStyles='mt-5'
          titleStyles='text-lg'
          
          />
          <View className='mt-5 flex-row'>
<InfoBox 
          title={posts.length || 0}
          containerStyles='mr-10'
          titleStyles='text-xl'
          subtitle='Posts'

          
          />


          <InfoBox 
          title='1.2k'
          subtitle='Followers'
          titleStyles='text-xl'
          
          />
          
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

export default Profile