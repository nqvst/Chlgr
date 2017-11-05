import React, { Component } from "react";
import firebase from "firebase";
import toArray from '../util/toArray.js';


export default function firebaseConnect(props) {  

  console.log(props);

  const db = firebase.database(); //to avoid write firebase.database() all the time in the code, now we can write db instead

  // To set initialstate, it triggers once and then does not trigger again.
  db.ref('challenges').once('value').then(function(snapshot) {
    const challengeList = toArray((snapshot.val()));
    console.log(challengeList);
    props.initialChallengesToState(challengeList)
  });
  
  //Listens for when new values/objects adds to the database Firebase. callback returns the added object
  db.ref('challenges').on('child_added', (snapshot) => {

    const newChallenge = {
      value: snapshot.val(),
      key: snapshot.key
    }
    console.log(newChallenge);
    props.addNewChallengeToState(newChallenge);      
  })

  //Listens for when a value/object deletes from the database Firebase. callback returns the deleted object
  db.ref('challenges').on('child_removed', (snapshot) => {
    console.log(snapshot);
    props.deleteChallengeToState(snapshot)
  })

  //Listens for when values/objects updates/changes in the database Firebase. callback returns the updated object
  db.ref('challenges').on('child_changed', (snapshot) => {
    console.log(snapshot);
    props.updateChallengeToState(snapshot)      
  })
}




