import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Mycomponent from './Mycomponent';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Services />, document.getElementById('services'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Mycomponent />, document.getElementById('iso'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
