//import axios from "axios";
import {  useState } from "react";

function Table(props) {

  const [order, setOrder] = useState("ASC"); //ascendente
  //const [barrios, setBarrios] = useState([]); 

  //funzione per ordinare che prende come parametro la colonna
  const sorting = (column) => {
    console.log("column", column);

    if (order === "ASC") {
      const sorted = [...props.barrios].sort((a, b) =>
        a[column] > b[column] ? 1 : -1
      );
      props.setBarrios(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...props.barrios].sort((a, b) =>
        a[column] < b[column] ? 1 : -1
      );
      props.setBarrios(sorted);
      setOrder("ASC");
    }
  };

  let dislpayBarrios = props.barrios.map((barrio, index) => {
    return (
      <tr key={index}>
        <td>{barrio['NOMBRE DEL BARRIO']}</td>
        <td>{barrio['INDICE DE SOBREENVEJICIMIENTO']}</td>
        <td>{barrio['NUMERO DE PARADOS']}</td>
        <td>{barrio['POBLACION DE MAS DE 65 AÑOS QUE VIVE SOLA %']}</td>
        <td>{barrio['RENTA FAMILIAR (2017)']}</td>
        <td>{barrio['TITULADOS SUPERIORES Y CFGS %']}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sorting("NOMBRE DEL BARRIO")}>NOMBRE DEL BARRIO</th>
            <th onClick={() => sorting("INDICE DE SOBREENVEJICIMIENTO")}>INDICE DE SOBREENVEJICIMIENTO</th>
            <th onClick={() => sorting("NUMERO DE PARADOS")}>NUMERO DE PARADOS</th>
            <th onClick={() => sorting("POBLACION DE MAS DE 65 AÑOS QUE VIVE SOLA %")}>POBLACION DE MAS DE 65 AÑOS QUE VIVE SOLA %</th>
            <th onClick={() => sorting("RENTA FAMILIAR (2017)")}>RENTA FAMILIAR (2017)</th>
            <th onClick={() => sorting("TITULADOS SUPERIORES Y CFGS %:")}>TITULADOS SUPERIORES Y CFGS %</th>
          </tr>
        </thead>
        <tbody>
          {dislpayBarrios}
          </tbody>
      </table>
    </div>
  );
}

export default Table;
