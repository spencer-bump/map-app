import React from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
import "./LeafletMap.css";

const LeafletMap = () => {

  const myLocations = [
    {
      lat: 20.836590,
      lng: -156.3533489,
      zoom: 9,
      id: 1025,
      name: "Home",
      description: "2741 Leolani Pl"
    },
    {
      lat: 20.7,
      lng: -156.0,
      zoom: 9,
      id: 1026,
      name: "Hana",
      description: "Other side"
    }
  ];

  let [mapCenter, setMapCenter] = React.useState(myLocations[0]);
  let [popupMarker, setPopupMarker] = React.useState(false);
  let [mapMarkers, setMapMarkers] = React.useState(myLocations);


  return (
    <div className="leaflet-container" id="mapid">
      <Map center={[mapCenter.lat, mapCenter.lng]} zoom={mapCenter.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {mapMarkers.map(marker => {

          let { lat, lng } = marker;
          let position = [lat, lng];
          return (
            <div>
              <Marker
                key={marker.id}
                position={position}
                onClick={() => {
                  console.log("clicked the marker");
                }} >
                <Popup
                  position={position}
                  onClose={() => {
                    console.log('close popup');
                  }} >
                  <div className="ui list" >
                    <h4 className="ui header">{marker.name}</h4>
                      {Object.keys(marker).filter(property => property !== "id" && property !== "name").sort().map( property => {
                      return (<div
                                key={marker.description}
                                className="item" >
                                {property}: {marker[property]}
                              </div>);
                      })}
                  </div>
                </Popup>
              </Marker>
            </div>
            );
          })
        }
      </Map>
    </div>
  )
};

export default LeafletMap;