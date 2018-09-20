import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { auth } from './../firebase-config';
import AdminMenu from './AdminMenu';
import AdminPortfolio from './AdminPortfolio';

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuthenticated: false,
            isLoging: true,
            user: null,
        }
    }

    //as soon as the component renders on the screen
    componentDidMount() {
        //if there was a change in authentication state receives user and record on this state
        auth.onAuthStateChanged(user => {
            this.setState({
                isAuthenticated: !!user, //or true or false
                isLoging: false,
                user,
            })
        })
    }

    render() {
        if(this.state.isLoging) {
            return(
                <div className='spinnerContainer'>
                    <i className='fa fa-spinner fa-spin' />
                </div>
            )
        }
        else if(!this.state.isAuthenticated) {
            return(
                <Redirect to='/login' />
            )
        }
        return(
            <div className='administrativeTop'>
                <h2 className='text-center'>Administrative Panel</h2>
                <Route path={`/`} component={AdminMenu} />
                {/* always takes the current url */}
                <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio} />
                {/* transforms all the "props" of the screen into string */}
                {/* <p>{JSON.stringify(this.props)}</p> */}
            </div>
        )
    }
}

export default Admin;
