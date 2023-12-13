import "./App.css";
import ShowFeatureLayer from "./ShowFeatureLayer";
import FeatureLayerPopup from "./FeatureLayerPopup";
import FeatureLayerFilterSQL from "./FeatureLayerFilterSQL";

function App() {
  return (
    <>
      <h1 className="typeTitle">
        Feature Layer Basics with Web Components
        <br /> of the ArcGIS Maps SDK for JS using React
      </h1>
      <div className="featureStuff">
        <span className="mapStuff">
          <h3 className="typeTitle">Style Features</h3>
          <ShowFeatureLayer />
        </span>
        <span className="mapStuff">
          <h3 className="typeTitle">Show Popups</h3>
          <FeatureLayerPopup />
        </span>
        <span className="mapStuff">
          <h3 className="typeTitle">
            Filter with SQL:{" "}
            <span className="smallerText">Total population &gt; 5000</span>
          </h3>
          <FeatureLayerFilterSQL />
        </span>
      </div>
    </>
  );
}

export default App;
