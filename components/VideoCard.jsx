import { View, Text } from 'react-native'
import React from 'react'

const VideoCard = ({video:{title,thumbnail,video,creator:username,avatar}}) => {
  return (
    <View className='flex-col items-center px-4 mb-14'>
        <View className='flex-row gap-3 items-start'>
            <View className='justify-center items-center flex-row flex-1'>
                <View className='w-[46px] h-[46px]'>

                </View>

            </View>

        </View>
      <Text className='text-2xl text-white'>{title}</Text>
    </View>
  )
}

export default VideoCard