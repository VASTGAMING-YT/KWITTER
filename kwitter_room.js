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
    document.getElementById("user_name").innerHTML="Welcome "+ user_name+ " !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });  
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
