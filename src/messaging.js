// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyCxDzyIt5GfiTR6OXFVJbzSZkwZT0YWkwc",
  authDomain: "webnotification-e633f.firebaseapp.com",
  projectId: "webnotification-e633f",
  storageBucket: "webnotification-e633f.appspot.com",
  messagingSenderId: "558213591648",
  appId: "1:558213591648:web:f74a546ee048fe66110905",
  measurementId: "G-5K4RKV1LL0"
};

const app = initializeApp(firebaseConfig);
export const messaging=getMessaging(app)
export const generateToken=async()=>{
  const permission=await Notification.requestPermission()
  console.log(permission)
  if(permission==="granted"){
    const token=await getToken(messaging,{vapidKey:"BG8SNT3xvXjgnVgglVzIRoKqgaV0F33S3WLdFQSlWzWUGgOJwXVfC6ciXxBRrQMp8YGpeRDM9mbDnqvefrdm-ZQ",})
console.log(token)
  }
  
}