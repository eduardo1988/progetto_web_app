
//controller del template login.ejs


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

        var email = $(".login .email").val();
        var password = $(".login .password").val();

        console.log(email);
        console.log(password);
        

        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
            console.log(user);
            var user = firebase.auth().currentUser;
            var email_verified = user.emailVerified;
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            userId = user.uid;
            //Create a user profile in the DB
            
          
            if(email_verified){
                    window.alert("User verified");
                    dbUsers.once("value")
                    .then(function (snapshot) {
                        //Check if liked exist 
                        var r = snapshot.child(userId).exists();
                        if (r !== true) {
                            dbUsers.child(userId).set({
                                username: user.displayName,
                                photoURL: user.photoURL
                            })
                        } 
                        return;
                    });
                           
            }else{
                // An error happened.
                window.alert("error : " + error.message);

            }
            //prova
            window.location.href = "users"; 

            

        }).catch(function(err){
            console.log(err);
            
        });

    });

    

    //DB firebase
    var database = firebase.database();
    var dbUsers = database.ref('users/');
    


    //add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            

        } else {
            console.log('not logged in');
            
        }
    });


    //Sign in with Google
    function googleLogin() {
        //Google Sign provider
        var googlePrv = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googlePrv).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            userId = user.uid;
            //Create a user profile in the DB
            
            dbUsers.once("value")
              .then(function (snapshot) {
                  //Check if liked exist 
                  var r = snapshot.child(userId).exists();
                  if (r !== true) {
                      dbUsers.child(userId).set({
                          username: user.displayName,
                          photoURL: user.photoURL
                      })
                  } 
                  return;
              });
            window.location.href = "users";
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };

    /**FACEBOOK DA 0TT0BRE 2018 LE APP WEB DEVO ESSERE HTTPS
     * Il mio accesso è bloccato  con il seguente messaggio:
     * La richiesta di accedere a cookie e spazio di archiviazione (storage)
     *  per “http://localhost:3000/login” è stata bloccata in quanto proviene da
     *  un elemento tracciante e il blocco contenuti è attivo.
     */

    //Sign in with Facebook
    function facebookLogin() {
        //Facebook Sign provider
        var facebookPrv = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookPrv).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...  
            userId = user.uid;

            console.log(user.id);
            console.log(token);            
            console.log(facebookPrv);
            
            
            //Create a user profile in the DB

            dbUsers.once("value")
              .then(function (snapshot) {
                  //Check if liked exist 
                  var r = snapshot.child(userId).exists();
                  if (r !== true) {
                      dbUsers.child(userId).set({
                          username: user.displayName,
                          photoURL: user.photoURL
                      })
                  }
                  return;
              });
              window.location.href = "users";
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };

    //Twitter SignIn
    function twitterLogin() {
        //Twitter Sign provider
        var twitterPrv = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(twitterPrv).then(function (result) {
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            var token = result.credential.accessToken;
            var secret = result.credential.secret;
            // The signed-in user info.
            var user = result.user;
            // ...
            userId = user.uid;
            //Create a user profile in the DB

            dbUsers.once("value")
              .then(function (snapshot) {
                  //Check if liked exist 
                  var r = snapshot.child(userId).exists();
                  if (r !== true) {
                      dbUsers.child(userId).set({
                          username: user.displayName,
                          photoURL: user.photoURL
                      })
                  }
                  return;
              });
              window.location.href = "users";
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };

 




