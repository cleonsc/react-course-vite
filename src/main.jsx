import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* Esto manda un subtitle string */}
        {/* <FirstApp title="Hols Soy Clsc" subTitle="123" /> */}
        {/* Esto manda un subtitle number */}
        <FirstApp title="Hols Soy Clsc" subTitle={123} />
    </React.StrictMode>
)