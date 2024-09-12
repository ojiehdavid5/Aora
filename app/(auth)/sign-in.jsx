import { View, Text,SafeAreaView,ScrollView ,Image,Alert} from 'react-native'
import React,{useState} from 'react'
import {Link,router} from 'expo-router'

import {images} from '../../constants'

import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import {createUser, signIn} from '../../lib/appwrite'

const SignIn= () => {
  const [form,setForm]=useState({
    email:'',
    password:''
  })
  const [isSubmitting,setIsSubmitting]=useState(false);
  const Submit =async()=>{

    if( !form.email || !form.password){
      Alert.alert('Error' ,'Please fill in all the fields')
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
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
            Log in to Aora
          </Text>
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
          title='Sign in'
          handlePress={Submit}
          containerStyles='mt-7'
          
          />
          <View className='justify-center  pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>Don't have An Account? </Text>
            <Link href="/sign-up" className='text-lg font-psemibold text-secondary-100'>
            Sign Up
            </Link>

          </View>



        </View>
      </ScrollView>
    </SafeAreaView>
  )
  
}

export default SignIn