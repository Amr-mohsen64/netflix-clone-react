import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { GLobalStyles } from './global-styles';
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <GLobalStyles />
        <App />
    </>
);
