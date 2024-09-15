import { View, Text,SafeAreaView,FlatList,Image,RefreshControl } from 'react-native'
import React,{useState} from 'react'
import {images} from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
// import { RefreshControl } from 'react-native-gesture-handler'

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)





  const [refreshing, setRefreshing] = useState(false);
  const onRefresh=async()=>{
    setRefreshing(true);
    setRefreshing(false);

  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
      data={[{id:1},{id:2},{id:3}]}
      // data={[]}
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

          <Trending  posts={[{id:1},{id:2},{id:3},{id:2},{id:7}]}/>

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