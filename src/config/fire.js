import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBD-fqEt8zvehedbK-x30otasmyj8hUlt0",
    authDomain: "react-firebase-8d3c9.firebaseapp.com",
    databaseURL: "https://react-firebase-8d3c9.firebaseio.com",
    projectId: "react-firebase-8d3c9",
    storageBucket: "react-firebase-8d3c9.appspot.com",
    messagingSenderId: "553349290788",
    appId: "1:553349290788:web:2d4871f3a4264f2a5ab1b1",
    measurementId: "G-Y1B1E907D4"
  };


  const fire = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default fire;
