import {Account, Client,Avatars,Databases,ID, Query ,Storage} from 'react-native-appwrite';

export const config={
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.aora',

    projectId:"66c60d4d0022827e1d81",
    databaseId:"66c6114700241e1539ae",
    userCollectionId:"66c611dd0034a5d49758",
    videoCollectionId:"66c61248000fdf2a3ab3",
    storageId:"66c614580031f1e01e07"

    
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform)







    
    // Your application ID or bundle ID.
;



const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);
//my own
// const newAccount=await account.create(
//     ID.unique(), email, password, userName


// )
// if(!newAccount) throw  Error;

// const avatarUrl=avatars.getInitials(userName);

// await signIn(email,password);

// const newUser=await databases.createDocument(

//     config.databaseId,
//     config.userCollectionId,
//     ID.unique(),
//     {
//         accountId:newAccount.$id,
//         email,
//         userName,
//         avatar:avatarUrl
//     }
// )
// return newUser;

// }catch(e){
//     console.log(e)

//     throw new Error(e);

// }
// finally{
//     const remove=await account.deleteSession('current');
//     return remove; // Log out existing session
// }



// }







    // account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    // .then(function (response) {
    //     console.log(response);
    // }, function (error) {
    //     console.log(error);
    // });

   // Register user
export async function createUser(email, password, username) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
  
      if (!newAccount) throw Error;
  
      const avatarUrl = avatars.getInitials(username);
  
      await signIn(email, password);
  
      const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
          avatar: avatarUrl,
        }
      );
      console.log(newUser);
  
      return newUser;
    } catch (error) {
      console.log(error)
      throw new Error(error);
    }
  }
  
  // Sign In
  export async function signIn(email, password) {
    try {
                //  await account.deleteSession('current');


      const session = await account.createEmailPasswordSession(email, password);
  
      return session;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
          //  await account.deleteSession('current');

  }




  export const getCurrentUser=async()=>{
    try {
      const currentAccount=await account.get();
      if(!currentAccount) throw Error
      const currentUser= await databases.listDocuments(
        config.databaseId,
        config.userCollectionId,[Query.equal('accountId',currentAccount.$id)]
      )

      if(!currentUser) throw Error;

      return currentUser.documents[0]
    } catch (error) {
      console.error(error)

      
    }

  }

  export const getAllPosts=async () => {
    try {
      const posts=await databases.listDocuments(
        config.databaseId,
        config.videoCollectionId,
        [Query.orderDesc('$createdAt', Query.limit(7))]


      )
      return posts.documents;
      
    } catch (error) {
      throw new Error(error);
      
    }
    
  }

  export const getLatestPosts=async () => {
    try {
      const posts=await databases.listDocuments(
        config.databaseId,
        config.videoCollectionId
        // [Query.orderDesc('$createdAt', Query.limit(7))]
      )
      return posts.documents;
      
    } catch (error) {
      throw new Error(error);
      
    }
    
  }
  
  export const searchPosts = async (query) => {
    try {
      const posts = await databases.listDocuments(
        config.databaseId,
        config.videoCollectionId,
        [Query.search('title', query)] // Corrected the placement of the array
      );
      return posts.documents;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const getUserPosts = async (userId) => {
    try {
      const posts = await databases.listDocuments(
        config.databaseId,
        config.videoCollectionId,
        [Query.equal('creator', userId)] // Corrected the placement of the array
      );
      return posts.documents;
    } catch (error) {
      throw new Error(error);
    }
  };



  export const signOut=async()=>{

    try{

      const session=await account.deleteSession('current');

      return session

    }catch(error){
      throw new Error(error);
    }
  }
  
  // Get Account
  // export async function getAccount() {
  //   try {
  //     const currentAccount = await account.get();
  
  //     return currentAccount;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }


  export const getFilePreview=async(fileId,type)=>{
    let fileUrl;

    try {

      if(type=== 'video'){
        fileUrl=storage.getFileView(config.storageId,fileId)
      }else if(type==='image'){
                fileUrl=storage.getFileView(config.storageId,fileId,2000,2000,'top',100)


      }else{
        throw new error ('Invalid file type')
      }

      if(!fileUrl) throw Error
      return fileUrl;
      
    } catch (error) {
      
    }


  }
  
export const uploadFile=async(file,type)=>{
  if(!file)return;

  const {mimeType,...rest}=file;

  const asset={

    name:file.fileName,
    type:file.mimeType,
    size:file.fileSize,
    uri:file.uri
  }

  try {
    const uploadFile=await storage.createFile(
      config.storageId,
      ID.unique(),
      asset
    );

    const fileUrl=await getFilePreview(uploadFile.$id,type);

    return fileUrl;

    
  } catch (error) {
    throw new Error(error)
    
  }

}

    export const createVideo=async(form)=>{
      try {
        const[thumbnailUrl,videoUrl]=await Promise.all([
uploadFile(form.thumbnail,'image'),
uploadFile(form.video,'video')

        ])

        const newPost= await databases.createDocument(

         config.databaseId,config.videoCollectionId,ID.unique(),{
          title:form.title,
          thumbnail:thumbnailUrl,
          prompt:form.prompt,
          creator:form.userId,
          videos: videoUrl
      
          
         }
        )
        return newPost
      } catch (error) {
        throw new Error(error);
        console.log
        
      }

    }










// my own
   
// Register User
