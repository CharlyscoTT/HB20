import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCZylIBn3mIQ0wuw6gmjEOnRgkPTp_V3do",
    authDomain: "hb20-c36b9.firebaseapp.com",
    databaseURL: "https://hb20-c36b9-default-rtdb.firebaseio.com",
    projectId: "hb20-c36b9",
    storageBucket: "hb20-c36b9.appspot.com",
    messagingSenderId: "551493235824",
    appId: "1:551493235824:web:d1cad36f25b33846ec30b5"
  };

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);