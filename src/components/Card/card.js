import React from 'react';
import cardImage from './img-card-innov7.jpeg'; // Importa la imagen

const Card = () => {
    return (
        <div className="card">
            <img src={cardImage} alt="Card Image" />
            <h2>Card Component</h2>
            <p>Otro contenido del componente card...</p>
        </div>
    );
};

export default Card;
