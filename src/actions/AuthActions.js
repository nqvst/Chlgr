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
        dispatch({
            type: "REGISTER_USER",
            payload: {
                authenticated: false,
                error: null,
                user: null,
                loading: true
            }
        })
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
                        type: "REGISTER_USER_SUCCESS",
                        payload: {
                            authenticated: true,
                            error: null,
                            user: {
                                email: user.email,
                                username: user.displayName,
                                userId: user.uid,
                            },
                            loading: false
                        }
                    })
                })
            .catch(error => { 
                dispatch({
                    type: "REGISTER_USER_ERROR",
                    payload: {
                        authenticated: false,
                        error: error,
                        user: null,
                        loading: false
                    }
                })
                console.log(error)});
        });
    }
}
