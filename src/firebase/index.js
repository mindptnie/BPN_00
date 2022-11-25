// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCx3BvMM--bxGF34wF8CfVlWKfFItDMld4",
//   authDomain: "bpnweb-b4b90.firebaseapp.com",
//   projectId: "bpnweb-b4b90",
//   storageBucket: "bpnweb-b4b90.appspot.com",
//   messagingSenderId: "691404005593",
//   appId: "1:691404005593:web:2deeb54bb3fcd3cbd59ec8"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA9vm39lRKswJFiWngKLud0EhFXLjYSr_s",
  authDomain: "festival-devcamp.firebaseapp.com",
  projectId: "festival-devcamp",
  storageBucket: "festival-devcamp.appspot.com",
  messagingSenderId: "457442840019",
  appId: "1:457442840019:web:cf00e9dd8b9ddc8d9eb326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getFirestore(app);
export { auth }