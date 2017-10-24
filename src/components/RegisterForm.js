import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';

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

class RegisterForm extends Component{
    state = {
        username: '',
        email: '',
        password: '',
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.registerFirebase(this.state.email, this.state.password, this.state.username);
    }

    render(){

        const {classes} = this.props;

        return (
            <div>
                <h1>Register</h1>
                <form>
                    <Card className={classes.card}>
                        <div className={classes.container}>
                            <Input className={classes.input} placeholder="Username" type="text" name="username" onChange={this.onChange} inputProps={{'aria-label': 'Username',}}/>
                        </div>
                        <div className={classes.container}>
                            <Input className={classes.input} placeholder="Email" type="email" name="email" onChange={this.onChange} inputProps={{'aria-label': 'Email',}}/>
                        </div>
                        <div className={classes.container}>
                            <Input className={classes.input} placeholder="Password" type="password" name="password" onChange={this.onChange} inputProps={{'aria-label': 'Password',}}/>
                        </div>
                        <div className={classes.container}>
                            <Button color="inherit" raised onClick={this.onSubmit}>Register</Button>
                        </div>
                    </Card>
                </form>
           </div>
        )
    }
}

export default withStyles(styles)(RegisterForm);
