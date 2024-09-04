import { Client } from 'react-native-appwrite';

export const Config={
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
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('455x34dfkj') // Your project ID
    .setPlatform('com.example.myappwriteapp') // Your application ID or bundle ID.
;