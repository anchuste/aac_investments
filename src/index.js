import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import "bootstrap.bundle.min"
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Resources/translation/i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
