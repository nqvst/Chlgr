import firebase from "firebase";


//Register user
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
                    payload: error,
                })
                console.log(error)
            });
        });
    }
}

//Login user
export function loginFirebase(email, password) {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_USER",
        })
        return firebase.auth() //logging in a user in firebase Authentication
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                if(user){
                    console.log(user);
                    dispatch({
                        type: "LOGIN_USER_SUCCESS",
                        payload: {
                            email: user.email,
                            username: user.displayName,
                            userId: user.uid,
                        }
                    });
                }
            })
            .catch(error => {
                dispatch({
                    type: "LOGIN_USER_ERROR",
                    payload: error,
                });
                console.log(error)
            });
    }
}


//Logout user 
export function logoutFirebase() {
    return (dispatch) => {
        //signout Firebase
        firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch({
                type: "LOGOUT_USER",
            })
        })
        .catch(error => {
            dispatch({
                type: "LOGOUT_USER_ERROR",
                payload:  error,
            })
            console.log(error)
        });  
    }
}   


//Add challenge (must also be done to redux!!!)
export function addChallenge(challengeObj) {

    //to avoid write firebase.database() all the time in the code, now we can write db instead
    const db = firebase.database();

    return (dispatch) => {
        dispatch({
            type: "ADD_CHALLENGE",
            payload: {
                error: null,
                loading: true
            }
        })
        return db.ref('challenges')
        .push(challengeObj)
        .then(() => {
            dispatch({
                type: "ADD_CHALLENGE",
                payload: {
                    error: null,
                    loading: false
                }
            })
        })
        .catch(error => { 
            dispatch({
                type: "ADD_CHALLENGE",
                payload: {
                    error: error,
                    loading: false
                }
            })
            console.log(error)
        });  
    }
}
