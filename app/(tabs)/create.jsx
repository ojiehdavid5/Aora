import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title:'',
    video:null,
    thumbnail:null,
    prompt:''
  })
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='px-4 my-6'>
      <Text className='text-2xl text-white font-psemibold'> Upload videos</Text>
      <FormField
      title='Video Title '
      
      />

      </ScrollView>
    </SafeAreaView>
  )
}

export default Create