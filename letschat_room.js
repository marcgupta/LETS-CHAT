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
document.getElementById("user_name").innerHTML = "Welcome" + user_name;

function addroom(){

    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    
    localStorage.setItem("room_name" , room_name);
    
    window.location = "letschat_page.html";
    
    }
    
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
    console.log("Room Name-" + Room_names);
    
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML += row;
          //End code
          });});}
    getData();
    
    function redirectToRoomName(name) {
    
    console.log(name);
    localStorage.setItem("room_name" , name);
    
    }
    
    function logout() {
    
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    
    window.location = "index.html";
    
    }

    function next() {

      window.location = "letschat_page.html";

    }