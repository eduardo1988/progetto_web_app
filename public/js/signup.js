//Utilizzo della Firebase è un potente servizio on line che permette di salvare 
//e sincronizzare i dati elaborati da applicazioni web e mobile.

/** AUTH google*/

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();

    //Return a Promise
    firebase.auth().signInWithPopup(provider).then(result =>{
        const user = result.user;
        document.write(`Hello ${user.displayName}`);
        console.log(user);
    }).catch(console.log)
    


};    
