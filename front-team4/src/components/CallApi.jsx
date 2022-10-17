/* import { useState, useEffect } from "react";
import axios from "axios";

function CallApi() {
  const [datos, setDatos] = useState([]);

  const baseURL = "https://hackaton-td-equip-6.herokuapp.com/barris";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setDatos("RESPONSE: ", response);
        //console.log("response", response);
      })
      .catch(() => console.log("algo ha ido mal"));
  }, []);

  return <></>;
}

export default CallApi;
 */
