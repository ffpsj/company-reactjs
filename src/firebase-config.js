//imports
const rebase = require('re-base')
const firebase = require('firebase')

//coming from firebase
const firebaseConfig = {
  apiKey: "AIzaSyBugQXzvxv_YWraZfCMoa_L_dEvt5rJ6bo",
  authDomain: "company-reactjs.firebaseapp.com",
  databaseURL: "https://company-reactjs.firebaseio.com",
  projectId: "company-reactjs",
  storageBucket: "company-reactjs.appspot.com",
  messagingSenderId: "652117770326"
}

//put the initializeApp in a constant
const app = firebase.initializeApp(firebaseConfig)

//step to use the bank with the rebase
const config = rebase.createClass(app.database())

//export the storage separated
export const storage = app.storage()

//export the component I want to use
export default config
