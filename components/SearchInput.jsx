import { View, Text,TextInput,Image ,TouchableOpacity, Alert} from 'react-native'
import React,{useState} from 'react'
import { icons } from '../constants/';
import { usePathname,router } from 'expo-router';


const SearchInput = ({initialQuery}) => {
  






const pathname=usePathname( );
const [query, setQuery] = useState( initialQuery ||'');

  return (
      <View className='border-2 border-red-500 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary  items-center flex-row'>
<TextInput
className='flex-1 text-white font-pregular text-base mt-0.5'      
value={query}
placeholder='search for a video topic'
placeholderTextColor='#CDCDE0'
onChangeText={(e)=>setQuery(e)}

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
  )
}

export default SearchInput;