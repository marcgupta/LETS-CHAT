var firebaseConfig = {
    apiKey: "AIzaSyCtSmGqF61XB873ocZOSgLsTaoQR5I6d8A",
    authDomain: "lets-chat-e69c1.firebaseapp.com",
    databaseURL: "https://lets-chat-e69c1-default-rtdb.firebaseio.com",
    projectId: "lets-chat-e69c1",
    storageBucket: "lets-chat-e69c1.appspot.com",
    messagingSenderId: "835464314825",
    appId: "1:835464314825:web:fcb789b4b4b221486eb218"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {

msg = document.getElementById("code").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();

function logout() {

localStorage.removeItem("room_name");
localStorage.removeItem("user_name");

window.location = "index.html";

}