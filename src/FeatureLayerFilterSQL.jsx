import "./App.css";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { ArcgisMap } from "@arcgis/map-components-react";
import React from "react";

const featureLayerUrl =
  "https://arlgis.arlingtonva.us/arcgis/rest/services/Open_Data/od_ACS_Demographics/FeatureServer/0";

function FeatureLayerFilterSQL() {
  const showTheLayer = (e) => {
    const featureLayer = new FeatureLayer({
      url: featureLayerUrl,
      outFields: ["*"],
      definitionExpression: "Total_Pop > 5000",
    });
    const { view } = e.target;
    view.map.add(featureLayer);
    console.log(featureLayer);
  };

  return (
    <>
      <ArcgisMap
        onViewReady={showTheLayer}
        zoom={11}
        basemap="streets"
        center="-77.0910, 38.8816"
      ></ArcgisMap>
    </>
  );
}

export default FeatureLayerFilterSQL;
