import React from 'react';

/**
 * created using no class
 * created using const because this is called a functional stateless component
 * this is a static component
 */
const Footer = props => {
    return(
        <footer className='container-fluid text-center'>
            <button className='btn btn-link'>
                <span className='glyphicon glyphicon-chevron-up' onClick={() => window.scrollTo(0, 0)}></span>
            </button>
            <p>Bootstrap Theme Made By <a href='https://www.w3schools.com' title='Visit w3schools'>www.w3schools.com</a></p>
        </footer>
    )
}

export default Footer;
