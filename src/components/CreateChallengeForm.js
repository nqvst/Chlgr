import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import DayPicker from '../DayPicker.js'; 
import { registerFirebase } from '../actions/AuthActions.js';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '20px',
    },
    input: {
        flex: 1,
    },
    card: {
        padding: '16px',
    },
});

class CreateChallengeForm extends Component{
    state = {
        heading: '',
        description: '',
        createdBy: '',
        endDay: '',
        //category: '',
        error: false
    }

    onChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        

        //creating errormessages based on input values from the registerform 
        let createNameMess = '';
        let createDescriptionMess = '';
        let createCategoryMess = '';
        let error = false;

        console.log(`###${this.state.heading}`)
        if(!this.state.heading){
            createNameMess = 'type in a Name!';
            error = true;
            console.log(error);
        }    
        if(!this.state.description){
            createDescriptionMess = 'type in a Description!';
            error = true;
            console.log(error);
        }
        // if(!this.state.category){
        //     createCategoryMess = 'you must select a category!';
        //     error = true;
        //     console.log(error);
        // }    
        if(this.state.heading && this.state.heading.length > 40){
            createNameMess = 'The heading can not be more than 40 characthers long!';
            error = true;
            console.log(error);
        }
        if(this.state.DescriptionMess && this.state.DescriptionMess.length > 100){
            createDescriptionMess = 'The description can not be more than 100 characthers long!';
            error = true;
            console.log(error);
        } 

        console.log(error);

        //if we have no errors in the frontEnd, push the challenge info to firebase db
        if(error === false){
            const challengeObj = {
                heading: this.state.heading,
                description: this.state.description,
                createdBy: this.props.user.username,
                //category: this.state.category,
                endDate: this.state.selectedDay
            }
            //call firebase function 'addChallenge' in AuthAction and pass in the challenge obj. 
            this.props.addChallenge(challengeObj);
        }
        this.setState({errorCreateName: createNameMess})
        this.setState({errorCreateDescription: createDescriptionMess})
        //this.setState({errorCreateCategory: createCategoryMess})
        this.setState({error: error})
        this.setState({selectedType: 'created by Me'})    
    }

    render(){

        const {classes} = this.props;
        console.log(this.props.user);

        return (
            <div>
                <h1>Create a Challenge</h1>
                <form>
                    <Card className={classes.card}>
                        <Button color="inherit" raised onClick={this.props.onClick}>X</Button>
                        <div className={classes.container}>
                            <Input className={classes.input} type="text" name="heading" onChange={this.onChange} placeholder="Challenge name"/>
                        </div>
                        <div className={classes.container}>
                            <Input className={classes.input} type="text" name="description" onChange={this.onChange} style={{height: "10rem"}} value={this.valueDesc} placeholder="Description"/>
                        </div>
                        <div className="create-div">
                            <p>End date *(optional)</p>
                            <div className="calendar-background">
                                <DayPicker onDayClick={this.onDayClick}/>
                            </div>
                        </div>
                        {/*
                        <div>
                            <label>Select a category</label>
                            <div className="create-input">
                                <a href='#' name='category' value='physical' onClick={this.addCategory}>physical</a>
                                <a href='#' name='category' value='mental' onClick={this.addCategory}>mental</a>
                                <a href='#' name='category' value='social' onClick={this.addCategory}>social</a>
                           </div> 
                        </div>
                        */}
                        <div className={classes.container}>
                            <Button color="inherit" raised onClick={this.onSubmit}>Create</Button>
                        </div>
                    </Card>
                </form>
           </div>
        )
    }
}

export default withStyles(styles)(CreateChallengeForm);
