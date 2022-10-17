import React from "react";
import Card from "./Card";
import Header from "./Header";
import Map from "./Map";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <Map />
        <Card />
      </div>
    </div>
  );
};

export default Main;
