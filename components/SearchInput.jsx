import { View, Text,TextInput,Image ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { icons } from '../constants/';


const SearchInput = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {








  const [showPassword,setShowPassword] =useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

      <View className='border-2 border-red-500 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary  items-center flex-row'>
<TextInput
className='flex-1 text-white font-psemibold text-base'
value={value}
placeholder='search for a video topic'
placeholderTextColor='#7b7b8b'
onChangeText={handleChangeText}
secureTextEntry={title==='Password' && !showPassword}

/>
{title === 'Password' && (

 
  <TouchableOpacity >
  <Image
  source={icons.upload}
  className='w-5 h-[3rem] ml-10'
  resizeMode='contain'
  
  />
</TouchableOpacity>





)}
















      </View>
    </View>
  )
}

export default SearchInput;