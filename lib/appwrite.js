import {Account, Client,Avatars,Databases,ID } from 'react-native-appwrite';

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
    .setPlatform(config.platform) // Your application ID or bundle ID.
;



const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
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

      await account.deleteSession('current');
      const session = await account.createEmailPasswordSession(email, password);
  
      return session;
    } catch (error) {
      console.log(error);
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
  


    










// my own
   
// Register User
