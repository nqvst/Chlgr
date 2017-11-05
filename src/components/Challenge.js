import React from 'react';


export default function Challenge(props){
 
    //to see if enddate is set or not, endDate is optional
    let endDate = ''
    if(props.endDate){
        endDate = new Date(props.endDate).toString().substr(4, 11);
    }else{
        endDate = 'none';
    }

    return( 
        <li className="challengeBox">
            <div>{props.category}</div>
            <h5 className="challenge-heading">{props.heading}</h5>
            <p>{props.description}</p>
            <div className="challenge-buttomNav">
                <p>End date: {endDate}</p>
                <p>Created by: {props.createdBy}</p>
            </div>
        </li>
    )
}

