import React from "react";

const Card = () => {
  return (
    <div className="w-1/2 bg-white float-right m-20  p-9 drop-shadow-md rounded leading-relaxed text-gray-900">
      <h1 className="text-lg">Nombre Barrio</h1>
      <div className="">
        <p>Datos: </p>
        <ul>
          <li>Titulados superiores y CFGS</li>
          <li>Número de parados</li>
          <li>Renta familiar</li>
          <li>Población mayor de 65 años que vive sola</li>
          <li>Sobreenvejecimiento</li>
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
