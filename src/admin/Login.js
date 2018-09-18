import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)

        //initiates login and password as null
        this.loginEmail = null
        this.loginPassword = null

        this.authUser = this.authUser.bind(this)
    }

    authUser() {
        console.log(this.loginEmail.value, this.loginPassword.value)
    }

    render() {
        return(
            <div className='administrativeArea'>
                <h2 className='margin-top-h2 text-center'>Login</h2>
                {/* creating submit method without form */}
                {/*<form>*/}
                <div className='form-group'>
                    <label htmlFor='loginEmail'>Email Address</label>
                    <input type='email' className='form-control' id='loginEmail' aria-describedby='emailHelp' placeholder='Enter Email' ref={(ref) => this.loginEmail = ref} />
                    <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                </div>
                <div className='form-group'>
                    <label htmlFor='loginPassword'>Password</label>
                    <input type='password' className='form-control' id='loginPassword' placeholder='Enter Password' ref={(ref) => this.loginPassword = ref} />
                </div>
                {/* change button type from submit to button */}
                {/* create onClick method */}
                <button type='button' className='btn btn-block btn-lg' onClick={this.authUser}>Submit</button>
                {/*</form>*/}
            </div>
        )
    }
}

export default Login;