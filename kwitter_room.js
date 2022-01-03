
const firebaseConfig = {
      apiKey: "AIzaSyCUflSMd3x_4RRuNlHV3qbw1QhdTTWpKHo",
      authDomain: "kwitter-4538c.firebaseapp.com",
      databaseURL: "https://kwitter-4538c-default-rtdb.firebaseio.com",
      projectId: "kwitter-4538c",
      storageBucket: "kwitter-4538c.appspot.com",
      messagingSenderId: "995084900758",
      appId: "1:995084900758:web:36506ed578802a32a665b7",
      measurementId: "G-JWTSVPV465"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
