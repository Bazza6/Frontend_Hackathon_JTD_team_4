import React from "react";
import Card from "./Card";
import Header from "./Header";
import Map from "./Map";
import Text from "./Text";

const Main = () => {
  return (
    <div>
      <Header />
      <Text/>
      <div className="flex justify-between">
        <Map />
        <Card />
      </div>
    </div>
  );
};

export default Main;
