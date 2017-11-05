import Rebase from 're-base';
import firebase from 'firebase';
import firebaseValues from './firebaseValues'

const config = {
    apiKey: firebaseValues.apiKey,
    authDomain: firebaseValues.authDomain,
    databaseURL: firebaseValues.databaseURL,
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;