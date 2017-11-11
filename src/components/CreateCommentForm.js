import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import DayPicker from '../DayPicker.js'; 
import { registerFirebase } from '../actions/ChallengeActions.js';

import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
    wrapper: {
        width: '350px',
        margin: '0 auto',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '20px',
    },
    input: {
        width: '250px',
    },
    card: {
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        alignSelf: 'flex-end',
    },
});


class CreateCommentForm extends Component{
    state = {
        comment: '',
        errorCreate: false,
        errorCreateComment: '',
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    //sets the input from the calendar to state
    handleDateClick = (event) => {
        let endDate = Date.parse(event)
        this.setState({endDay: endDate})
    }

    onSubmit = (e) => {
        e.preventDefault();

        //creating errormessages based on input values from the registerform 
        let createCommentMess = '';;
        let error = false;

        console.log(`###${this.state.comment}`)
        if(!this.state.comment){
            createCommentMess = 'type in a Comment!';
            error = true;
            console.log(error);
        }    
        if(this.state.comment.length > 200){
            createCommentMess = 'The comment can not be more than 200 characthers long!';
            error = true;
            console.log(error);
        } 

        console.log(error);

        //if we have no errors in the frontEnd, push the challenge info to firebase db
        if(error === false){
            const commentObj = {
                comment: this.state.comment,
                createdBy: this.props.user.username,
                createdAt: Date.now(),
            }
            //call firebase function 'addComment' in AuthAction and pass in the challenge obj. 
            this.props.addComment(commentObj);
        }
        this.setState({errorCreateComment: createCommentMess})
        this.setState({error: error})
    }

    render(){

        const {classes} = this.props;
        console.log(this.props.user);

        return (
            <div className={classes.wrapper}>
                <h1>Create a Challenge</h1>
                <form>
                    <Card className={classes.card}>
                        <Button className={classes.button} onClick={this.props.onClick}>Close</Button>
                        <div className={classes.container}>
                            <Input className={classes.input} type="text" name="comment" onChange={this.onChange} placeholder="Comment"/>
                        </div>
                        <div className={classes.container}>
                            <Button color="inherit" raised onClick={this.onSubmit}>Create</Button>
                        </div>
                    </Card>
                </form>
           </div>
        )
    }
}

export default withStyles(styles)(CreateCommentForm);