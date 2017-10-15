import React, { Component } from 'react';

export default class RegisterForm extends Component{


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

        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.submitForm} style ={{width: "30%", minWidth: "300px", margin: "2rem auto"}}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" onChange={this.onChange}></input>
                        {/*usernameMessage && <div className="form-control-feedback">{usernameMessage}</div>*/}   
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" onChange={this.onChange}></input>
                        {/* emailMessage && <div className="form-control-feedback">{emailMessage}</div>*/}                               
                    </div>
                    <div>
                        <label htmlFor="password">Password *(at least 8 characthers)</label>
                        <input type="password" className="form-control" name="password" onChange={this.onChange}></input>
                        {/*passwordMessage && <div className="form-control-feedback">{passwordMessage}</div>*/}   
                    </div>
                    <input className="btn btn-primary" type="submit" value="Register"/>
                </form> 
           </div>
        )
    }
}