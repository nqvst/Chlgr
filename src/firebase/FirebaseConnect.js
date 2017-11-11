import firebase from "firebase";
import toArray from '../util/toArray.js';


export function checkAuth(callback) {
    firebase.auth().onAuthStateChanged(callback);
}

export function fetchSingleChallenge(id, callback) {
    const db = firebase.database();
    db.ref(`challenges/${id}`).on('value', function (snapshot) {
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

