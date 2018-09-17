import React from 'react';

const PortfolioItem = props => {
    return(
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src='paris.jpg' alt='Paris' width='400' height='300' />
                {/* the use of "this.props" is used in classes, when we work with the props directly we use only "props" */}
                <p><strong>{props.content.title}</strong></p>
                <p>{props.content.subtitle}</p>
            </div>
        </div>
    )
}

export default PortfolioItem;
