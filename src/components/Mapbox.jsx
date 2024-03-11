import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import useHydrodynamic from "../hooks/useHidrodinamyc";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const Mapbox = () => {
  const { mdpCheck } = useHydrodynamic();

  mapboxgl.accessToken =
    "pk.eyJ1Ijoiam9yZ2VhcnoiLCJhIjoiY2xoeHJuY2hwMHJteTNnbjBqcWN5bzU1ZCJ9.gsehy9Q8trkM71y3tU0RWg";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-71.5956);
  const [lat, setLat] = useState(-33.0247);
  const [zoom, setZoom] = useState(2);
  const [range, setRange] = useState("");

  

  const setData = (data) => {
    if (!map.current) return;

    if (!map.current.getSource("data")) {
      map.current.addSource("data", {
        type: "geojson",
        data: data,
      });
      // Add the rocket symbol layer to the map.
      map.current.addLayer({
        id: "data",
        type: "circle",
        source: "data",
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['number', ['get', 'Origin']],
            0,
            4,
            5,
            24
          ],
          'circle-color': [
            'interpolate',
            ['linear'],
            ['number', ['get', 'Origin']],
            0,
            '#2DC4B2',
            1,
            '#3BB3C3',
            2,
            '#669EC4',
            3,
            '#8B88B6',
            4,
            '#A2719B',
            5,
            '#AA5E79'
          ],
          'circle-opacity': 0.8
        }
        // paint: {
        //   "circle-radius": 4,
        //   "circle-stroke-width": 2,
        //   "circle-color": "blue",
        //   "circle-stroke-color": "blue",
        // },
      });
    } else {
      map.current.getSource("data").setData(data);
    }
  };

  useEffect(() => {
    setData({
      type: "FeatureCollection",
      features: mdpCheck,
    });
  }, [mdpCheck]);

  useEffect(() => {
    // initialize map only once
    const coordinates = document.getElementById("coordinates");
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    


    map.current.on("load", () => {
      map.current.on("move", () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
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
        // var ampm = hour >= 12 ? "PM" : "AM";
        // var hour12 = hour % 12 ? hour % 12 : 12;

        // update text in the UI
        // document.getElementById("active-hour").innerText = hour12 + ampm;
      });

    });
    map.current.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );
    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([-71.5956, -33.0247])
      .addTo(map.current);

    function onDragEnd() {
      const lngLat = marker.getLngLat();
      coordinates.innerHTML = `Latitude: ${lngLat.lat}<br />Longitude: ${lngLat.lng}`;
    }

    marker.on("dragend", onDragEnd);

    map.current.addControl(new mapboxgl.FullscreenControl());
    map.current.addControl(new mapboxgl.NavigationControl());
  }, []);

  return (
    <>
      <div>
        <div
          ref={mapContainer}
          className="map-container"
          style={{ height: "48rem", width: "70em" }}
        />
        <pre id="coordinates" className="coordinates" style={{position:"absolute", bottom:"8em", left:"36em", padding:"10px 15px", margin:"0", color:"#fff",background: "rgba(0, 0, 0, 0.5)",borderRadius:"3px", lineHeight:'20px', fontSize:'16px'}}></pre>
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
    </>
  );
};

export default Mapbox;
