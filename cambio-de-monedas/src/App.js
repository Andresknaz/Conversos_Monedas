import React, { useState } from 'react';
import Menu from './Menu';
import CambioMoneda from './CambioMoneda';
import Resultado from './Resultado';
import './Styles.css'
const DolarPeso = 4348;

function App() {
  const [opcion, setOpcion] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [tipoMoneda, setTipoMoneda] = useState('');
  const [cantidad, setCantidad] = useState(null); // Agrega cantidad al estado

  const cambiarDolar = (dolares) => {
    const pesosC = dolares * DolarPeso;
    return pesosC;
  };

  const cambiarPesos = (pesos) => {
    const dolares = pesos / DolarPeso;
    return dolares;
  };

  const solicitarCantidad = (tipo) => {
    const cantidad = parseFloat(prompt(`Cuanta cantidad de ${tipo} vas a cambiar:`));
    setCantidad(cantidad); // Actualiza el estado de cantidad
    return cantidad;
  };

  const handleOptionSelect = (selectedOption) => {
    setOpcion(selectedOption);
    setResultado(null);
    setTipoMoneda(selectedOption === 1 ? 'Pesos Colombianos' : 'Dolares');
  };

  const handleCambio = (cantidad) => {
    if (opcion === 1) {
      const pesos = cambiarPesos(cantidad);
      setResultado(pesos);
    } else if (opcion === 2) {
      const dolares = cambiarDolar(cantidad);
      setResultado(dolares);
    }
  };

  return (
    <div className="App">
      {opcion === null ? (
        <Menu onSelectOption={handleOptionSelect} />
      ) : (
        <>
          <CambioMoneda tipo={tipoMoneda} onCambio={handleCambio} />
          {resultado !== null && (
            <Resultado cantidad={cantidad} tipo={tipoMoneda.toLowerCase()} resultado={resultado} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
