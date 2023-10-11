import React from 'react';

function Resultado ({ cantidad, tipo, resultado }) {
    return (
        <div>
            <h2>Resultado</h2>
            <p>El resultado de cambiar {cantidad} {tipo} es de {resultado} {tipo === 'dolares' ? 'Pesos Colombianos' : 'Dolares'}</p>
        </div>
    );
}

export default Resultado;