import React from 'react';
import App from './App';

function menu({ onSelectOption, handleSalir }){
    return (
        <div>
            <h2>Cambio de monedas</h2>
            <p>Selecciona una opcion</p>
            <button onClick={() => onSelectOption(1)}>Cambio a Dolares </button>
            <button onClick={() => onSelectOption(2)}>Cambio a Peso Colombiano</button>
            <button onClick={handleSalir}>Salir</button>
        </div>
    );
}

export default menu;