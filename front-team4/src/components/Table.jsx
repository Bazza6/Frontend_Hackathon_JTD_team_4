import { useState } from "react";

function Table(props) {
  //console.log(props.arrayPeople[0].[name])

  const [order, setOrder] = useState("ASC"); //ascendente

  //funzione per ordinare che prende come parametro la colonna
  const sorting = (column) => {
    console.log("column", column);

    if (order === "ASC") {
      const sorted = [...props.arrayPeople].sort((a, b) =>
        a[column] > b[column] ? 1 : -1
      );
      props.setArrayPeople(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...props.arrayPeople].sort((a, b) =>
        a[column] < b[column] ? 1 : -1
      );
      props.setArrayPeople(sorted);
      setOrder("ASC");
    }
  };

  let displayPeople = props.arrayPeople.map((person, index) => {
    const { name, height, mass, hair_color } = person;
    return (
      <tr key={index}>
        <td> {name}</td>
        <td>{height}</td>
        <td>{mass}</td>
        <td>{hair_color}</td>
      </tr>
    );
  });
  /*         return (
                <tr key={index}>
                    <td> {person.name}</td >
                    <td>{person.height}</td>
                    <td>{person.mass}</td>
                    <td>{person.hair_color}</td>
                </tr >
            )
        }) */

  return (
    <div className="container">
      <h1>react table</h1>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => sorting("name")}>nome</th>
            <th onClick={() => sorting("height")}>altezza</th>
            <th onClick={() => sorting("mass")}>peso</th>
            <th onClick={() => sorting("hair_color")}>colore capelli</th>
          </tr>
        </thead>
        <tbody>{displayPeople}</tbody>
      </table>
    </div>
  );
}

export default Table;
