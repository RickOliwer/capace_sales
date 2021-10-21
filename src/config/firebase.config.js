import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";


const FirebaseCredentials = {
  apiKey: "AIzaSyDILI2PkBgjzYM5IPxXzinmwKzZEFTbsLI",
  authDomain: "utility-range-325912.firebaseapp.com",
  projectId: "utility-range-325912",
  storageBucket: "utility-range-325912.appspot.com",
  messagingSenderId: "636705375411",
  appId: "1:636705375411:web:b82e19e818908913ab9cc6",
  measurementId: "G-FL50QX21XH"
};
  
  
let app
if (!app){

  app = initializeApp(FirebaseCredentials)


}

  export const auth = getAuth(app)