//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCp0UboetC1FxfkrfYiLEMzhkALynE8Mo8",
      authDomain: "kwitter-a94ae.firebaseapp.com",
      databaseURL: "https://kwitter-a94ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-a94ae",
      storageBucket: "kwitter-a94ae.appspot.com",
      messagingSenderId: "760137114603",
      appId: "1:760137114603:web:c8732a3f41fd36513eafae"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}