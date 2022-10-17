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
//import geoData from "../barris.json";

function Map(props) {
  const mapStyle = {
    fillColor: "white",
    color: "red",
    fillOpacity: 0.5,
  };

  function highlightFeature(e) {
    //console.log("e.target.setStyle", e.target);
    var layer = e.target;
    layer.setStyle({
      weight: 3,
      fillcolor: "red",
      //dashArray: '',
      fillOpacity: 1,
    });
  }

  function resetHighlight(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 3,
      fillcolor: "blue",
      //dashArray: '',
      fillOpacity: 0.5,
    });
  }

  function openCard(e) {
    //console.log("e.target onclick", e.target.feature.properties.NOM);
    props.setNombreBarrio(e.target.feature.properties.NOM);
    //nombreBarrio.innerHTML = e.target.feature.properties.NOM;
    //datosBarrio.innerHTML = e.target.feature.properties.PERIMETRE;
  }
  const onEachBarrio = (barrio, layer) => {
    //layer è il bordo
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: openCard,
    });
  };
  return (
    <>
    <div className="m-20 drop-shadow-md">
        <MapContainer center={[41.4, 2.17]} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON
            data={props.geoData.features}
            style={mapStyle}
            onEachFeature={onEachBarrio}
          />
        </MapContainer>
      </div>

    </>
  );
}

export default Map;
