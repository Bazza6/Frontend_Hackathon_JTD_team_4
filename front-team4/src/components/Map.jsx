import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Polygon,
  Tooltip,
  GeoJSON,
} from "react-leaflet";
import { useState } from "react";
import geoData from "../barris.json";

function Map() {
  //const [nome, setNome] = useState("");

  const mapStyle = {
    fillColor: "white",
    color: "red",
    fillOpacity: 0.8,
  };

  function highlightFeature(e) {
    console.log("e.target.setStyle", e.target);

    var layer = e.target;
    layer.setStyle({
      //weight: 3,
      fillcolor: "blue",
      //dashArray: '',
      fillOpacity: 1,
    });
  }

  function resetHighlight(e) {
    //geojson.resetStyle(e);
    //info.update();
  }

  function openTable(e) {
    console.log("e.target onclick", e.target);
    alert("hola");
    //nombreBarrio.innerHTML = e.target.feature.properties.NOM;
    //datosBarrio.innerHTML = e.target.feature.properties.PERIMETRE;
  }
  const onEachBarrio = (barrio, layer) => {
    //layer è il bordo
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: openTable,
    });
  };

  return (
    <>
      <MapContainer center={[41.4, 2.17]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={geoData.features}
          style={mapStyle}
          onEachFeature={onEachBarrio}
        />
      </MapContainer>
    </>
  );
}

export default Map;
