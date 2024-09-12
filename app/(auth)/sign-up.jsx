import { View, Text,SafeAreaView,ScrollView ,Image,Alert} from 'react-native'
import React,{useState} from 'react'
import {Link,router} from 'expo-router'

import {images} from '../../constants'

import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import {createUser} from '../../lib/appwrite'

const SignUp= () => {
  const [form,setForm]=useState({
    username:'',
    email:'',
    password:''
  })
  const [isSubmitting,setIsSubmitting]=useState(false);
  const Submit = async()=>{
    if(!form.username || !form.email || !form.password){
      Alert.alert('Error' ,'Please fill in all the fields')
    }

    setIsSubmitting(true);

    try {
      const result=await createUser(form.email, form.password,form.username);
      router.replace('/home');


    } 
    catch (error) {
      Alert.alert('Error',error.message)
      
    }
    finally{
      setIsSubmitting(false);


    }
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='justify-center w-full  min-h-[85vh] px-4 my-6'>
          <Image
          source={images.logo}
          resizeMode='contain'

           
          className='w-[115px] h-[35px]'
          
          />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold mb-7'>
            Sign Up to Aora
          </Text>
          <FormField
          title='Username'
          value={form.username}
          handleChangeText={(e)=>setForm({ ...form,username:e})}
          otherStyles='mb-7'

          // keyBoardType="email-address"

          
          />
          <FormField
          title='Email'
          value={form.email}
          handleChangeText={(e)=>setForm({ ...form,email:e})}
          keyBoardType="email-address"

          
          />
          <FormField
          title='Password'
          value={form.password}
          handleChangeText={(e)=>setForm({ ...form,password:e})}
          // keyBoardType="email-address"
          otherStyles='mt-7'

          
          />
          <CustomButton
          title='Sign up'
          handlePress={Submit}
          containerStyles='mt-7'
          
          />
          <View className='justify-center  pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>Don't have An Account? </Text>
            <Link href="/sign-in" className='text-lg font-psemibold text-secondary-100'>
            Sign Up
            </Link>

          </View>



        </View>
      </ScrollView>
    </SafeAreaView>
  )
  
}

export default SignUp