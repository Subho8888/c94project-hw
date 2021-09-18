// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA88gFZzHz7M55HsXtKMKGYXJr5E0FVaOE",
  authDomain: "projectinhome.firebaseapp.com",
  projectId: "projectinhome",
  storageBucket: "projectinhome.appspot.com",
  messagingSenderId: "462630319266",
  appId: "1:462630319266:web:186b1a7e150b15632b53fb"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
}
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
