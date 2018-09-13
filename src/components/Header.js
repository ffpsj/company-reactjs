import React from 'react';

const Header = props => {
    return(
        <div>
            <div className='jumbotron text-center'>
                <h1>Company</h1>
                <p>We specialize in blablabla</p>
                <form>
                    <div className='input-group'>
                        <input type='email' className='form-control' size='50' placeholder='Email Address' required />
                        <div className='input-group-btn'>
                            <button type='button' className='btn btn-danger'>Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        </button>
                        <a className='navbar-brand' href='#myPage'>Logo</a>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><a href='#about'>ABOUT</a></li>
                            <li><a href='#services'>SERVICES</a></li>
                            <li><a href='#portfolio'>PORTFOLIO</a></li>
                            <li><a href='#pricing'>PRICING</a></li>
                            <li><a href='#contact'>CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
