import "./App.css";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { ArcgisMap } from "@arcgis/map-components-react";
import React from "react";

const featureLayerUrl =
  "https://arlgis.arlingtonva.us/arcgis/rest/services/Open_Data/od_ACS_Demographics/FeatureServer/0";

const popupDemographics = {
  title: "Demographics",
  content: "<b>Total Population: </b>{Total_Pop}",
};

function FeatureLayerPopup() {
  const showTheLayer = (e) => {
    const featureLayer = new FeatureLayer({
      url: featureLayerUrl,
      popupTemplate: popupDemographics,
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

export default FeatureLayerPopup;
