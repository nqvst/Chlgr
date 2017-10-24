import React, { Component } from "react";
import { connect } from "react-redux";

import { logoutFirebase } from '../actions/AuthActions.js';


function onSubmit(e) {
    e.preventDefault();
    logoutFirebase();
}  

function Logout(props) {

    return(
        <div>
            <button onClick={(e)=>onSubmit(e)}>LogOut, yes?</button>
        </div>
    )
   
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {       
        logoutFirebase: (email, password) => {
            dispatch(logoutFirebase(email, password))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
