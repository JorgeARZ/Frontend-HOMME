import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import useHydrodynamic from "../hooks/useHidrodinamyc";

const Mapbox = () => {


const { mdpCheck} = useHydrodynamic(); 

  mapboxgl.accessToken =
    "pk.eyJ1Ijoiam9yZ2VhcnoiLCJhIjoiY2xoeHJuY2hwMHJteTNnbjBqcWN5bzU1ZCJ9.gsehy9Q8trkM71y3tU0RWg";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-71.5956);
  const [lat, setLat] = useState(-33.0247);
  const [zoom, setZoom] = useState(3);

//   const geojson = {
//     'type': 'FeatureCollection',
//     'features': mdpCheck
//     };

const setData = (data) =>{
  if (!map.current) return;


  if (!map.current.getSource('data')) {
    map.current.addSource('data', {
      'type': 'geojson',
      'data': data
      });
    // Add the rocket symbol layer to the map.
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
  } else {
    map.current.getSource('data').setData(data);
  }


}

  useEffect(() => {
    setData({
        'type': 'FeatureCollection',
        'features': mdpCheck
        }
    ) 
    },[mdpCheck]) 






    useEffect(()=>{
          // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
      });
  
  
      map.current.on("load",() =>{

  
          map.current.on('move', () => {
              setLng(map.current.getCenter().lng.toFixed(4));
              setLat(map.current.getCenter().lat.toFixed(4));
              setZoom(map.current.getZoom().toFixed(2));
              });
  
              })
    },[])
     
   

  return (
    <>
        <div>
        <div ref={mapContainer} className="map-container" style={{ height: "45rem", width: "110em" }}/>
        </div>

      
    </>
  )
       
};

export default Mapbox;
