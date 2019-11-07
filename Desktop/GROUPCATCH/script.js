var firebaseConfig = {
    apiKey: "AIzaSyCZxVkV2wL5PzRtirZs0MdlW80ntq8_iwQ",
    authDomain: "groupcatch-b2350.firebaseapp.com",
    databaseURL: "https://groupcatch-b2350.firebaseio.com",
    projectId: "groupcatch-b2350",
    storageBucket: "groupcatch-b2350.appspot.com",
    messagingSenderId: "144328285007",
    appId: "1:144328285007:web:cf8d979251257ec8c5033a",
    measurementId: "G-CF9CZ4JHC5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var database = firebase.database();