import { useState } from "react";

function CallApi() {
  const [datos, setDatos] = useState([]);

  const url = "https://hackaton-td-equip-6.herokuapp.com/barris";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setDatos(response);
        console.log("response", response);
      })
      .catch(() => console.log("algo ha ido mal"));
  }, []);

  return <></>;
}

export default CallApi;
