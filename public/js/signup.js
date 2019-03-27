//Utilizzo della Firebase è un potente servizio on line che permette di salvare 
//e sincronizzare i dati elaborati da applicazioni web e mobile.


var config = {
    apiKey: "AIzaSyA1O6xRDWtwCGVyB-GQRyLmHlSKxFbdmX0",
    authDomain: "fireproject-13ab0.firebaseapp.com",
    databaseURL: "https://fireproject-13ab0.firebaseio.com",
    projectId: "fireproject-13ab0",
    storageBucket: "fireproject-13ab0.appspot.com",
    messagingSenderId: "61885338920"
    };
    firebase.initializeApp(config);

     //Code Jquery, form class=register 
     $(".register form").on("submit", function(event) {
        event.preventDefault();

        var email = $(".register .email").val();
        var password = $(".register .password").val();

        console.log(email);
        console.log(password);
        //Crea un utente e dopo verifica l'autenticazione email  
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
            console.log(user);
            //Send a user a verification email
            var user = firebase.auth().currentUser;
            var email_verified = user.emailVerified;
            console.log(email_verified);
            
            if(!email_verified){
                user.sendEmailVerification().then(function() {
                    // Email sent.
                    window.alert("verification sent, check yuor email and verify. After click ok!");
                    //prova
                    window.location.href = "login"; 
        
                    }).catch(function(error) {
                    // An error happened.
                    window.alert("error : " + error.message);
                    });
            }else{
                window.alert("User verified, rendering login page");
            }
            //prova
            //window.location.href = "login"; 

        }).catch(function(err){
            console.log(err);
            
        });
    });    
    
    
    
    