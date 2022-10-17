import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Map from "./Map";
import geoData from "../barris.json";
import axios from "axios";
//import Table from "./Table";
import Text from "./Text";

const Main = () => {
  const [nombreBarrio, setNombreBarrio] = useState("el Raval");
  const [datosBarrio, setDatoBarrio] = useState();

  //console.log("nombre barrio:", nombreBarrio);

  useEffect(() => {
    const baseURL = `https://hackaton-td-equip-6.herokuapp.com/barri/${nombreBarrio}`;
    axios
      .get(baseURL)
      .then((response) => {
        /* console.log(
          "responseadffsdfd",
          response.data[0]["POBLACION DE MAS DE 65 AÑOS QUE VIVE SOLA %"]
        ); */
        setDatoBarrio(response.data[0]);
        //console.log("response", response);
      })
      .catch(() => console.log("algo ha ido mal"));
  }, [nombreBarrio]);

  console.log("datos barrio", datosBarrio);
  return (
    <div>
      <Header />
      <Text/>
      <div className="flex justify-between">
        <Map geoData={geoData} setNombreBarrio={setNombreBarrio} />
        {datosBarrio && <Card datosBarrio={datosBarrio} />}
      </div>
      {/* <Table /> */}
    </div>
  );
};

export default Main;
