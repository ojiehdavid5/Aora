import { View, Text,TextInput,Image ,TouchableOpacity, Alert} from 'react-native'
import React,{useState} from 'react'
import { icons } from '../constants/';
import { usePathname,router } from 'expo-router';


const SearchInput = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {
  






const pathname=usePathname( );
const [query, setQuery] = useState('');

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>  

      <View className='border-2 border-red-500 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary  items-center flex-row'>
<TextInput
className='flex-1 text-white font-pregular text-base mt-0.5'      
value={query}
placeholder='search for a video topic'
placeholderTextColor='#CDCDE0'
onChangeText={(e)=>setQuery(e)}
secureTextEntry={title==='Password' && !showPassword}

/>

 
  <TouchableOpacity
  onPress={() => {
    if (!query) {
        return Alert.alert('Missing query', 'Please input something');
    }

    if (pathname.startsWith('/search')) {
        router.setParams({ query });
    } else {
        router.push(`/search/${query}`);
    }
}}
  >
  <Image
  source={icons.search}
  className='w-5 h-5'
  resizeMode='contain'
  
  />
</TouchableOpacity>





















      </View>
    </View>
  )
}

export default SearchInput;