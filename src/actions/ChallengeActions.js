import firebase from "firebase";

//Add challenge
export function addChallenge(challengeObj) {

    return (dispatch) => {
        dispatch({
            type: "ADD_CHALLENGE",
        })
        return firebase.database().ref('challenges')
        .push(challengeObj)
        .then(() => {
            dispatch({
                type: "ADD_CHALLENGE_SUCCESS",
            })
        })
        .catch(error => { 
            dispatch({
                type: "ADD_CHALLENGE_ERROR",
                payload: error,
            })
            console.log(error)
        });  
    }
}

//Accept challenge
export function acceptChallenge(challenge, userInfo) {
    console.log('hej');

    return (dispatch) => {
        dispatch({
            type: "ACCEPT_CHALLENGE",
        })
        console.log('hallå??');
        //pushes the accepted challenge info to the user's acceptedChallenges list, Firebase
        return firebase.database().ref(`users/${userInfo.userId}/acceptedChallenges`)
        .push(challenge)
        //pushes the username to the acceptedBy list in the current challenge, Firebase
        .then(() => {
            console.log('hej igen');
            firebase.database().ref(`challenges/${challenge.challengeId}/acceptedBy`)
            .push(userInfo)
        })
        .then(() => {
            console.log('hejhejhej');
            dispatch({
                type: "ACCEPT_CHALLENGE_SUCCESS",
            })
        })
        .catch(error => { 
            dispatch({
                type: "ACCEPT_CHALLENGE_ERROR",
                payload: error,
            })
            console.log(error)
        });
    } 
}   

//Comment on challenge

//Complete challenge