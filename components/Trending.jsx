import { View, Text,FlatList } from 'react-native'
import React from 'react'

const Trending = ({posts}) => {
  return (
    <FlatList
    data={posts}
    keyExtractor={(item)=>item.$id}
    renderItem={({item})=>(
        <Text className='text-5xl text-white'>{item.id}</Text>

    )}
    
    />

  )
}

export default Trending