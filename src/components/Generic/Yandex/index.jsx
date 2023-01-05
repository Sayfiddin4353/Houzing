import React from "react";
import { YMaps, Map,Placemark} from "react-yandex-maps";

const mapStyle = {
  position: "relative",
  left: 0,
  top: 0,
  width: "100%",
  height: "50vh",
  overflow: "hidden",
};
// query={{ apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b", lang: "EN" }}
const Yandex = ({center}) => {
  
  return (
    <YMaps >
      <Map style={mapStyle} defaultState={{center:center|| [ 41.311081, 69.240562], zoom: 12} }>
     <Placemark geometry={[41.311081, 69.240562]}/>
      </Map>
    </YMaps>
  );
};

export default Yandex;
