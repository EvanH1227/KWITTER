
//ADD YOUR FIREBASE LINKS HERE
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

      apiKey: "AIzaSyDac76NTBGgyFbhBbv2yn8oyPBWDqvgCio",
    
      authDomain: "kwitter-9c431.firebaseapp.com",
    
      projectId: "kwitter-9c431",
    
      storageBucket: "kwitter-9c431.appspot.com",
    
      messagingSenderId: "861523091227",
    
      appId: "1:861523091227:web:24ef4935ad932522223dbe",
    
      measurementId: "G-J6GCHD6FEF"
    
    };
    
    
    // Initialize Firebase
    
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
