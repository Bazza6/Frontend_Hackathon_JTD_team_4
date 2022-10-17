import React from "react";

const Card = (props) => {
  return (
    <div className="w-1/2 bg-white float-right m-20  p-9 drop-shadow-md rounded leading-relaxed text-gray-900">
      <h1 className="text-lg font-bold">
        {props.datosBarrio["NOMBRE DEL BARRIO"]}
      </h1>
      <div className="">
        <ul>
          <li>
            Titulados superiores y CFGS:{" "}
            {props.datosBarrio["TITULADOS SUPERIORES Y CFGS %"]}%
          </li>
          <li>Número de parados: {props.datosBarrio["NUMERO DE PARADOS"]}</li>
          <li>Renta familiar: {props.datosBarrio["RENTA FAMILIAR (2017)"]}</li>
          <li>
            Población mayor de 65 años que vive sola:{" "}
            {props.datosBarrio["POBLACION DE MAS DE 65 AÑOS QUE VIVE SOLA %"]}%
          </li>
          <li>
            Sobreenvejecimiento:{" "}
            {props.datosBarrio["INDICE DE SOBREENVEJICIMIENTO"]}
          </li>
        </ul>
      </div>

      <div className="flex justify-around p-5 mt-10">
        <div>
          <p className=" text-sky-500 ">Titulados</p>
          <div
            className="radial-progress text-sky-500 mt-5"
            style={{
              "--value": props.datosBarrio["TITULADOS SUPERIORES Y CFGS %"],
            }}
          >
            {props.datosBarrio["TITULADOS SUPERIORES Y CFGS %"]}%
          </div>
        </div>

        <div>
        <p className="text-rose-500 text-center"> > 65 que viven solos</p>
        <div
          className="radial-progress text-rose-500 mt-5"
          style={{
            "--value":
              props.datosBarrio["POBLACION DE MAS DE 65 AÑOS QUE VIVE SOLA %"],
          }}
        >
          {props.datosBarrio["POBLACION DE MAS DE 65 AÑOS QUE VIVE SOLA %"]}%
        </div>

        </div>

          <div>
          <p className="text-yellow-500">Sobreenvejecimiento</p>
        <div
          className="radial-progress text-yellow-500 mt-5 text-center"
          style={{
            "--value": props.datosBarrio["INDICE DE SOBREENVEJICIMIENTO"],
          }}
        >
          {props.datosBarrio["INDICE DE SOBREENVEJICIMIENTO"]} <br />
          index
        </div>
          </div>

      </div>
    </div>
  );
};

export default Card;
