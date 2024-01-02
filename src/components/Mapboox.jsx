import { useState, useEffect, useRef } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import useHydrodynamic from "../hooks/useHidrodinamyc";

const Mapboox = () => {
  const [range, setRange] = useState("");

  const { mdpCheck } = useHydrodynamic();  

  //Assign the Mapbox token from the environment variable set in .env
  mapboxgl.accessToken =
    "pk.eyJ1Ijoiam9yZ2VhcnoiLCJhIjoiY2xoeHJuY2hwMHJteTNnbjBqcWN5bzU1ZCJ9.gsehy9Q8trkM71y3tU0RWg";

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-71.5956);
  const [lat, setLat] = useState(-33.0247);
  const [zoom, setZoom] = useState(3);
  const [jsonDataChange, setJsonDataChange] = useState({
    "type": "FeatureCollection",
    "features": []
})
  
useEffect(() => {
    paintPoint({
        "type": "FeatureCollection",
        "features": mdpCheck
    })
}, [mdpCheck])

const paintPoint = (data) => {

    const coordinates = document.getElementById("coordinates");
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });


    map.current.on("load", () => {
        map.current.addSource("data", {
          type: "geojson",
          // Use a URL for the value for the `data` property.
          data: data,
        });
    
        map.current.getSource("data").setData(data);
    


      map.current.addLayer({
        id: "data",
        type: "circle",
        source: "data",
        paint: {
          "circle-radius": 4,
          "circle-stroke-width": 2,
          "circle-color": "red",
          "circle-stroke-color": "red",
        },
      });

      document.getElementById("slider").addEventListener("input", function (e) {
        const hour = parseInt(e.target.value);
        // update the map
        map.current.setFilter("data", [
          "==",
          ["number", ["get", "Hour"]],
          hour,
        ]);

        // converting 0-23 hour to AMPM format
        var ampm = hour >= 12 ? "PM" : "AM";
        var hour12 = hour % 12 ? hour % 12 : 12;

        // update text in the UI
        document.getElementById("active-hour").innerText = hour12 + ampm;
      });
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    const coordinatesGeocoder = function (query) {
      // Match anything which looks like
      // decimal degrees coordinate pair.
      const matches = query.match(
        /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
      );
      if (!matches) {
        return null;
      }

      function coordinateFeature(lng, lat) {
        return {
          center: [lng, lat],
          geometry: {
            type: "Point",
            coordinates: [lng, lat],
          },
          place_name: "Lat: " + lat + " Lng: " + lng,
          place_type: ["coordinate"],
          properties: {},
          type: "Feature",
        };
      }

      const coord1 = Number(matches[1]);
      const coord2 = Number(matches[2]);
      const geocodes = [];

      if (coord1 < -90 || coord1 > 90) {
        // must be lng, lat
        geocodes.push(coordinateFeature(coord1, coord2));
      }

      if (coord2 < -90 || coord2 > 90) {
        // must be lat, lng
        geocodes.push(coordinateFeature(coord2, coord1));
      }

      if (geocodes.length === 0) {
        // else could be either lng, lat or lat, lng
        geocodes.push(coordinateFeature(coord1, coord2));
        geocodes.push(coordinateFeature(coord2, coord1));
      }

      return geocodes;
    };

    // Add the control to the map.
    map.current.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        localGeocoder: coordinatesGeocoder,
        zoom: 4,
        placeholder: "Try: -40, 170",
        mapboxgl: mapboxgl,
        reverseGeocode: true,
      })
    );

    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([-71.5956, -33.0247])
      .addTo(map.current);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.innerHTML = `Latitude: ${lngLat.lat}<br /> Longitude: ${lngLat.lng}`;
    }
    
    marker.on("dragend", onDragEnd);
}


  return (
    <>
      <div>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          <div className="text-black " id="coordinates"></div>
        </div>
        <div
          ref={mapContainer}
          className="map-container"
          style={{ height: "45rem", width: "110em" }}
        ></div>
        <div id="console">
          <div className="session" id="sliderbar">
            <h2>
              Hour: <label id="active-hour">0</label>
            </h2>
            <input
              id="slider"
              className="row"
              type="range"
              min="0"
              max="23"
              step="1"
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mapboox;
