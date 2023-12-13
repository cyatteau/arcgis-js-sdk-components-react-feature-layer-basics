import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import { ArcgisMap } from "@arcgis/map-components-react";

const geoJsonUrl =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

export default function ShowGeoJSONLayer() {
  const handleViewReady = (e) => {
    const geoJsonLayer = new GeoJSONLayer({ url: geoJsonUrl });

    const { view } = e.target;
    view.map.add(geoJsonLayer);
  };

  return <ArcgisMap onViewReady={handleViewReady} basemap="gray-vector" />;
}
