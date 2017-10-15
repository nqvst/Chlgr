import React, { Component } from 'react';
import firebase from "firebase";
//let provider = new firebase.auth.GoogleAuthProvider();

class SignUp extends Component {

    // function signInGoogle() {
    //     firebase.auth().signInWithRedirect(provider);

    //     firebase.auth().getRedirectResult().then(function (result) {
    //         if (result.credential) {
    //             // This gives you a Google Access Token. You can use it to access the Google API.
    //             var token = result.credential.accessToken;
    //         }
    //         // The signed-in user info.
    //         var user = result.user;
    //         console.log(user);
    //         return user;

    //     }).then((user) => {
    //         //store the user (email, uid and username) data in Firebase database
    //         firebase.database()
    //             .ref(`users/${user.uid}`)
    //             .set({ email: user.email, uid: user.uid, username: user.displayName });
    //     })

    //         .catch(function (error) {
    //             // Handle Errors here.
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             // The email of the user's account used.
    //             var email = error.email;
    //             // The firebase.auth.AuthCredential type that was used.
    //             var credential = error.credential;
    //             // ...
    //         })
    // }

    render() {
        return (
            <div>
                SignUp
            </div>
        );
    }
}

export default SignUp;
