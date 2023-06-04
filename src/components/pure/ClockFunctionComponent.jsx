import React, { useState, useEffect } from 'react';

const ClockFunctionComponent = () => {
  const initialStateValue = {
    // Se genera una fecha como estado inicial del componente
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José',
  };
  const [state, setState] = useState(initialStateValue);

  function tick() {
    setState({
      ...state,
      edad: ++state.edad,
      fecha: new Date(),
    });
  }

  //ComponentDidMount Function:
  let intervalId = null;
  useEffect(() => {
    console.log('se ha montado el componente');
    intervalId = setInterval(tick, 1000);
    return () => {
      console.log('se desmontara el componente');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default ClockFunctionComponent;
