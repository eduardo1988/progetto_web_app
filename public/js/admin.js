
var config = {
    apiKey: "AIzaSyA1O6xRDWtwCGVyB-GQRyLmHlSKxFbdmX0",
    authDomain: "fireproject-13ab0.firebaseapp.com",
    databaseURL: "https://fireproject-13ab0.firebaseio.com",
    projectId: "fireproject-13ab0",
    storageBucket: "fireproject-13ab0.appspot.com",
    messagingSenderId: "61885338920"
};
firebase.initializeApp(config);

    

    //Form login with Email and Password, sfrutto Jquery ,ma è equivalente   var tmp = document.getElementById('username'); ecc..
     //Jquery class=login 
     $(".login form").on("submit", function(event) {
        event.preventDefault();

        var email = $(".login .username").val(); // sfrutto una "email" fittizia che solo io amministratore conosco
        var password = $(".login .password").val();

        //console.log(email);
        //console.log(password);
    
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
            console.log(user);
            
        }).catch(function(err){
            console.log(err);
            
        });
         
    });

    //add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            

        } else {
            console.log('not logged in');
            
        }
    });
