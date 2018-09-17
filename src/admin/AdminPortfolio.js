import React, { Component } from 'react';

class AdminPortfolio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='administrativeArea'>
                <h2 className='margin-top-h2 text-center'>Portfolio Admninistrative Area</h2>
                <form>
                    <div className='form-group'>
                        <label for='title'>Enter with Title</label>
                        <input type='text' className='form-control' id='title' placeholder='Title' />
                    </div>
                    <div className='form-group'>
                        <label for='subtitle'>Enter with Subtitle</label>
                        <textarea className='form-control' id='subtitle' rows='3' placeholder='Subtitle'></textarea>
                    </div>
                    <div className='form-group file-upload'>
                        <label for='image'>Select an Image</label>
                        <input type='file' className='form-control-file' id='image' />
                    </div>
                    <button type='submit' className='btn btn-block btn-lg'>Save</button>
                </form>
            </div>
        )
    }
}

export default AdminPortfolio;
