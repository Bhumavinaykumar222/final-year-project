import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAolezeJ-eI6UVHoJwU5ep18sDB0sBA7iU",
  authDomain: "foodys-34dd3.firebaseapp.com",
  projectId: "foodys-34dd3",
  storageBucket: "foodys-34dd3.appspot.com",
  messagingSenderId: "216533949870",
  appId: "1:216533949870:web:4c67c2dd75caaf725e3c3f",
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const uploadImage = async (images) => {
  // const response = await fetch(image);
  // const blob = await response.blob();
  // const fileName = image.substring(image.lastIndexOf('/') + 1);
  // const ref = firebase.storage().ref().child("restaurant/" + fileName).put(blob);
  // try {
  //   const url = (await ref).ref.getDownloadURL()
  //   return url
  // }
  // catch (error) {
  //   console.log(error);
  // }
  try {
    const downloadUrls = {};
    let index = 1;
    for (const image of images) {
      const response = await fetch(image);
      const blob = await response.blob();
      const fileName = image.substring(image.lastIndexOf("/") + 1);
      const ref = firebase
        .storage()
        .ref()
        .child("restaurant/" + fileName);
      const snapshot = await ref.put(blob);
      const url = await snapshot.ref.getDownloadURL();
      downloadUrls[index] = url;
      index++;
    }

    return downloadUrls;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error for handling at a higher level
  }
};
