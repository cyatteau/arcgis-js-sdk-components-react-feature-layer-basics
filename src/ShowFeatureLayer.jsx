import "./App.css";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { ArcgisMap } from "@arcgis/map-components-react";
import React from "react";

const featureLayerUrl =
  "https://arlgis.arlingtonva.us/arcgis/rest/services/Open_Data/od_ACS_Demographics/FeatureServer/0";

const arlington_demographics_renderer = {
  type: "simple",
  symbol: {
    color: "rgba(100, 76, 115, 0.15)",
    type: "simple-fill",
    outline: {
      color: "white",
      width: 1,
    },
  },
};

function ShowFeatureLayer() {
  const showTheLayer = (e) => {
    const featureLayer = new FeatureLayer({
      url: featureLayerUrl,
      renderer: arlington_demographics_renderer,
    });
    const { view } = e.target;
    view.map.add(featureLayer);
  };

  return (
    <>
      <ArcgisMap
        onViewReady={showTheLayer}
        zoom={11}
        basemap="streets"
        center="-77.1010, 38.8816"
      ></ArcgisMap>
    </>
  );
}

export default ShowFeatureLayer;
