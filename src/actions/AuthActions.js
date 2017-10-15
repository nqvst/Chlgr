import firebase from "firebase";

export function signInFirebase(email, password) {
    return (dispatch) => {
        return firebase.auth() //logging in a user in firebase Authentication 
            .signInWithEmailAndPassword(email, password) //from state?
            .then((user) => {
                if(user){
                    console.log(user);
                }
            })
            .catch(error => console.log(error.code));
    }        
}


export function registerFirebase(email, password, username) {
    return (dispatch) => {
        return firebase.auth()
            .createUserWithEmailAndPassword(email, password)//creates a user in firebase Authentication 
            .then((user) => {
                user.updateProfile({ //sets the displayName in Firebase to the username provided by the user during register
                    displayName: username,
                }).then(() => {
                    firebase.database() //store the user (email, uid and username) data in Firebase database
                    .ref(`users/${user.uid}`)
                    .set({email: user.email, uid: user.uid, username: user.displayName}); //om ett värde inte finns komer det bli null i firebase
                    return user;
                }).then((user) => {
                    dispatch({
                        type: "AUTH_USER",
                        payload: {
                            email: user.email,
                            username: user.displayName,
                            userId: user.uid,
                        }
                    })
                })
            .catch(error => console.log(error));
        });
    }
}


  /* Google signin
  let provider = new firebase.auth.GoogleAuthProvider();

  function signInGoogle () {
    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
        }
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        return user;

    }).then((user) => {
        //store the user (email, uid and username) data in Firebase database
        firebase.database()
        .ref(`users/${user.uid}`)
        .set({email: user.email, uid: user.uid, username: user.displayName});
    })
      
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    })
  }
  */
  