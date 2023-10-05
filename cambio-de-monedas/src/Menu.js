import React from 'react';

function menu({ onSelectOption }){
    return (
        <div>
            <h2>Cambio de monedas</h2>
            <p>Selecciona una opcion</p>
            <button onClick={() => onSelectOption(1)}>Cambio a Peso Colombiano</button>
            <button onClick={() => onSelectOption(2)}>Cambio a Dolares</button>
            <button onClick={() => onSelectOption(3)}>Salir</button>
        </div>
    );
}

export default menu;