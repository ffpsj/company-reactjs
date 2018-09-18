import React, { Component } from 'react';

//import storage from firebase-config
import config, {storage} from './../firebase-config';

class AdminPortfolio extends Component {
    constructor(props) {
        super(props)
        //create access to this in a savePortfolio function
        this.savePortfolio = this.savePortfolio.bind(this)
    }

    savePortfolio(e) {
        //shows the content in question
        console.log(this.title.value)
        console.log(this.subtitle.value)
        console.log(this.image.value)

        //files return an array with all informations about image
        //choose exactly the first element (0)
        const archive = this.image.files[0]
        //get the chosen elements from archive
        const {name, size, type} = archive
        console.log(name, size, type)

        //choose the file that will be written on "storage"
        //name that's how it will be recognized on the database
        const recordImage = storage.ref(name)
        //put the file (archive) in the database
        //after it is uploaded, return an object (img)
        //get reference to this object (img) to bring its url
        //then place this url on the following object (imageURL)
        recordImage.put(archive).then(img => {
            img.ref.getDownloadURL().then(imageURL => {
                console.log(imageURL)
                //create an object to put on the database, with all informations collected in the form
                const databaseInformation = {
                    title: this.title.value,
                    subtitle: this.subtitle.value,
                    image: imageURL,
                }
                console.log(databaseInformation)
                //push objetc (databaseInformation) on the portfolio (name of firebase database)
                config.push('portfolio', {
                    data: databaseInformation
                })
            })
        })

        //prevents page loading by pressing submit button, passing event as parameter in the current function
        e.preventDefault()
    }

    //transforms from for to htmlFor
    //from class to className
    //from " to '
    //close all tags
    render() {
        return(
            <div className='administrativeArea'>
                <h2 className='margin-top-h2 text-center'>Portfolio Admninistrative Area</h2>
                {/* create onSubmit method to form */}
                <form onSubmit={this.savePortfolio}>
                    <div className='form-group'>
                        <label htmlFor='title'>Enter with Title</label>
                        {/* writes the default reference in the given property (any name) */}
                        <input type='text' className='form-control' id='title' placeholder='Title' ref={(ref) => this.title = ref} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='subtitle'>Enter with Subtitle</label>
                        <textarea className='form-control' id='subtitle' rows='3' placeholder='Subtitle' ref={(ref) => this.subtitle = ref}></textarea>
                    </div>
                    <div className='form-group file-upload'>
                        <label htmlFor='image'>Select an Image</label>
                        <input type='file' className='form-control-file' id='image' ref={(ref) => this.image = ref} />
                    </div>
                    <button type='submit' className='btn btn-block btn-lg'>Save</button>
                </form>
            </div>
        )
    }
}

export default AdminPortfolio;
