import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//import storage from firebase-config
import config, {storage} from './../firebase-config';

import AdminMenu from './AdminMenu';
import AdminPortfolio from './AdminPortfolio';

class Admin extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='administrativeArea'>                
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
