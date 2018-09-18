import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import config, { storage, auth } from './../firebase-config';

class Login extends Component {
    constructor(props) {
        super(props)

        //initial state
        this.state = {
            isAuthenticated: false,
            isLoging: false,
            error: false,
        }

        //initiates login and password as null
        this.loginEmail = null
        this.loginPassword = null

        this.authUser = this.authUser.bind(this)
    }

    authUser() {
        console.log(this.loginEmail.value, this.loginPassword.value)

        //current state, after button has clicked
        this.setState({
            isAuthenticated: false,
            isLoging: true,
            error: false,
        })

        //authenticate what comes from the form
        //if the user is authenticated, show it, otherwise show the error
        auth.signInWithEmailAndPassword(this.loginEmail.value, this.loginPassword.value).then(user => {
            console.log('Usuário: ', user)
            this.setState({
                isAuthenticated: true,
                isLoging: false,
                error: false,
            })
        })
        .catch(err => {
            console.log('Erro: ', err)
            this.setState({
                isAuthenticated: false,
                isLoging: false,
                error: true,
            })
        })
    }

    render() {
        {/* if the user is authenticated, redirect to the "admin" */}
        if(this.state.isAuthenticated) {
            return(
                <Redirect to='/admin' />
            )
        }
        return(
            <div className='administrativeArea'>
                <h2 className='margin-top-h2 text-center'>Login</h2>
                {/* creating submit method without form */}
                {/*<form>*/}
                <div className='form-group'>
                    <label htmlFor='loginEmail'>Email Address</label>
                    <input type='email' className='form-control' id='loginEmail' aria-describedby='emailHelp' placeholder='Enter Email' ref={(ref) => this.loginEmail = ref} />
                </div>
                <div className='form-group'>
                    <label htmlFor='loginPassword'>Password</label>
                    <input type='password' className='form-control' id='loginPassword' placeholder='Enter Password' ref={(ref) => this.loginPassword = ref} />
                    {/* is shown only if there is an error */}
                    {this.state.error && <small id='emailHelp' className='form-text text-muted error-text'>Invalid e-mail or password</small>}
                </div>
                {/* change button type from submit to button */}
                {/* create onClick method */}
                {/* if isLogging true disable button */}
                <button type='button' disabled={this.state.isLoging} className='btn btn-block btn-lg' onClick={this.authUser}>Submit</button>
                {/*</form>*/}
            </div>
        )
    }
}

export default Login;