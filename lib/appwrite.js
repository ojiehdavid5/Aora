import {Account, Client } from 'react-native-appwrite';

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

export  const createUser=async (email,password,userName)=>{
try{
const newAccount=await account.create(
    ID.unique(), email, password, userName


)
if(!newAccount) throw  Error;

const avatarUrl=avatars.getInitials()

}catch(e){
    console.log(e)

    throw new Error(e);

}







    // account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    // .then(function (response) {
    //     console.log(response);
    // }, function (error) {
    //     console.log(error);
    // });


}

// Register User
