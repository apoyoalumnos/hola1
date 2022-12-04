const firebaseConfig = {
    apiKey: "AIzaSyC5CF0l-9JA0UTLFeXG8fL4X-gJ85hjIY0",
    authDomain: "red-social-5d0d8.firebaseapp.com",
    databaseURL: "https://red-social-5d0d8-default-rtdb.firebaseio.com",
    projectId: "red-social-5d0d8",
    storageBucket: "red-social-5d0d8.appspot.com",
    messagingSenderId: "1046015605260",
    appId: "1:1046015605260:web:fc032d53a2a86ba50f0c29"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";
  
  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "index_page.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "index_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
