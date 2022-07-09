var firebaseConfig = {
    apiKey: "AIzaSyAF7-SxnMb7Cfn7tEwMZyUTfkDdKPOGf4g",
    authDomain: "kwitter-not-for-class.firebaseapp.com",
    databaseURL: "https://project-6850292987556684958-default-rtdb.firebaseio.com",
    projectId: "kwitter-not-for-class",
    storageBucket: "kwitter-not-for-class.appspot.com",
    messagingSenderId: "525030068551",
    appId: "1:525030068551:web:8ef1ccb02594175fa77c62"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function logout() 
{
    window.location = "index.html";
}

