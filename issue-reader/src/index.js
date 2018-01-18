import React from 'react';
import ReactDOM from 'react-dom';
import App from './Screens';
import './Assets/Css/App.css'
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
