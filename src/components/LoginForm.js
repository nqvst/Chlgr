import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import { connect } from "react-redux";


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

class LoginForm extends Component{
    state = {
        email: '',
        password: '',
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.loginFirebase(this.state.email, this.state.password);
    }

    //creating error messages based on the messeges from Firebase, handled in the ".catch"
    getErrorMessage = (err) => {
        let msg = [];        
        if(err === 'auth/wrong-password'){
            msg.push('Wrong Password');
        }
        if(err === 'auth/user-not-found'){
            msg.push('User not found');
        }
        if(err === 'auth/invalid-email'){
            msg.push('Invalid email-address');
        }
        if(msg.length === 0 && err) {
            msg.push('Something went wrong.');
        }
        return msg;
    }

    render(){

        const {classes, error} = this.props;

        console.log(error);

        let errorMessage = this.getErrorMessage(error);         

        return (
            <div>
                <h1>Login</h1>
                <form>
                    <Card className={classes.card}>
                        {errorMessage.length != 0 &&  errorMessage.map((error) => <p>{error}</p>)}
                        <div className={classes.container}>
                            <Input className={classes.input} placeholder="Email" type="email" name="email" onChange={this.onChange} inputProps={{'aria-label': 'Email',}}/>
                        </div>
                        <div className={classes.container}>
                            <Input className={classes.input} placeholder="Password" type="password" name="password" onChange={this.onChange} inputProps={{'aria-label': 'Password',}}/>
                        </div>
                        <div className={classes.container}>
                            <Button color="inherit" raised onClick={this.onSubmit}>Login</Button>
                        </div>
                    </Card>
                </form>
           </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        error: state.auth.error,
    };
}


export default connect( mapStateToProps)(withStyles(styles)(LoginForm));
