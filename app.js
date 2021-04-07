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
  const ulList = document.getElementById("ulList");
  const input = document.getElementById("input");
  const err = document.getElementById("err");


//   const dbref = firebase.database().ref().child('object');
  const dbrefList = firebase.database().ref().child('task');
  const dbrefLis = firebase.database().ref('task');

//   dbref.on('value',snap => {
//       pobj.innerText = JSON.stringify(snap.val(),null,3);
//   });

function add(){
    console.log(input.value);
    console.log("add");
    if(input.value!=""){
        dbrefLis.push().set({
            input:input.value,
        });
    }else{
        err.innerText="Please provide some input" ;
        setTimeout(()=>{
            err.style.display='none';
        },2000);
    }
    input.value="";
}

dbrefList.on('child_added',snap => {
    console.log(snap.val().input)
    const li = document.createElement('li');
    li.innerText = snap.val().input;
    li.id=snap.key;
    ulList.append(li);
});

