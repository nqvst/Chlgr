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
        });
    }
}

export function setCurrentChallenge(challenge) {
    return (dispatch) => {
        dispatch({
            type: 'SET_CURRENT_CHALLANGE',
            payload: challenge,
        });
    }
}

//Accept challenge
export function acceptChallenge(challenge, userInfo) {

    return (dispatch) => {
        dispatch({
            type: "ACCEPT_CHALLENGE",
        })
        //pushes the accepted challenge info to the user's acceptedChallenges list, Firebase
        return firebase.database().ref(`users/${userInfo.userId}/acceptedChallenges`)
        .push(challenge)
        //pushes the username to the acceptedBy list in the current challenge, Firebase
        .then(() => {
            firebase.database().ref(`challenges/${challenge.challengeId}/acceptedBy`)
            .push(userInfo)
        })
        .then(() => {
            dispatch({
                type: "ACCEPT_CHALLENGE_SUCCESS",
            })
        })
        .catch(error => {
            dispatch({
                type: "ACCEPT_CHALLENGE_ERROR",
                payload: error,
            })
        });
    }
}

//Comment on challenge

//Add comment
export function addComment(commentObj, challengeId) {

    return (dispatch) => {
        dispatch({
            type: "ADD_COMMENT",
        })
        return firebase.database().ref(`challenges/${challengeId}/comments`)
        .push(commentObj)
        .then(() => {
            dispatch({
                type: "ADD_COMMENT_SUCCESS",
            })
        })
        .catch(error => {
            dispatch({
                type: "ADD_COMMENT_ERROR",
                payload: error,
            })
        });
    }
}


//Complete challenge