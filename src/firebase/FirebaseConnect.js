import firebase from "firebase";
import toArray from '../util/toArray.js';

export default function firebaseConnect({ initialChallengesToState, challengeAdded, challegeDeleted, challengeChanged, challengeId }) {


    const db = firebase.database();
    // To set initialstate, it triggers once and then does not trigger again.

    db.ref('challenges').once('value').then(function (snapshot) {
        const challengeList = toArray((snapshot.val()));
        initialChallengesToState(challengeList)
    });


    //Listens for when new values/objects adds to the database Firebase. callback returns the added object
    db.ref('challenges').on('child_added', (snapshot) => {

        const newChallenge = {
            id: snapshot.key,
            ...snapshot.val(),
        }
        challengeAdded(newChallenge);
    })

    //Listens for when a value/object deletes from the database Firebase. callback returns the deleted object
    db.ref('challenges').on('child_removed', (snapshot) => {
        challegeDeleted(snapshot)
    })

    //Listens for when values/objects updates/changes in the database Firebase. callback returns the updated object
    db.ref('challenges').on('child_changed', (snapshot) => {
        challengeChanged(snapshot)
    })
}

export function fetchSingleChallenge(id, callback) {
    const db = firebase.database();
    db.ref(`challenges/${id}`).once('value').then(function (snapshot) {
        const challenge = snapshot.val();
        callback(challenge)
    });
}

export function fetchInitialChalenges(callback) {
    const db = firebase.database();
    db.ref('challenges').once('value').then(function (snapshot) {
        const challengeList = toArray((snapshot.val()));
        callback(challengeList)
    });
}

export function listenForChangesInChallenges({ added, changed, removed }) {
    const db = firebase.database();
    db.ref('challenges').on('child_added', (snapshot) => {
        const newChallenge = {
            id: snapshot.key,
            ...snapshot.val(),
        }
        added(newChallenge);
    });

    db.ref('challenges').on('child_removed', (snapshot) => {
        removed(snapshot)
    });

    //Listens for when values/objects updates/changes in the database Firebase. callback returns the updated object
    db.ref('challenges').on('child_changed', (snapshot) => {
        changed(snapshot)
    });
}

