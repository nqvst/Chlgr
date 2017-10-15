import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '20px',
    },
});

class RegisterForm extends Component{
    state = {
        username: '',
        email: '',
        password: '',
    }

    //sets the state based on the name and value from the current inputfield
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.registerFirebase(this.state.email, this.state.password, this.state.username);
    }

    render(){

        const {classes} = this.props;

        return (
            <div>
                <h1>Register</h1>
                <form>
                    <div className={classes.container}>
                    <Input placeholder="UserName" type="text" name="username" onChange={this.onChange} inputProps={{'aria-label': 'Description',}}/>
                    </div>
                    <div className={classes.container}>
                    <Input placeholder="Email" type="email" name="email" onChange={this.onChange} inputProps={{'aria-label': 'Description',}}/>
                        {/* emailMessage && <div className="form-control-feedback">{emailMessage}</div>*/}                               
                    </div>
                    <div className={classes.container}>
                        <Input placeholder="PassWord" type="password" name="password" onChange={this.onChange} inputProps={{'aria-label': 'Description',}}/>
                        {/*passwordMessage && <div className="form-control-feedback">{passwordMessage}</div>*/}   
                    </div>
                    <div className={classes.container}>
                        <Button color="primary" raised onClick={this.submitForm}>Register</Button>
                    </div>
                </form> 
           </div>
        )
    }
}

export default withStyles(styles)(RegisterForm);
