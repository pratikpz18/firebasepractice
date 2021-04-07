// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBb6UPMyUZMZNQ1W0ngdKjUPhFKS4HOykY",
    authDomain: "firstproject-aedd3.firebaseapp.com",
    projectId: "firstproject-aedd3",
    databaseURL:"https://firstproject-aedd3-default-rtdb.firebaseio.com/",
    storageBucket: "firstproject-aedd3.appspot.com",
    messagingSenderId: "201020881386",
    appId: "1:201020881386:web:09dd2b30b85849ae061a93"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const pobj = document.getElementById("p");

  const dbref = firebase.database().ref().child('object');

  dbref.on('value',snap => console.log(snap.val()));
//   console.log('vv')