import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* esto es para enviar un boleano, ambas formas envian true */}
        {/* <FirstApp title={true} subTitle={123} />
        <FirstApp title subTitle={123} /> */}
        <FirstApp title="Hols soy Goku!!!" subTitle={123} />
    </React.StrictMode>
)