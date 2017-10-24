import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import DayPicker from '../DayPicker.js'; 


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

class CreateChallenge extends Component{
    state = {
        heading: '',
        description: '',
        selectedDay: '',
        category: '',
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        
    }

    render(){

        const {classes} = this.props;

        return (
            <div>
                <h1>Create a Challenge</h1>
                <form>
                    <Card className={classes.card}>
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
                        <div>
                            <label>Select a category</label>
                            <div className="create-input">
                                <a href='#' name='physical' onClick={this.addCategory}>physical</a>
                                <a href='#' name='mental' onClick={this.addCategory}>mental</a>
                                <a href='#' name='social' onClick={this.addCategory}>social</a>
                           </div> 
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

export default withStyles(styles)(CreateChallenge);
