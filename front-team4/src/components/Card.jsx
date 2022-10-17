import React from "react";

const Card = (props) => {
  return (
    <div className="w-1/2 bg-white float-right m-20  p-9 drop-shadow-md rounded leading-relaxed text-gray-900">
      <h1 className="text-lg font-bold">
        {props.datosBarrio['NOMBRE DEL BARRIO']}
      </h1>
      <div className="">
        <ul>
           <li>Titulados superiores y CFGS: {props.datosBarrio['TITULADOS SUPERIORES Y CFGS %']}</li>
          <li>Número de parados: {props.datosBarrio['NUMERO DE PARADOS']}</li>
          <li>Renta familiar: {props.datosBarrio['RENTA FAMILIAR (2017)']}</li>
          <li>Población mayor de 65 años que vive sola: {props.datosBarrio['POBLACION DE MAS DE 65 AÑOS QUE VIVE SOLA %']}</li>
          <li>Sobreenvejecimiento: {props.datosBarrio['INDICE DE SOBREENVEJICIMIENTO']}</li> 
        </ul>
      </div>

      <div className="flex justify-around p-5">
      <div className="radial-progress text-sky-500 mt-5" style={{"--value":70}}>
          0%
        </div>
        <div className="radial-progress text-rose-500 mt-5" style={{ "--value": 80 }}>
          0%
        </div>
        </div>
        <div className="flex justify-around p-5">
        <div className="radial-progress text-lime-600 mt-5" style={{ "--value": 80 }}>
          0%
        </div>
        <div className="radial-progress text-yellow-500 mt-5" style={{ "--value": 80 }}>
          0%
        </div>
      </div>
    </div>
  );
};

export default Card;
