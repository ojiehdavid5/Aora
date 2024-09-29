import { View, Text, ScrollView, Image ,Alert} from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { TouchableOpacity } from 'react-native'
import { Video ,ResizeMode} from 'expo-av'
import { icons } from '../../constants'
import CustomButton from '../../components/CustomButton'
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router'
import{createVideo} from '../../lib/appwrite'
import  {useGlobalContext} from '../../context/GlobalProvider'
const Create = () => {
  const {user}=useGlobalContext()
  const [form, setForm] = useState({
    title:'',
    video:null,
    thumbnail:null,
    prompt:''
  })

  const [uploading, setUploading] = useState(false);


  const submit=async()=>{
    if(!form.prompt||!form.title ||!form.video ||!form.thumbnail ){
     return  Alert.alert('Please fill in all the fields')





    }
    setUploading(true);
    try {
      await createVideo({
        ...form,userId:user.$id
      })

      Alert.alert('Post uploaded succesfully');
      router.replace('/home')
      
    } catch (error) {
      Alert.alert('error',error.message);
      console.log(error)
      
    }finally{
      setForm({

        title:'',
        video:null,
        thumbnail:null,
        prompt:''
    

      })
      setUploading(false);
    }


  }
  


  // const openPicker=async(selectType)=>{

  //   try {
  //     const result = await DocumentPicker.getDocumentAsync({
  //         type: selectType === 'image'
  //             ? ['image/png', 'image/jpeg']
  //             : ['video/mp4', 'video/gif']
  //     });
  
  //     // Handle the result here
  //     console.log(result);
  // } catch (error) {
  //     console.error("Error picking document:", error);
  // }



  //   if(!result.canceled){

  //     if(selectType==='image'){
  //       setForm({...form, thumbnail:result.assets[0]})
  //   }
  //     if(selectType==='video'){
  //       setForm({...form, video:result.assets[0]})
  //   }
  // }else{

  //   setTimeout(()=>{
  //     Alert.alert('Document picked',JSON.stringify(result,null,2))

  //   },100)
  // }}


  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
    }
};



const openPickerImages = async () => {
  await requestPermission();

  let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Allows both images and videos
      allowsEditing: true, // Optional, allows user to edit media
      quality: 1, // Quality of the selected media
  });

  if (!result.canceled) {
      console.log(result.assets[0]);
           setForm({...form, thumbnail:result.assets[0]})
         
      
      
      // Handle the selected media
  }
  // else{

  //     setTimeout(()=>{
  //     Alert.alert('Document picked',JSON.stringify(result,null,2))
  
  //     },100)
  //   }

};

const openPickerVideos = async () => {
  await requestPermission();

  let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos, // Allows both images and videos
      allowsEditing: true, // Optional, allows user to edit media
      quality: 1, // Quality of the selected media
  });

  if (!result.canceled) {
      console.log(result.assets[0]); 
      
      console.log(result.assets[0]);
      setForm({...form, video:result.assets[0]})
    
 // Handle the selected media
  }
  // else{

  //   setTimeout(()=>{
  //   Alert.alert('Document picked',JSON.stringify(result,null,2))

  //   },100)
  // }
};





  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='px-4 my-6'>
      <Text className='text-2xl text-white font-psemibold'> Upload videos</Text>
      <FormField
      title='Video Title '
      value={form.title}
      placeholder='Give your video a catchy title'
      handleChangeText={(e)=>setForm({...form,title:e})}
      otherStyles='mt-10'
      
      />
      <View className='mt-7 space-y-2 '>
        <Text className='text-base text-gray-100 font-pmedium'>Upload Videos</Text>
        <TouchableOpacity 
        onPress={openPickerVideos}
        
        >
          {form.video ? (  
            
            <Video 
            source={{uri:form.video.uri}}
            className='w-full h-64  rounded-2xl'
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping

            
            
            />

) :(<View className='w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center'>
<View className='w-14 h-14 border border-dashed border-secondary-200 justify-center items-center'>
<Image 
className='w-1/2  h-1/2'
resizeMode='contain'
source={icons.upload}/>
</View>
</View>)
        }
        </TouchableOpacity>

      </View>

      <View className='mt-7 space-y-2'>
      <Text className='text-base text-gray-100 font-pmedium'>ThumbNail image</Text>

      <TouchableOpacity onPress={openPickerImages}>
          {form.thumbnail ? (  
            
            <Image 
            className='w-full h-64  rounded-2xl '
            source={{uri:form.thumbnail.uri}}/>

) :(<View className='w-full h-16 px-4 bg-black-100 rounded-2xl justify-center items-center flex-row  space-x-4 border-2 border-black-200'>
<Image 
className='w-5  h-5 '
resizeMode='contain'
source={icons.upload}/>

<Text className='text-sm text-gray-100  font-pmedium'>Choose a File </Text>
</View>)
        }
        </TouchableOpacity>

      </View>

      <FormField
      title='AI Prompt '
      value={form.prompt}
      placeholder='The prompt you used to create this video'
      handleChangeText={(e)=>setForm({...form,prompt:e})}
      otherStyles='mt-10'
      
      />
      <CustomButton 
      
      title='Submit & Publish'
      handlePress={submit}
      containerStyles='mt-7'
      isLoading={uploading}
      
      />


      </ScrollView>
    </SafeAreaView>
  )

}

export default Create