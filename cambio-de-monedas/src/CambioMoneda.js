import React, { useState } from 'react';



function CambioMoneda({ tipo, onCambio }){
    const [cantidad, setCantidad] = useState('');


    const handleChange = (e) => {
        setCantidad(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCambio(parseFloat(cantidad));
    };

   

    return (
        <div>
            <h2>Cambio a {tipo === 'dolares' ? 'Pesos Colombianos' : 'Dolares'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Que cantidad de {tipo} vas a cambiar:
                    <input type="number" step="0.01" value={cantidad} onChange={handleChange} />
                </label>
                <button type="submit">Calcular</button>
               
            </form>
        </div>
    );
}

export default CambioMoneda;