import 'normalize.css';
import 'animate.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import App from './components/App';
import './stylesheets/index.css';

// sentry config
Raven.config('https://78b79f34bfd8464b8e19fb47c114f922@sentry.io/100524').install();

// load app
ReactDOM.render(<App />, document.getElementById('root'));
