//Controller del template users.ejs accesso temporaneo, 
    //Initialize Firebase
    
    var config = {
        apiKey: "AIzaSyA1O6xRDWtwCGVyB-GQRyLmHlSKxFbdmX0",
        authDomain: "fireproject-13ab0.firebaseapp.com",
        databaseURL: "https://fireproject-13ab0.firebaseio.com",
        projectId: "fireproject-13ab0",
        storageBucket: "fireproject-13ab0.appspot.com",
        messagingSenderId: "61885338920"
    };
    firebase.initializeApp(config);

   


    //Add logout event
   btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    //add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            

        } else {
            console.log('not logged in');
            
        }
    });


    

