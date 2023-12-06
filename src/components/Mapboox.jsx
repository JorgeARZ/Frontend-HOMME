import { useState, useEffect, useRef } from "react";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import useHydrodynamic from '../hooks/useHidrodinamyc';
// import { parseJsonToGeoJson} from "../utils/dataParserJsonToGeoJson";


const Mapboox = () => {

  const [range,setRange] =useState('')


    const {mdpGeojson} = useHydrodynamic()
    
    // const geoData = Object.values(mdpGeojson)
 
    // {geoData.map((data)=>{
    //     Object.values(data.model).map((data2)=>{
    //         data2.map((data3)=>{
    //           console.log(data3)
    //         })
    //     })
    // })}




    



     //Assign the Mapbox token from the environment variable set in .env
    mapboxgl.accessToken = "pk.eyJ1Ijoiam9yZ2VhcnoiLCJhIjoiY2xoeHJuY2hwMHJteTNnbjBqcWN5bzU1ZCJ9.gsehy9Q8trkM71y3tU0RWg";


    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-71.5956);
    const [lat, setLat] = useState(-33.0247);
    const [zoom, setZoom] = useState(12);






        const geojson ={
          "features": [
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 21,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.3843173312498,
                  -34.86979775597513
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 22,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.35261083086942,
                  -34.841103889181156
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 23,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.31529331580113,
                  -34.81302200056086
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 0,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.29413065303086,
                  -34.77561903216672
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 1,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.2670096198308,
                  -34.74294994973805
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 2,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.25406553445104,
                  -34.71257577277744
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 3,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.23682134812506,
                  -34.68321453622605
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 4,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.22923206624179,
                  -34.64970611888679
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 5,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.20934695912344,
                  -34.614143585919
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 6,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.20894435490956,
                  -34.574002659768546
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 7,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.20119472357592,
                  -34.53507653418164
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 8,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.19698546865646,
                  -34.47978991664437
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 9,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.20568722134294,
                  -34.423211283274426
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 10,
                "Name": "COP_deterministic_1",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "1",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.20337391205561,
                  -34.36495712235382
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 21,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.3843173312498,
                  -34.86529074019152
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 22,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.34686823147284,
                  -34.84167173347989
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 23,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.31208254219565,
                  -34.81229745256073
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 0,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.28814901124318,
                  -34.776496208219214
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 1,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.26908050223663,
                  -34.74047426811292
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 2,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.25735413891367,
                  -34.710053572854534
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 3,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.25034780395875,
                  -34.677299965471946
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 4,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.23241256772285,
                  -34.64674671527677
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 5,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.2205695294531,
                  -34.60972757014419
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 6,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.21166174758099,
                  -34.5710365108096
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 7,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.20574456130603,
                  -34.53195213740391
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 8,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.21756757447088,
                  -34.47760996553615
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 9,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.23088593276975,
                  -34.421476631768144
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 10,
                "Name": "COP_deterministic_2",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "2",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.24022132583738,
                  -34.36302743127635
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 21,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.37958158942489,
                  -34.867544156281625
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 22,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.3396106474915,
                  -34.84713382050493
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 23,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.30240006037305,
                  -34.81816545232725
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 0,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.270077018649,
                  -34.78686193035189
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 1,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.24308198192396,
                  -34.75348933999198
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 2,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.22744567492153,
                  -34.72462830891528
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 3,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.21160613665688,
                  -34.69379001194472
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 4,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.19837422712614,
                  -34.661930314619624
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 5,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.1835237022274,
                  -34.62452166043288
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 6,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.1791053045297,
                  -34.58487068050928
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 7,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.18045155242706,
                  -34.54394882815386
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 8,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.18427937738622,
                  -34.489978361836926
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 9,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.18265697712998,
                  -34.43278834575465
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 10,
                "Name": "COP_deterministic_3",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "3",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.17363633888148,
                  -34.37356952768671
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 21,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.37958133100562,
                  -34.87205117038332
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 22,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.34006374761985,
                  -34.85104745922265
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 23,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.31505543415712,
                  -34.814418420044284
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 0,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.29446160409306,
                  -34.77683162286207
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 1,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.26831248127088,
                  -34.74360150819987
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 2,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.24944904836289,
                  -34.71558361471771
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 3,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.23233031911515,
                  -34.685155388323295
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 4,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.21589194956564,
                  -34.65396136167338
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 5,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.20580216884038,
                  -34.61682447715686
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 6,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.20515513316354,
                  -34.57691622860711
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 7,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.19736522461785,
                  -34.536989834876316
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 8,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.18665285642227,
                  -34.48244422206218
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 9,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.1843761104103,
                  -34.42575461789877
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 10,
                "Name": "COP_deterministic_4",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "4",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.18934623369222,
                  -34.36666641387836
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 21,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.3843173312498,
                  -34.874304768411605
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 22,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.355458614371,
                  -34.84314839049835
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 23,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.3305294245379,
                  -34.806574869183706
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Fri",
                "Hour": 0,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.30030583914636,
                  -34.77355821408738
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 1,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.27481198927721,
                  -34.74035058852866
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 2,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.24969989019858,
                  -34.71540913515562
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 3,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.2342791756745,
                  -34.68464328322038
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 4,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.22353766262347,
                  -34.65196860038222
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 5,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.20460703633677,
                  -34.61625471677052
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 6,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.18878898410017,
                  -34.57869946819737
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 7,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.18562446750417,
                  -34.53790712511251
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 8,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.1880558099581,
                  -34.483419394582675
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 9,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.1776568812712,
                  -34.42662939190322
                ],
                "type": "Point"
              }
            },
            {
              "type": "Feature",
              "properties": {
                "Day": "Sat",
                "Hour": 10,
                "Name": "COP_deterministic_5",
                "Origin": "COP",
                "Method": "deterministic",
                "PartNumber": "5",
                "TimeType": ""
              },
              "geometry": {
                "coordinates": [
                  -73.19447299133024,
                  -34.368975185299455
                ],
                "type": "Point"
              }
            }
          ],
          "type": "FeatureCollection"
        }

          const prueba2 ={
            "type": "FeatureCollection",
           "features": [
             {
               "type": "Feature",
               "properties": {
                 "Day": "Sat",
                 "Hour": 13,
                 "Name": "COPd_direct_1",
                 "Origin": "COP",
                 "Method": "direct",
                 "PartNumber": "1",
                 "TimeType": "diario"
               },
               "geometry": {
                 "coordinates": [
                   -72.8333,
                   -32.16670000000001
               ],"type": "Point"
               }
             },
             {
               "type": "Feature",
               "properties": {
                 "Day": "Sat",
                 "Hour": 14,
                 "Name": "COPd_direct_1",
                 "Origin": "COP",
                 "Method": "direct",
                 "PartNumber": "1",
                 "TimeType": "diario"
               },
               "geometry": {
                 
                 "coordinates": [
                   -72.83297443912731,
                   -32.1610116551082
                 ],
                 "type": "Point"
               }
             },
             {
               "type": "Feature",
               "properties": {
                 "Day": "Sat",
                 "Hour": 15,
                 "Name": "COPd_direct_1",
                 "Origin": "COP",
                 "Method": "direct",
                 "PartNumber": "1",
                 "TimeType": "diario"
               },
               "geometry": {
                 "coordinates": [
                   -72.8323641434347,
                   -32.15538060902724
                 ],
                 "type": "Point"
               }
             },
             {
               "type": "Feature",
               "properties": {
                 "Day": "Sat",
                 "Hour": 16,
                 "Name": "COPd_direct_1",
                 "Origin": "COP",
                 "Method": "direct",
                 "PartNumber": "1",
                 "TimeType": "diario"
               },
               "geometry": {
                 "coordinates": [
                   -72.83227719179703,
                   -32.14980079689145
                 ],
                 "type": "Point"
               }
             },
             {
               "type": "Feature",
               "properties": {
                 "Day": "Sat",
                 "Hour": 17,
                 "Name": "COPd_direct_1",
                 "Origin": "COP",
                 "Method": "direct",
                 "PartNumber": "1",
                 "TimeType": "diario"
               },
               "geometry": {
                 "coordinates": [
                   -72.83121744840405,
                   -32.144191099008616
                 ],
                 "type": "Point"
               }
             },
             {
               "type": "Feature",
               "properties": {
                 "Day": "Sat",
                 "Hour": 18,
                 "Name": "COPd_direct_1",
                 "Origin": "COP",
                 "Method": "direct",
                 "PartNumber": "1",
                 "TimeType": "diario"
               },
               "geometry": {
                 "coordinates": [
                   -72.83154130928975,
                   -32.13862616399703
                 ],
                 "type": "Point"
               }
             },
             {
               "type": "Feature",
               "properties": {
                 "Day": "Sat",
                 "Hour": 19,
                 "Name": "COPd_direct_1",
                 "Origin": "COP",
                 "Method": "direct",
                 "PartNumber": "1",
                 "TimeType": "diario"
               },
               "geometry": {
                 "coordinates": [
                   -72.83095245345095,
                   -32.133087232250766
                 ],
                 "type": "Point"
               }
             },
             {
               "type": "Feature",
               "properties": {
                 "Day": "Sat",
                 "Hour": 20,
                 "Name": "COPd_direct_1",
                 "Origin": "COP",
                 "Method": "direct",
                 "PartNumber": "1",
                 "TimeType": "diario"
               },
               "geometry": {
                 "coordinates": [
                   -72.83033905793248,
                   -32.127680854046815
                 ],
                 "type": "Point" 
               }
             },
             {
               "type": "Feature",
               "properties": {
                 "Day": "Sat",
                 "Hour": 21,
                 "Name": "COPd_direct_1",
                 "Origin": "COP",
                 "Method": "direct",
                 "PartNumber": "1",
                 "TimeType": "diario"
               },
               "geometry": {
                 "coordinates": [
                   -72.82856650662863,
                   -32.12227710904245
                 ],
                 "type": "Point"
               }
             },
             {
               "type": "Feature",
               "properties": {
                 "Day": "Sat",
                 "Hour": 22,
                 "Name": "COPd_direct_1",
                 "Origin": "COP",
                 "Method": "direct",
                 "PartNumber": "1",
                 "TimeType": "diario"
               },
               "geometry": {
                 "coordinates": [
                   -72.82831732357562,
                   -32.116756110202004
                 ],
                 "type": "Point"
               }
             },
             {
               "type": "Feature",
               "properties": {
                 "Day": "Sat",
                 "Hour": 23,
                 "Name": "COPd_direct_1",
                 "Origin": "COP",
                 "Method": "direct",
                 "PartNumber": "1",
                 "TimeType": "diario"
               },
               "geometry": {
                 "coordinates": [
                   -72.82756893644917,
                   -32.111288583106194
                 ],
                 "type": "Point"
               }
             }
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sat",
            //      "Hour": 0,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.82757906031426,
            //        -32.10577007835014
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 1,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.82589704756208,
            //        -32.10043203436341
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 2,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.8236412042805,
            //        -32.09521563703279
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 3,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.82381042879365,
            //        -32.089725538289116
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 4,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.82423123993148,
            //        -32.08422640920805
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 5,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.82409440828633,
            //        -32.07876664230821
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 6,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.82367453524819,
            //        -32.073403384993625
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 7,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.82199163352921,
            //        -32.06812577251066
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 8,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.82073611257077,
            //        -32.06280912966422
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 9,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.82068955575127,
            //        -32.05750955488203
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 10,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.81926832344008,
            //        -32.05242141163467
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 11,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.82023056643133,
            //        -32.04719661664507
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 12,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.81852842496339,
            //        -32.042139903072965
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 13,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.81730297787456,
            //        -32.037158258512605
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 14,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.81581916328982,
            //        -32.03216115868677
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 15,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.81423237437104,
            //        -32.02735080252056
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 16,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.81354286166095,
            //        -32.022437707982824
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 17,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.8121567826874,
            //        -32.017680653481385
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 18,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.81081479780424,
            //        -32.01297222561351
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 19,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.81032235355411,
            //        -32.00825999037345
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 20,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.80880448348844,
            //        -32.003824878008906
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 21,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.80657774871077,
            //        -31.999554497065283
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 22,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.80476979915372,
            //        -31.995195015995787
            //      ],
            //      "type": "Point"
            //    }
            //  },
            //  {
            //    "type": "Feature",
            //    "properties": {
            //      "Day": "Sun",
            //      "Hour": 23,
            //      "Name": "COPd_direct_1",
            //      "Origin": "COP",
            //      "Method": "direct",
            //      "PartNumber": "1",
            //      "TimeType": "diario"
            //    },
            //    "geometry": {
            //      "coordinates": [
            //        -72.80340247261769,
            //        -31.990909130092675
            //      ],
            //      "type": "Point"
            //    }
            //  }]}
              ]}


          const data = {
            file: "COPd_direct_64f1e04b71c59b7621bc28c4",
            GeoJSON: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8333, -32.16670000000001],
                      [-72.83297443912731, -32.1610116551082],
                      [-72.8323641434347, -32.15538060902724],
                      [-72.83227719179703, -32.14980079689145],
                      [-72.83121744840405, -32.144191099008616],
                      [-72.83154130928975, -32.13862616399703],
                      [-72.83095245345095, -32.133087232250766],
                      [-72.83033905793248, -32.127680854046815],
                      [-72.82856650662863, -32.12227710904245],
                      [-72.82831732357562, -32.116756110202004],
                      [-72.82756893644917, -32.111288583106194],
                      [-72.82757906031426, -32.10577007835014],
                      [-72.82589704756208, -32.10043203436341],
                      [-72.8236412042805, -32.09521563703279],
                      [-72.82381042879365, -32.089725538289116],
                      [-72.82423123993148, -32.08422640920805],
                      [-72.82409440828633, -32.07876664230821],
                      [-72.82367453524819, -32.073403384993625],
                      [-72.82199163352921, -32.06812577251066],
                      [-72.82073611257077, -32.06280912966422],
                      [-72.82068955575127, -32.05750955488203],
                      [-72.81926832344008, -32.05242141163467],
                      [-72.82023056643133, -32.04719661664507],
                      [-72.81852842496339, -32.042139903072965],
                      [-72.81730297787456, -32.037158258512605],
                      [-72.81581916328982, -32.03216115868677],
                      [-72.81423237437104, -32.02735080252056],
                      [-72.81354286166095, -32.022437707982824],
                      [-72.8121567826874, -32.017680653481385],
                      [-72.81081479780424, -32.01297222561351],
                      [-72.81032235355411, -32.00825999037345],
                      [-72.80880448348844, -32.003824878008906],
                      [-72.80657774871077, -31.999554497065283],
                      [-72.80476979915372, -31.995195015995787],
                      [-72.80340247261769, -31.990909130092675],
                      [-72.80220707042189, -31.986625104066935],
                      [-72.80130003949903, -31.98238825956411],
                      [-72.79860180654055, -31.97879635904328],
                      [-72.7974943996612, -31.9747156507755],
                      [-72.79508573294974, -31.97117456656865],
                      [-72.79285422776157, -31.967574658093106],
                      [-72.79091850504518, -31.963959487439134],
                      [-72.78931685273068, -31.960265788707577],
                      [-72.78630036676053, -31.95737036131144],
                      [-72.78376556769335, -31.9542957191419],
                      [-72.78165489303774, -31.951000525750786],
                      [-72.77918947134245, -31.94795930426385],
                      [-72.77658501445698, -31.945044613350166],
                      [-72.77406462354686, -31.942186708733804],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_1",
                    partNumb: 1,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -32.162191014604666],
                      [-72.83245007680608, -32.15668377098554],
                      [-72.83135271998555, -32.15106952075752],
                      [-72.83151639147235, -32.14537753926002],
                      [-72.83084799492946, -32.139797595337306],
                      [-72.83145962593201, -32.13416215254749],
                      [-72.83114675991106, -32.12867292795913],
                      [-72.82938608881717, -32.12323693553782],
                      [-72.82905656011374, -32.11771593059509],
                      [-72.8287811207324, -32.112164799255666],
                      [-72.82715706837351, -32.10677695474952],
                      [-72.82670665711424, -32.10121482201062],
                      [-72.82584004335683, -32.09567545693664],
                      [-72.8244752478759, -32.09028878909273],
                      [-72.82450785396401, -32.08490223603338],
                      [-72.82381553958423, -32.07943148427982],
                      [-72.82355937835538, -32.073943467673516],
                      [-72.82097738905667, -32.06888248215285],
                      [-72.8208169425977, -32.06350537646358],
                      [-72.82179495212263, -32.05816082153676],
                      [-72.8210414159165, -32.052865440277],
                      [-72.82034868980318, -32.04762203992505],
                      [-72.81888008480144, -32.042526409052996],
                      [-72.8179512944574, -32.03736585755714],
                      [-72.81715300551723, -32.03227615587553],
                      [-72.81502241881043, -32.0275038156108],
                      [-72.81386620071305, -32.022597753942975],
                      [-72.81279299893191, -32.01770665672478],
                      [-72.81161226763273, -32.012846801561494],
                      [-72.81038619815658, -32.008091337807706],
                      [-72.8094229096217, -32.003348339681025],
                      [-72.80770703914189, -31.998913191586627],
                      [-72.80552047380348, -31.99469960745593],
                      [-72.80404514261178, -31.99043174050658],
                      [-72.8019844356731, -31.98631293318801],
                      [-72.80035897300498, -31.982238742412797],
                      [-72.7984096680751, -31.97826364516251],
                      [-72.79661880560393, -31.974255096521834],
                      [-72.79499148060631, -31.970328516103194],
                      [-72.79358561325184, -31.966344361625413],
                      [-72.79240964497853, -31.962386645531094],
                      [-72.78995274230044, -31.958904720996692],
                      [-72.78747070859198, -31.955624537970348],
                      [-72.78534228874564, -31.952176004708488],
                      [-72.78283321150066, -31.94905195223007],
                      [-72.78095242805325, -31.945587684029253],
                      [-72.77769923296485, -31.943076362076493],
                      [-72.77515990244663, -31.940083501643286],
                      [-72.77231452512561, -31.937334728115683],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_2",
                    partNumb: 2,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8287093100998, -32.164445424422524],
                      [-72.82900920368769, -32.15888250759503],
                      [-72.8297071874475, -32.153280055601186],
                      [-72.82942223041252, -32.14768327169177],
                      [-72.82791006162546, -32.1421995923945],
                      [-72.8274056278845, -32.13667741263082],
                      [-72.82767400336368, -32.13116216983429],
                      [-72.82737001891559, -32.1256679079813],
                      [-72.82711960508169, -32.12020660058146],
                      [-72.82584752360012, -32.11474540679799],
                      [-72.82476724969213, -32.109296873991354],
                      [-72.82392968645637, -32.103863953964506],
                      [-72.82476171969903, -32.09839437625692],
                      [-72.82479635389008, -32.092947923771085],
                      [-72.82308126784446, -32.08762907447136],
                      [-72.82222296798788, -32.08222050709838],
                      [-72.82067676796511, -32.07687207571438],
                      [-72.81974852449791, -32.07164623624801],
                      [-72.81971167479539, -32.06626522757463],
                      [-72.8196126449419, -32.06096951894936],
                      [-72.81842140372375, -32.05581749996752],
                      [-72.81806899505015, -32.05057750240722],
                      [-72.81668875774004, -32.04557752340006],
                      [-72.81592557295329, -32.040525135033604],
                      [-72.81518085562865, -32.03548995524023],
                      [-72.81431924782262, -32.03045297316695],
                      [-72.81415460406241, -32.02540357142125],
                      [-72.81283147818402, -32.020672781168855],
                      [-72.81085678692497, -32.01609776046371],
                      [-72.8111687828284, -32.01121914816945],
                      [-72.8085849425951, -32.00696287148223],
                      [-72.80658112549607, -32.002591414603884],
                      [-72.80513474957033, -31.998154435186635],
                      [-72.80410920339862, -31.99367631739796],
                      [-72.80197086937763, -31.98963408179333],
                      [-72.80069627315471, -31.985440395059232],
                      [-72.8000782964149, -31.981090973782862],
                      [-72.79818607750364, -31.97711559360427],
                      [-72.79640897417337, -31.97318460354453],
                      [-72.79461052133101, -31.969438561978883],
                      [-72.79337761932149, -31.965484627912517],
                      [-72.79127601854812, -31.961861014763603],
                      [-72.78890046735957, -31.958414682111723],
                      [-72.78610773229279, -31.955313596512006],
                      [-72.78322713119339, -31.952331688552807],
                      [-72.78132498123404, -31.948910708181725],
                      [-72.77890469398318, -31.945821159907887],
                      [-72.77641337588993, -31.942781003368513],
                      [-72.77415354710928, -31.939650989745743],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_3",
                    partNumb: 3,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.82870908397439, -32.16895440820159],
                      [-72.82673746024119, -32.163554500974406],
                      [-72.82643290926495, -32.15805993677549],
                      [-72.82756790224025, -32.152547687376064],
                      [-72.8270142239808, -32.14724128800772],
                      [-72.8278494914398, -32.14175119316632],
                      [-72.8272701011068, -32.13624065919524],
                      [-72.82693778142708, -32.130725715547655],
                      [-72.82658891198425, -32.1251991850838],
                      [-72.82600215767528, -32.119762171008055],
                      [-72.82570654937328, -32.11429937595015],
                      [-72.82437150760843, -32.10897988967571],
                      [-72.82393837888105, -32.10351653126195],
                      [-72.82224775122056, -32.09821509402711],
                      [-72.82156885956036, -32.092851266304876],
                      [-72.82182805797375, -32.08746393418517],
                      [-72.82179438025443, -32.08210263483133],
                      [-72.82198988253292, -32.07667685445241],
                      [-72.82218164838324, -32.071379687907225],
                      [-72.82175969386796, -32.06616565950821],
                      [-72.82101096895171, -32.060911870640986],
                      [-72.82071523710987, -32.055598130101004],
                      [-72.82026088172545, -32.05036399982628],
                      [-72.8201062583291, -32.0451532714432],
                      [-72.82054229428708, -32.03995249096978],
                      [-72.81983880206774, -32.03497325063242],
                      [-72.81782208087078, -32.03026656335796],
                      [-72.81621913439182, -32.025410625319644],
                      [-72.81519080510388, -32.020673971541896],
                      [-72.8138739038868, -32.015904256258274],
                      [-72.81172163286836, -32.01146297472199],
                      [-72.81031174736066, -32.00687304142502],
                      [-72.80862607450247, -32.00249733789419],
                      [-72.80675996896984, -31.99824366406053],
                      [-72.80581352796143, -31.99377523607238],
                      [-72.80364494979813, -31.989759382589853],
                      [-72.80269119469736, -31.985552780694142],
                      [-72.80143390954619, -31.98146154234709],
                      [-72.79962803590905, -31.977478830491386],
                      [-72.79710797027646, -31.973923096965976],
                      [-72.79476632542323, -31.970386350636034],
                      [-72.79263545538862, -31.96685031798491],
                      [-72.7904457489846, -31.963490099629848],
                      [-72.78838871680978, -31.96000181815202],
                      [-72.78559286869844, -31.957037712815758],
                      [-72.78285774436459, -31.954049280430958],
                      [-72.78055096330775, -31.95086658279421],
                      [-72.77870148512041, -31.947619478398547],
                      [-72.77612075831566, -31.944722991402873],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_4",
                    partNumb: 4,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -32.17120898217765],
                      [-72.83222645014442, -32.16555869442275],
                      [-72.8335623072097, -32.159975559315534],
                      [-72.83158832951828, -32.15456950387954],
                      [-72.83174532767671, -32.14894238624852],
                      [-72.83164780821976, -32.1434711575299],
                      [-72.83106722472593, -32.13794019046175],
                      [-72.83154997186469, -32.13240454223531],
                      [-72.83174396783141, -32.12689015154404],
                      [-72.8316850701023, -32.121299606383495],
                      [-72.83146047586246, -32.115831691207255],
                      [-72.83141992340546, -32.110371672669544],
                      [-72.83071745727146, -32.104901695019436],
                      [-72.82926542975781, -32.09951548068441],
                      [-72.82895743082256, -32.09413343783349],
                      [-72.82751356823943, -32.088819482972305],
                      [-72.8272533452158, -32.083430358204424],
                      [-72.82771076973724, -32.07796366858487],
                      [-72.82745751900846, -32.07261527459838],
                      [-72.8263743307147, -32.06733052010034],
                      [-72.82597707555645, -32.06209503611283],
                      [-72.82568207179946, -32.056806625536844],
                      [-72.82339889119838, -32.05183223080577],
                      [-72.82411310172776, -32.0465648736551],
                      [-72.82275523191997, -32.041433984432466],
                      [-72.82216355600687, -32.036272383137316],
                      [-72.82002384627702, -32.03144406952543],
                      [-72.81855325201998, -32.026598406022316],
                      [-72.81591492670455, -32.02213318196179],
                      [-72.81554466272634, -32.01730070916789],
                      [-72.8139507221988, -32.012844522143254],
                      [-72.81330154670597, -32.00812219111675],
                      [-72.81148494543898, -32.0036423083246],
                      [-72.80979098633273, -31.999230126177103],
                      [-72.80768604240954, -31.995002871101565],
                      [-72.80705921448293, -31.990515883620095],
                      [-72.8050659325338, -31.986413883548583],
                      [-72.80311472077081, -31.98242367082706],
                      [-72.80137987030561, -31.978502026094166],
                      [-72.7991299168218, -31.97476501889761],
                      [-72.79724841864744, -31.971082310111743],
                      [-72.79465479457089, -31.96770434405285],
                      [-72.7923307183636, -31.96430608396724],
                      [-72.78991780820374, -31.96093262059015],
                      [-72.78689935103435, -31.95803638634108],
                      [-72.78400554006794, -31.955193527783795],
                      [-72.78112422789513, -31.952469512149136],
                      [-72.7783971455927, -31.949671981575875],
                      [-72.77572405216934, -31.946898212505996],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_5",
                    partNumb: 5,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83789091602557, -32.168954408201586],
                      [-72.83918230897856, -32.163244253782295],
                      [-72.83927541694001, -32.15751820717599],
                      [-72.83900750479877, -32.1518786152778],
                      [-72.83942163687001, -32.14621117603853],
                      [-72.84011555028175, -32.14055602247227],
                      [-72.83983698086277, -32.13483747255601],
                      [-72.83991102916711, -32.12912857006033],
                      [-72.83851472647677, -32.1235036271493],
                      [-72.837663350114, -32.117828205214494],
                      [-72.83764401207641, -32.11219437055505],
                      [-72.8378406071626, -32.10655599037897],
                      [-72.83652681557231, -32.10093088443932],
                      [-72.83605457950402, -32.0954057786367],
                      [-72.83645979726765, -32.08979907196038],
                      [-72.83611845237154, -32.08421196519784],
                      [-72.83513253155623, -32.07865565244293],
                      [-72.8340076294172, -32.073253069566114],
                      [-72.83237359762032, -32.0678805608508],
                      [-72.83084811866199, -32.06256131061638],
                      [-72.8301392992151, -32.057212617874484],
                      [-72.82994203928357, -32.05188825215606],
                      [-72.8286669534213, -32.0466322746822],
                      [-72.82789719885709, -32.04142016302439],
                      [-72.82750182673388, -32.036204904583705],
                      [-72.82623651125034, -32.03108838913898],
                      [-72.82535277889389, -32.02597912186193],
                      [-72.82418149778738, -32.02102638352213],
                      [-72.82134672813818, -32.01654844854542],
                      [-72.82015065669297, -32.01172409029982],
                      [-72.81912270873119, -32.00686408241284],
                      [-72.81811988152577, -32.00215093724184],
                      [-72.81539536449903, -31.99805017568723],
                      [-72.81402059325532, -31.99361094724726],
                      [-72.81186423479582, -31.989326089002557],
                      [-72.81076378088319, -31.9848685361288],
                      [-72.80886542639149, -31.980752191634497],
                      [-72.80718582918219, -31.976727979855692],
                      [-72.8048142197453, -31.972971566856877],
                      [-72.80304999284077, -31.96899739812694],
                      [-72.80009819685564, -31.9656809429147],
                      [-72.79787773074507, -31.96212933055229],
                      [-72.79497179039414, -31.958945723218182],
                      [-72.79305552242333, -31.955453396228933],
                      [-72.79028069576086, -31.952360818274688],
                      [-72.7876324785445, -31.949346554207022],
                      [-72.78604882645172, -31.94579605600738],
                      [-72.78353956368437, -31.942754557676107],
                      [-72.78018974906057, -31.940392862877115],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_6",
                    partNumb: 6,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83789068990019, -32.164445424422524],
                      [-72.83675417955816, -32.15883940679512],
                      [-72.83665990943082, -32.15318440551936],
                      [-72.83637728783394, -32.14745833021135],
                      [-72.83628425215007, -32.14179015255071],
                      [-72.8350361476412, -32.136194268387506],
                      [-72.83480552259634, -32.130485855939355],
                      [-72.83486645662425, -32.12481395356349],
                      [-72.8346066948481, -32.11913585990428],
                      [-72.83354694856688, -32.113673445417696],
                      [-72.8323386601756, -32.108101371811465],
                      [-72.83219085109567, -32.10261319920043],
                      [-72.83185713419833, -32.09703900628014],
                      [-72.83159816625567, -32.09144746238224],
                      [-72.83177001191272, -32.08581701766495],
                      [-72.83053411267088, -32.08037874283051],
                      [-72.82934029021911, -32.074936423959485],
                      [-72.82900465921364, -32.06945408652203],
                      [-72.82970682601632, -32.06402100108371],
                      [-72.82820511418662, -32.05879635676706],
                      [-72.82682897357631, -32.05353340778634],
                      [-72.82619742003016, -32.048170419634594],
                      [-72.82502758486416, -32.04300447427624],
                      [-72.82354851290768, -32.03792767465877],
                      [-72.82244376121118, -32.03274675894322],
                      [-72.82199108960567, -32.027534610555236],
                      [-72.82032134713297, -32.02263952499436],
                      [-72.81918255514887, -32.01763058544605],
                      [-72.81826295070827, -32.01264946737437],
                      [-72.81720316728544, -32.00777590855725],
                      [-72.81587056847913, -32.003062985506695],
                      [-72.81498587501741, -31.998365967857385],
                      [-72.81242076364563, -31.994238314123542],
                      [-72.81047025971002, -31.989884770896385],
                      [-72.8099878934954, -31.985319053449828],
                      [-72.80855999268377, -31.981119336028954],
                      [-72.80602374287697, -31.977260317725],
                      [-72.80438978206483, -31.97313168503532],
                      [-72.80207426078105, -31.969339460976087],
                      [-72.80006015203898, -31.965454783232374],
                      [-72.79816115771547, -31.961734890726408],
                      [-72.7958993214888, -31.958166245414166],
                      [-72.7932757531141, -31.954807355368956],
                      [-72.79093881401192, -31.951526101291385],
                      [-72.78833862959955, -31.94833719022597],
                      [-72.7860372927464, -31.945102999289105],
                      [-72.78370803387406, -31.94195561554656],
                      [-72.78127741329439, -31.93882399411832],
                      [-72.77858588664432, -31.93605648311753],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_7",
                    partNumb: 7,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -32.162191014604666],
                      [-72.83289688720568, -32.15661433920956],
                      [-72.83286545873138, -32.150979650264354],
                      [-72.83245585027451, -32.14533724229233],
                      [-72.83228234851373, -32.13979351907783],
                      [-72.83230179589287, -32.13412612963163],
                      [-72.83290185496197, -32.12849242446417],
                      [-72.83233874284998, -32.12287213039715],
                      [-72.83199086147252, -32.11727368196865],
                      [-72.83250273841708, -32.111686653649144],
                      [-72.83095938206061, -32.10628655950714],
                      [-72.83035828132832, -32.1008947265766],
                      [-72.82940094549501, -32.095348665462474],
                      [-72.82997297458174, -32.08982868465095],
                      [-72.82973883619655, -32.08434530012853],
                      [-72.82795732433806, -32.078901566841076],
                      [-72.82668825156283, -32.07345252980521],
                      [-72.8258242980964, -32.068060662052105],
                      [-72.82587069551779, -32.06261956082937],
                      [-72.82536539856297, -32.057392914651274],
                      [-72.82544142980414, -32.05214829986648],
                      [-72.82454202748893, -32.04692677957449],
                      [-72.82228855531626, -32.0420211098835],
                      [-72.82133563148497, -32.03687607305175],
                      [-72.81869862471284, -32.03212191878534],
                      [-72.81813106055391, -32.026968239115135],
                      [-72.81692745352863, -32.02195756634197],
                      [-72.81523793305284, -32.01720595561046],
                      [-72.81382310928026, -32.01245820474211],
                      [-72.81166053416307, -32.00792017550822],
                      [-72.8102105127368, -32.003362792952444],
                      [-72.80811547693203, -31.998924981901485],
                      [-72.8063789871301, -31.9944897782571],
                      [-72.80488360919932, -31.990130650414216],
                      [-72.80257365088562, -31.986030298118926],
                      [-72.80072455577671, -31.981933798324032],
                      [-72.79929643411383, -31.977738969825396],
                      [-72.79719008895748, -31.973898111135885],
                      [-72.79511018677897, -31.97017084842838],
                      [-72.79312447728412, -31.96646409156249],
                      [-72.79027828344991, -31.963176676540968],
                      [-72.787847571879, -31.959799275451324],
                      [-72.78578010676907, -31.95631585014696],
                      [-72.78354720202121, -31.952983365890454],
                      [-72.78120991363848, -31.94974372455244],
                      [-72.77841540928245, -31.94680621963054],
                      [-72.77583192702323, -31.943923980810574],
                      [-72.77323201574185, -31.94101722425486],
                      [-72.77069517516065, -31.938142060547893],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_8",
                    partNumb: 8,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8333, -32.16670000000001],
                      [-72.83265369947051, -32.16116116626764],
                      [-72.83208512725538, -32.155662350303665],
                      [-72.83219934982348, -32.15005469486397],
                      [-72.83183877667462, -32.14452486943825],
                      [-72.83193699675178, -32.139077840297716],
                      [-72.83194119918905, -32.13350133158861],
                      [-72.83003066825547, -32.128141161989056],
                      [-72.82988282931692, -32.12261722475128],
                      [-72.82897268279703, -32.11714156700891],
                      [-72.82795800617055, -32.11183416760973],
                      [-72.8270353359356, -32.106446401036216],
                      [-72.82537959195577, -32.101130506820674],
                      [-72.82525166822936, -32.0956298150817],
                      [-72.82460946711933, -32.09024434342049],
                      [-72.82448119394309, -32.08480670480698],
                      [-72.82291186855683, -32.07952416170785],
                      [-72.82289581088735, -32.074094856124724],
                      [-72.82081063729419, -32.06906827116245],
                      [-72.82103216745931, -32.06371026978252],
                      [-72.8216775348249, -32.05841938010743],
                      [-72.8210778603624, -32.05326533424161],
                      [-72.82030008021628, -32.04809338298102],
                      [-72.81950967620676, -32.0429024667787],
                      [-72.81845973182574, -32.03786164261415],
                      [-72.81753130670764, -32.03292157491348],
                      [-72.81611455160636, -32.028112178390614],
                      [-72.8147543312133, -32.02334520427239],
                      [-72.81331135438843, -32.018632312479575],
                      [-72.81219703003632, -32.013951740937344],
                      [-72.81096323164411, -32.00941759454156],
                      [-72.8087301818462, -32.00515428689977],
                      [-72.80797453636374, -32.00058324678917],
                      [-72.80777967693632, -31.99606286926242],
                      [-72.80593114512803, -31.991877866683783],
                      [-72.80395355779783, -31.9878373029806],
                      [-72.80224550544621, -31.983826884232798],
                      [-72.80087943834086, -31.97975333327066],
                      [-72.79978986378956, -31.97569916954775],
                      [-72.79769741859683, -31.972100992284783],
                      [-72.79582521277193, -31.96836212586475],
                      [-72.79372166094261, -31.96476692256738],
                      [-72.79199246038021, -31.961086433938778],
                      [-72.78986083971985, -31.957739921341393],
                      [-72.78809367242746, -31.954250489171052],
                      [-72.78511492288436, -31.951474271775616],
                      [-72.78265362486778, -31.94848718307447],
                      [-72.78053173671633, -31.945263402687463],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_9",
                    partNumb: 9,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -32.162191014604666],
                      [-72.83323841201229, -32.156522419731836],
                      [-72.83276918743624, -32.15084846555976],
                      [-72.8323016329505, -32.14522220244036],
                      [-72.8308782097466, -32.13977582645441],
                      [-72.83057765315432, -32.13424037680215],
                      [-72.83038462488199, -32.12877367040299],
                      [-72.83031227008284, -32.123185386537436],
                      [-72.8301082430777, -32.117669092833154],
                      [-72.83047015277495, -32.112122039988414],
                      [-72.83063200220484, -32.106632751317534],
                      [-72.83055642306358, -32.10100635572447],
                      [-72.82948054956964, -32.095589484919834],
                      [-72.82899202801461, -32.090004824636765],
                      [-72.8277531128018, -32.084596834877004],
                      [-72.82572170429428, -32.07939176173509],
                      [-72.82429409795247, -32.074024054702925],
                      [-72.82252451821387, -32.068759183425364],
                      [-72.82178094855973, -32.063578879061026],
                      [-72.82020289810315, -32.05838846789038],
                      [-72.81873757595807, -32.05324889893579],
                      [-72.81737259818823, -32.04815161223175],
                      [-72.81693065881089, -32.04300635618983],
                      [-72.81507624690714, -32.0381592738158],
                      [-72.8136114565397, -32.033203028449634],
                      [-72.81191288152336, -32.028386409009244],
                      [-72.81108638604924, -32.023501826895306],
                      [-72.81023066120991, -32.01870094945342],
                      [-72.80895185008787, -32.01396776685274],
                      [-72.80768870610986, -32.00937299742947],
                      [-72.80510436622315, -32.00520058887021],
                      [-72.80308586225536, -32.00088797444527],
                      [-72.80109812796364, -31.996782435218314],
                      [-72.79954508375702, -31.99252330492739],
                      [-72.79807965151635, -31.988335073653523],
                      [-72.79699543333979, -31.984111623889493],
                      [-72.79467822322087, -31.9803516794587],
                      [-72.79315943743741, -31.97646399794933],
                      [-72.79126789606418, -31.972712090332205],
                      [-72.78894064893211, -31.969222060870326],
                      [-72.7867680352882, -31.965771018798893],
                      [-72.7847575910238, -31.96235125666043],
                      [-72.78237641332645, -31.95912564814876],
                      [-72.78013978100768, -31.955957124705385],
                      [-72.77851817627412, -31.952571747775163],
                      [-72.77587702541432, -31.949640794259295],
                      [-72.77333889526986, -31.946779546079416],
                      [-72.77026809865508, -31.944405342716692],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_10",
                    partNumb: 10,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8287093100998, -32.164445424422524],
                      [-72.82859335938637, -32.158876849035245],
                      [-72.82729698742642, -32.153403915036975],
                      [-72.82700641752314, -32.147829279045254],
                      [-72.8270364903182, -32.142335361745836],
                      [-72.82733098397887, -32.13689015318612],
                      [-72.8267864509568, -32.13140248386927],
                      [-72.82681126693224, -32.12591444394126],
                      [-72.8273898922137, -32.1203988968095],
                      [-72.8266548846678, -32.11494970781968],
                      [-72.82707836914207, -32.10946010922622],
                      [-72.82711797870049, -32.103978047770326],
                      [-72.82653304551978, -32.09862420503695],
                      [-72.82623385224815, -32.0931117049946],
                      [-72.82470602060094, -32.08773440137364],
                      [-72.82485555883731, -32.082259679555115],
                      [-72.82482932840398, -32.076956265988066],
                      [-72.82418026815861, -32.07168313875971],
                      [-72.82406731043132, -32.06626127192799],
                      [-72.82348408762286, -32.06096982484875],
                      [-72.82323349566816, -32.05572796271927],
                      [-72.8220576078686, -32.05057858906766],
                      [-72.81996220316012, -32.04560614679808],
                      [-72.82049276579025, -32.04039855485785],
                      [-72.81858493270661, -32.03558928679542],
                      [-72.81710288901627, -32.030712471942444],
                      [-72.81600649174821, -32.02581112814647],
                      [-72.81409607954009, -32.02113888908488],
                      [-72.81315627770144, -32.016406438972666],
                      [-72.81176204374925, -32.011824281697294],
                      [-72.81073788126056, -32.00717253625512],
                      [-72.80819948463781, -32.00300929642902],
                      [-72.80668673447695, -31.998645395148706],
                      [-72.80510043295897, -31.99441196543993],
                      [-72.80344451251173, -31.990183776119174],
                      [-72.80192266267495, -31.985988600602543],
                      [-72.79981647270829, -31.982105552260286],
                      [-72.79694682026845, -31.978639246900016],
                      [-72.7959454062933, -31.97456527947629],
                      [-72.7934223986586, -31.971123770899492],
                      [-72.79094214239448, -31.967765485245696],
                      [-72.7889667946547, -31.964197946008472],
                      [-72.78689291504814, -31.96072371331844],
                      [-72.78369619060591, -31.95803793767456],
                      [-72.78154088869385, -31.954813485962124],
                      [-72.77874370025172, -31.952146922685774],
                      [-72.7763483668398, -31.949255159187974],
                      [-72.77310045442553, -31.94694843223186],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_11",
                    partNumb: 11,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.82870908397439, -32.16895440820159],
                      [-72.82904673898608, -32.16340695069604],
                      [-72.82839982260532, -32.15785619413731],
                      [-72.82857976514924, -32.15247489104857],
                      [-72.8289925002905, -32.14693075672092],
                      [-72.82706502401854, -32.141610250951764],
                      [-72.82660817159872, -32.1362668253691],
                      [-72.82492076700389, -32.13094343421486],
                      [-72.824256498064, -32.12561859160491],
                      [-72.82447143632581, -32.120260230164384],
                      [-72.82369142932897, -32.11482766102797],
                      [-72.82278679436254, -32.10948506427628],
                      [-72.82220132827321, -32.10422473723734],
                      [-72.82287779748414, -32.098911812159265],
                      [-72.82163538955425, -32.09360696234337],
                      [-72.81979136537484, -32.08842876899108],
                      [-72.81897957916047, -32.08324079204687],
                      [-72.81868736301794, -32.07791644923077],
                      [-72.81703539074545, -32.072786348745005],
                      [-72.81543493848466, -32.06764221118002],
                      [-72.81474373149071, -32.06246922447717],
                      [-72.81403063327089, -32.05728479767018],
                      [-72.81277844453805, -32.052289638051754],
                      [-72.81118927804941, -32.04737781010597],
                      [-72.81026502624945, -32.04242352063966],
                      [-72.80942159429947, -32.03746946738934],
                      [-72.80867956256496, -32.0325849788279],
                      [-72.80797241737964, -32.02784014845227],
                      [-72.80784508514422, -32.02302711039965],
                      [-72.80671085265081, -32.01838556915583],
                      [-72.80602622758448, -32.01380095762145],
                      [-72.80574302678558, -32.00927165924026],
                      [-72.80331492094447, -32.00520454095748],
                      [-72.80206719951008, -32.00097205165455],
                      [-72.79920240855546, -31.997257872977865],
                      [-72.79704614144335, -31.993404287687817],
                      [-72.79538746127382, -31.989415228346093],
                      [-72.79428493771064, -31.985340400256288],
                      [-72.79289433705567, -31.981444629605466],
                      [-72.79110728024044, -31.977804917500677],
                      [-72.78911009143275, -31.97433007158857],
                      [-72.7877983871697, -31.97060007340478],
                      [-72.78562561806832, -31.96734021747386],
                      [-72.78411764495112, -31.963808654506916],
                      [-72.78209971161189, -31.960526836683155],
                      [-72.77946822420867, -31.957676356083617],
                      [-72.77653294935874, -31.95511758665987],
                      [-72.7737540234642, -31.952548058064068],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_12",
                    partNumb: 12,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -32.17120898217765],
                      [-72.8321875430954, -32.16569140976292],
                      [-72.83276526268499, -32.16012125897807],
                      [-72.8326489603295, -32.15456371980009],
                      [-72.83212867743659, -32.1490805025187],
                      [-72.8316812168802, -32.14352907207623],
                      [-72.83092802495014, -32.13804086616539],
                      [-72.82989664882483, -32.13260504058506],
                      [-72.8293032878751, -32.127108199785795],
                      [-72.82859741492832, -32.121699271593286],
                      [-72.8291374341116, -32.11626061567789],
                      [-72.82906432627992, -32.11091423704141],
                      [-72.82920620651869, -32.10547508151762],
                      [-72.82819563230518, -32.100122338387784],
                      [-72.82726956238126, -32.09469480152809],
                      [-72.82632760002583, -32.08943507870255],
                      [-72.82503849479306, -32.08408845209083],
                      [-72.82329303625791, -32.07888385456342],
                      [-72.82278711231807, -32.07349309373429],
                      [-72.82243793109777, -32.068175935356074],
                      [-72.82093042974715, -32.06308028644887],
                      [-72.81942968941911, -32.05804863729901],
                      [-72.81904880533794, -32.052817164269506],
                      [-72.81850928280893, -32.047713375055075],
                      [-72.81865551314509, -32.04253441971575],
                      [-72.81778403001395, -32.037540922284045],
                      [-72.81754184988056, -32.03270585108014],
                      [-72.81625841643414, -32.02797725206988],
                      [-72.81604961095212, -32.023142745179626],
                      [-72.81542852020401, -32.018380289723424],
                      [-72.81389332424123, -32.0138248268838],
                      [-72.81302398478822, -32.00925175043793],
                      [-72.81118639538113, -32.00491332183505],
                      [-72.80927149318386, -32.000683954866275],
                      [-72.80741220855, -31.996451682154657],
                      [-72.80603561443473, -31.992224783819548],
                      [-72.8049866501755, -31.98800713874802],
                      [-72.80387121279009, -31.98392427121732],
                      [-72.80130663758317, -31.980306792030035],
                      [-72.79990593729731, -31.97644525895619],
                      [-72.797817401832, -31.97277299873267],
                      [-72.79604040976986, -31.969091841096624],
                      [-72.79376980073293, -31.965675176151297],
                      [-72.79168608292487, -31.962283722836375],
                      [-72.7895547988301, -31.95888168607681],
                      [-72.78709333454084, -31.955774860069493],
                      [-72.78418475667793, -31.952981885020854],
                      [-72.78165638665938, -31.950027852345997],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_13",
                    partNumb: 13,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83789091602557, -32.168954408201586],
                      [-72.83760274043314, -32.163278737951345],
                      [-72.83675940103055, -32.15770746379273],
                      [-72.83600356629758, -32.15208061637556],
                      [-72.83516197152115, -32.14644901624516],
                      [-72.83374009301207, -32.14093806415973],
                      [-72.83399512416575, -32.13538489373933],
                      [-72.83341871808793, -32.12983168530636],
                      [-72.83306132829031, -32.12440745769665],
                      [-72.83201527142911, -32.118907965433216],
                      [-72.83131139368413, -32.113482391731296],
                      [-72.83012563203917, -32.1080761408108],
                      [-72.82997814613358, -32.10253195979791],
                      [-72.82881951901108, -32.09716545832762],
                      [-72.82742301584057, -32.09176174360371],
                      [-72.828163510386, -32.08626779064408],
                      [-72.82733651126058, -32.08092392086072],
                      [-72.82798009630122, -32.07545862637359],
                      [-72.8278330378354, -32.07010930618557],
                      [-72.82684168808446, -32.0647625364283],
                      [-72.82482000620585, -32.059684269668075],
                      [-72.82315225634126, -32.05458329114833],
                      [-72.82380992404774, -32.04932601320658],
                      [-72.82309552487146, -32.044133831838224],
                      [-72.82254972877148, -32.039001730032325],
                      [-72.82104396813398, -32.034097983332735],
                      [-72.82055036642933, -32.029142831716996],
                      [-72.81968653973924, -32.02427472366983],
                      [-72.81849880626804, -32.01952163957801],
                      [-72.81751911808179, -32.01474236167172],
                      [-72.81557537403376, -32.01023201140727],
                      [-72.81405225883229, -32.0057036296415],
                      [-72.81334477676933, -32.001076716737785],
                      [-72.81139898130463, -31.996806923727277],
                      [-72.8100127725974, -31.992467918795644],
                      [-72.80844467936184, -31.98831220763174],
                      [-72.80651385210228, -31.984306353103765],
                      [-72.80428213016125, -31.980476140030756],
                      [-72.80175385129259, -31.976839318950052],
                      [-72.80025932553852, -31.972879345087865],
                      [-72.79779398983322, -31.9694628423893],
                      [-72.79573678245566, -31.965838762989772],
                      [-72.79272067841528, -31.962804373677965],
                      [-72.79013882157847, -31.959636432649898],
                      [-72.787719098039, -31.95642595063737],
                      [-72.78562846235502, -31.95316335324593],
                      [-72.78268689579737, -31.950422099720566],
                      [-72.78001661364058, -31.947562040722467],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_14",
                    partNumb: 14,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83789068990019, -32.164445424422524],
                      [-72.83816218787312, -32.15869095665542],
                      [-72.83845554992571, -32.153025757272665],
                      [-72.8377299359022, -32.147392273957],
                      [-72.83706680503178, -32.1417303410709],
                      [-72.83780446765839, -32.13609717576827],
                      [-72.83615043579539, -32.13058314964407],
                      [-72.83620542469428, -32.12493727449715],
                      [-72.8365210453518, -32.11931644487738],
                      [-72.83624783200125, -32.11370622311665],
                      [-72.83498622822819, -32.10811887657017],
                      [-72.83275246733261, -32.102784525806854],
                      [-72.83237251820515, -32.09740661007625],
                      [-72.83146700258665, -32.091912065745404],
                      [-72.83079462219368, -32.08634901225384],
                      [-72.83013192468465, -32.08080563501022],
                      [-72.8286592833141, -32.07537194893909],
                      [-72.82774436813034, -32.07000854151754],
                      [-72.82731626634721, -32.064607830784574],
                      [-72.8272789573251, -32.05922409672736],
                      [-72.82630262172151, -32.053962309687705],
                      [-72.82586708724507, -32.04874294008398],
                      [-72.82498947423525, -32.043586286258744],
                      [-72.8232626702315, -32.038599702588144],
                      [-72.82187172181332, -32.033578744813866],
                      [-72.82090268513646, -32.02851441988619],
                      [-72.8203036538325, -32.023459410213206],
                      [-72.81954176074724, -32.018551627360914],
                      [-72.81813962530646, -32.01381719543114],
                      [-72.8163604533892, -32.00927358498948],
                      [-72.8150084840124, -32.00458934379538],
                      [-72.81368794164659, -31.999950358526462],
                      [-72.8133262095929, -31.995250071588647],
                      [-72.81146498472195, -31.99093656972737],
                      [-72.80986391261547, -31.98660806559311],
                      [-72.80766841160268, -31.982558750239946],
                      [-72.80664311339214, -31.978229284894525],
                      [-72.80551597694362, -31.97404414840823],
                      [-72.80428968730358, -31.969898170542358],
                      [-72.80164789221426, -31.9663353567195],
                      [-72.79952555799649, -31.962644036038693],
                      [-72.79708329853891, -31.959240208179242],
                      [-72.79536684961582, -31.95568893346941],
                      [-72.79293633060908, -31.95236131982518],
                      [-72.79004972254883, -31.94942816432246],
                      [-72.78800822423207, -31.94602944691079],
                      [-72.78535718649685, -31.943046028835372],
                      [-72.78246920752873, -31.940332714160334],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_15",
                    partNumb: 15,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -32.162191014604666],
                      [-72.83386065339442, -32.156536488918206],
                      [-72.83381414748104, -32.15091418935308],
                      [-72.83385835779939, -32.14541907511173],
                      [-72.83455205147386, -32.139864173289304],
                      [-72.83331363343895, -32.13432795758529],
                      [-72.83258365531006, -32.12878692065958],
                      [-72.83203614996656, -32.12317499299255],
                      [-72.83029503925493, -32.11776223011331],
                      [-72.83006781014251, -32.11216566690136],
                      [-72.82935795227627, -32.10672214361585],
                      [-72.82912900104543, -32.10124783807973],
                      [-72.82930610027495, -32.09570697531564],
                      [-72.82866796061316, -32.09021789753261],
                      [-72.82840717410718, -32.084667074655684],
                      [-72.82828165079206, -32.079128606368776],
                      [-72.82684516828344, -32.073753896452295],
                      [-72.8248462096651, -32.068556720973305],
                      [-72.82310686621538, -32.06337992835094],
                      [-72.82198371013531, -32.05818659696739],
                      [-72.82027656107499, -32.05305109989179],
                      [-72.81821276511285, -32.04818546848136],
                      [-72.81745608835952, -32.04300265209498],
                      [-72.8167779720253, -32.037854942831906],
                      [-72.81512997558075, -32.032899042670586],
                      [-72.8149326998162, -32.027841671679695],
                      [-72.81471834348477, -32.022834355465356],
                      [-72.81289281132963, -32.018153704936076],
                      [-72.81243417802814, -32.01337988835686],
                      [-72.81001176043476, -32.00903778471851],
                      [-72.80958579086415, -32.00439250975026],
                      [-72.80790044767409, -31.999958431259824],
                      [-72.8073865527899, -31.995384388003565],
                      [-72.80497339954042, -31.991318046624286],
                      [-72.8033187597828, -31.987146708297633],
                      [-72.80175821719529, -31.983013961641184],
                      [-72.80040700140266, -31.978954426844147],
                      [-72.79848604164421, -31.97515865976836],
                      [-72.79598587251026, -31.97161007271921],
                      [-72.79390788809728, -31.967932313974128],
                      [-72.79214158982538, -31.964188258362675],
                      [-72.78911903121383, -31.96113750114761],
                      [-72.78677224252452, -31.95788218248878],
                      [-72.78461538200544, -31.954538792619857],
                      [-72.78180594733591, -31.95159874139246],
                      [-72.7794870139339, -31.948468354988954],
                      [-72.77674937946358, -31.94562151220409],
                      [-72.77378674244288, -31.94313043303881],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_16",
                    partNumb: 16,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8333, -32.16670000000001],
                      [-72.83251996362237, -32.16109030711657],
                      [-72.83341566158926, -32.15552780274442],
                      [-72.83315197219719, -32.14999798729327],
                      [-72.83273333289277, -32.14453180625182],
                      [-72.83269257465203, -32.139066924256085],
                      [-72.83194847134074, -32.133635116751925],
                      [-72.83237392385828, -32.12809570481441],
                      [-72.83104261409248, -32.12270892805793],
                      [-72.83145483674821, -32.11718929293137],
                      [-72.8322159570424, -32.11182842422728],
                      [-72.8315524679267, -32.10648098628895],
                      [-72.83108615250686, -32.100955397773596],
                      [-72.83052056471813, -32.095437692101335],
                      [-72.82925681285919, -32.09003517446431],
                      [-72.82991291107231, -32.08460079615842],
                      [-72.82956920868418, -32.07929056268323],
                      [-72.82762703045178, -32.07408683646547],
                      [-72.82693912337284, -32.068710670000264],
                      [-72.8257699097832, -32.06352847344755],
                      [-72.8255576999001, -32.058188360852505],
                      [-72.82500847930321, -32.052964103730496],
                      [-72.823840265658, -32.04789055078392],
                      [-72.82370614527576, -32.04276846347766],
                      [-72.82245979849164, -32.03773905456369],
                      [-72.82259979566872, -32.032715717883484],
                      [-72.82135835913857, -32.02784297139736],
                      [-72.81888773068947, -32.02335644497312],
                      [-72.81620944908344, -32.01904794075],
                      [-72.81561649910617, -32.014450259259526],
                      [-72.81473578971932, -32.00987835036066],
                      [-72.81365239492557, -32.005361531393135],
                      [-72.81254942199917, -32.0008736394063],
                      [-72.81094777640891, -31.996562954851157],
                      [-72.80922750978986, -31.992371539705967],
                      [-72.80710914382705, -31.988341869095173],
                      [-72.8055890903234, -31.984223749077934],
                      [-72.80360047602781, -31.9803311252633],
                      [-72.80163224825806, -31.976540967050415],
                      [-72.80009407881953, -31.972645960376948],
                      [-72.79846263008125, -31.968816255350454],
                      [-72.79573944763706, -31.965589777066874],
                      [-72.7927846180553, -31.96261951618467],
                      [-72.79019592099151, -31.959439996397535],
                      [-72.78843731901947, -31.95595720488722],
                      [-72.78634423573526, -31.952756344770847],
                      [-72.78346977586996, -31.94999303793604],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_17",
                    partNumb: 17,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -32.162191014604666],
                      [-72.83370267440841, -32.15657760529554],
                      [-72.83444842405407, -32.15101047595518],
                      [-72.83453580264522, -32.145357305786185],
                      [-72.834073111608, -32.13976875007198],
                      [-72.83439786390393, -32.13415959553822],
                      [-72.83319408829462, -32.12865539576015],
                      [-72.83105680195722, -32.12334280192427],
                      [-72.83021125068778, -32.117905138567494],
                      [-72.82942408843897, -32.11242625772846],
                      [-72.82915878445615, -32.10705340329634],
                      [-72.82944297325469, -32.10165335373161],
                      [-72.82881326107236, -32.09619631537887],
                      [-72.82801956650513, -32.090817392731495],
                      [-72.82664998566807, -32.08550999617866],
                      [-72.8270256266675, -32.08000141770035],
                      [-72.82588060818824, -32.07459377350958],
                      [-72.82579985690454, -32.06922926476997],
                      [-72.82434079498479, -32.06401401902504],
                      [-72.82341117170543, -32.05875303680992],
                      [-72.82253893158557, -32.053660159706155],
                      [-72.82237246822781, -32.048375246271135],
                      [-72.82187377646778, -32.04316396027166],
                      [-72.82172852242343, -32.03797081408499],
                      [-72.82039510683525, -32.033054029245974],
                      [-72.81999512547226, -32.028122780900645],
                      [-72.81827529944853, -32.02336682781818],
                      [-72.81751643902112, -32.01850857650224],
                      [-72.81642403441232, -32.013805928110045],
                      [-72.81578326522266, -32.00902852202878],
                      [-72.81534525668513, -32.00430113874737],
                      [-72.81385800842352, -31.999790439480034],
                      [-72.81198898444026, -31.99553518720929],
                      [-72.81139040311164, -31.99109718421049],
                      [-72.80887640530624, -31.987199815746134],
                      [-72.80733922288807, -31.98301939598246],
                      [-72.80612544744906, -31.978798800048008],
                      [-72.80471820762875, -31.974718170354464],
                      [-72.80246627191022, -31.97103128558078],
                      [-72.79999415899468, -31.9675538826851],
                      [-72.79767270975248, -31.964001217888377],
                      [-72.7953779408306, -31.960592554041007],
                      [-72.79279156609472, -31.957321341285425],
                      [-72.78993271967339, -31.954322499823046],
                      [-72.78682483707053, -31.95157560304471],
                      [-72.78425709658342, -31.948630292369913],
                      [-72.7817591120908, -31.94563953484605],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_18",
                    partNumb: 18,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8287093100998, -32.164445424422524],
                      [-72.82824712099968, -32.158938686098026],
                      [-72.8279925798448, -32.153434519543175],
                      [-72.82856564427998, -32.147975573979686],
                      [-72.82854981125068, -32.14248772106412],
                      [-72.82735059643149, -32.1370579043477],
                      [-72.82605461425081, -32.13165811735603],
                      [-72.82449735700973, -32.12634277862483],
                      [-72.82406064186381, -32.12103714410959],
                      [-72.82189842551476, -32.115894382152284],
                      [-72.82258681922906, -32.11060236102696],
                      [-72.82184329340998, -32.1053972003192],
                      [-72.82120410052303, -32.10005253389148],
                      [-72.8205632753566, -32.09474538725679],
                      [-72.81948837223746, -32.08945167963189],
                      [-72.82001500834396, -32.08412169749485],
                      [-72.81979025508481, -32.07887955033521],
                      [-72.81800084707983, -32.0737581264285],
                      [-72.81740472210556, -32.06850350661956],
                      [-72.81621082028309, -32.06335237146134],
                      [-72.8165082490654, -32.058135108520226],
                      [-72.81517761266382, -32.053051563957155],
                      [-72.81526988434338, -32.04793116450669],
                      [-72.81341778555209, -32.04306835302461],
                      [-72.81303773547177, -32.03809727562341],
                      [-72.81264246517762, -32.033247224375486],
                      [-72.81207329106978, -32.02839446301935],
                      [-72.81094461301483, -32.023791694630575],
                      [-72.80954029747028, -32.019258190285214],
                      [-72.80833125002937, -32.01471998368585],
                      [-72.80778617153416, -32.010096433380426],
                      [-72.80613150043732, -32.00583125697337],
                      [-72.80514520973183, -32.00140869579783],
                      [-72.80375616250453, -31.997179504453314],
                      [-72.8027249618539, -31.992910612763044],
                      [-72.80166869616004, -31.98870353806331],
                      [-72.80043574120432, -31.984682671563252],
                      [-72.7983543737921, -31.980905964718268],
                      [-72.79555979026347, -31.977610056818833],
                      [-72.79358334377908, -31.97402691898467],
                      [-72.79181893388777, -31.970396280590624],
                      [-72.78904531991769, -31.967329318147545],
                      [-72.78625735298161, -31.964370098230933],
                      [-72.78438839551752, -31.96097828176738],
                      [-72.78158659351008, -31.958170681467834],
                      [-72.78025709545501, -31.954712116353676],
                      [-72.77749788795354, -31.952146697457966],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_19",
                    partNumb: 19,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.82870908397439, -32.16895440820159],
                      [-72.82732352428872, -32.16359535565008],
                      [-72.82743381824515, -32.15815626780589],
                      [-72.82654728755325, -32.152722467540656],
                      [-72.82736590718285, -32.1472669830169],
                      [-72.82707989740976, -32.14191597952872],
                      [-72.82684676401264, -32.13649598554539],
                      [-72.82633766461021, -32.13111625586478],
                      [-72.82736006187841, -32.12573108179491],
                      [-72.8270067043413, -32.120335588476706],
                      [-72.82824067853744, -32.11500305237196],
                      [-72.82768016945201, -32.10964203486465],
                      [-72.82703857387656, -32.10435013841053],
                      [-72.82575277295165, -32.0990365355594],
                      [-72.82497303740395, -32.093704201275855],
                      [-72.82474053350538, -32.08842797074028],
                      [-72.82440000843116, -32.08300579773913],
                      [-72.82442824218911, -32.07769442102023],
                      [-72.8230634059734, -32.072470478181216],
                      [-72.82067355594131, -32.06751054567476],
                      [-72.82009825173046, -32.06232385571115],
                      [-72.82007633068454, -32.05710976825272],
                      [-72.81900196209453, -32.05203217503962],
                      [-72.81844928544764, -32.04686715088638],
                      [-72.81832029779538, -32.04176758066981],
                      [-72.81662213890445, -32.03698374400671],
                      [-72.81538944826988, -32.03215421728595],
                      [-72.8136585145924, -32.027514731383334],
                      [-72.81281273136652, -32.022963362400816],
                      [-72.81212065998969, -32.018332518217875],
                      [-72.81146686802573, -32.01375978455266],
                      [-72.80978066597835, -32.009411694934805],
                      [-72.8078042895365, -32.00517169889942],
                      [-72.80734354487164, -32.00072782645833],
                      [-72.80550112046244, -31.996674897142395],
                      [-72.80386683486935, -31.992597193996115],
                      [-72.80315281532165, -31.988391062119494],
                      [-72.8009816806125, -31.984592065611412],
                      [-72.79962556634833, -31.980675448926792],
                      [-72.79789641535432, -31.97689073721117],
                      [-72.7958313887643, -31.973351342698795],
                      [-72.79335588201683, -31.970113955724884],
                      [-72.79136573718459, -31.966670182559927],
                      [-72.78923952282453, -31.963410212862545],
                      [-72.7871371586548, -31.960131303155947],
                      [-72.78447853582475, -31.957201447335848],
                      [-72.78231834117074, -31.954192945845342],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_20",
                    partNumb: 20,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -32.17120898217765],
                      [-72.83376086217152, -32.165723644730505],
                      [-72.83405243082267, -32.160161712846296],
                      [-72.83527217577092, -32.154662106051184],
                      [-72.83393496915188, -32.149162012139634],
                      [-72.83352738302862, -32.14364190946218],
                      [-72.83298329366013, -32.138250045319786],
                      [-72.83226140871642, -32.132841336924734],
                      [-72.8327533926684, -32.1273864773872],
                      [-72.83274562055236, -32.12188433441825],
                      [-72.83279380480298, -32.11650833011289],
                      [-72.83123045496771, -32.11117145120838],
                      [-72.82964690199768, -32.10589255409865],
                      [-72.82959076865984, -32.10050501148981],
                      [-72.82921667921629, -32.095027052599455],
                      [-72.82773115783927, -32.08969081010865],
                      [-72.82769146156826, -32.084316729036445],
                      [-72.8274262799419, -32.07892191310794],
                      [-72.82703856333971, -32.07360920324211],
                      [-72.82579118057951, -32.06840507924913],
                      [-72.82420685677995, -32.063303643455114],
                      [-72.82326902536008, -32.058092306601],
                      [-72.8238683136315, -32.052850885439035],
                      [-72.82382575898188, -32.047632238681004],
                      [-72.82355430410163, -32.04250041117121],
                      [-72.82241784227097, -32.03751412254046],
                      [-72.82063850854479, -32.03281386412562],
                      [-72.8197549955949, -32.02804596371847],
                      [-72.818207145066, -32.02350286691181],
                      [-72.81677806523815, -32.01899731189162],
                      [-72.81503860814735, -32.01451615032999],
                      [-72.81322507454233, -32.010176280750834],
                      [-72.81165312082086, -32.00585379375281],
                      [-72.80962581530153, -32.00168556861052],
                      [-72.80773249211151, -31.997528830530754],
                      [-72.80587148934735, -31.993505422681842],
                      [-72.80492966013551, -31.989299244038047],
                      [-72.80374536907047, -31.985207799115155],
                      [-72.80137685188886, -31.9815956851628],
                      [-72.79994306451732, -31.977750853555712],
                      [-72.79822974732143, -31.97400376163831],
                      [-72.79656812567124, -31.970333818179647],
                      [-72.79414435416784, -31.96704772705018],
                      [-72.7914456347019, -31.9639973152023],
                      [-72.78941043340244, -31.96071928210673],
                      [-72.78715441130828, -31.957579194369576],
                      [-72.78480630403344, -31.954549798085367],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_21",
                    partNumb: 21,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83789091602557, -32.168954408201586],
                      [-72.83810401657736, -32.16338560323836],
                      [-72.83705327869166, -32.157786973796455],
                      [-72.8381161604326, -32.15220222035692],
                      [-72.83754420715744, -32.1467028602592],
                      [-72.83659913431295, -32.141131383450684],
                      [-72.83644396326854, -32.13550336046886],
                      [-72.83596039094927, -32.12993997621885],
                      [-72.83617204470026, -32.12436239882376],
                      [-72.83437767794709, -32.11901984553057],
                      [-72.83486155300888, -32.11347730531878],
                      [-72.83483091807518, -32.10788999011459],
                      [-72.83555072655939, -32.10234781596673],
                      [-72.83501006001772, -32.09680602246205],
                      [-72.83447348003757, -32.09127219410536],
                      [-72.83274744128063, -32.08587977015042],
                      [-72.83312665659734, -32.080382484426515],
                      [-72.83356637801234, -32.074937308307334],
                      [-72.83171948722566, -32.06971929676883],
                      [-72.83196090556864, -32.064310178439946],
                      [-72.83072576853006, -32.05904100186055],
                      [-72.82898542878927, -32.05392716097552],
                      [-72.82781054234486, -32.04880750443391],
                      [-72.82812794591253, -32.04355283360451],
                      [-72.82763474830824, -32.03848413384933],
                      [-72.82614214097265, -32.033538905183185],
                      [-72.82592942278356, -32.02848131334621],
                      [-72.82503702040016, -32.02364305070839],
                      [-72.82364849448355, -32.01896046158057],
                      [-72.82252816658418, -32.01425917653508],
                      [-72.8213671098412, -32.00956770934932],
                      [-72.8200062051266, -32.00495514848256],
                      [-72.81929113493673, -32.00031377608057],
                      [-72.81883792305217, -31.995702726665108],
                      [-72.8175617754617, -31.991410906072304],
                      [-72.8154687317235, -31.987285024020984],
                      [-72.813949281252, -31.98309575298787],
                      [-72.81214791916783, -31.979010079622565],
                      [-72.81083242756527, -31.974874616110647],
                      [-72.8094572254846, -31.97081436076944],
                      [-72.80693203048187, -31.967291332153387],
                      [-72.80445770431294, -31.963899435053168],
                      [-72.80245438382569, -31.96034512500544],
                      [-72.80035377385019, -31.95692169277707],
                      [-72.79773048709137, -31.95382246221613],
                      [-72.79547138839214, -31.950526145743286],
                      [-72.79282905868175, -31.947471912238058],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_22",
                    partNumb: 22,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83789068990019, -32.164445424422524],
                      [-72.83604911794629, -32.158933675603954],
                      [-72.83571918265156, -32.15335842905728],
                      [-72.83533798438141, -32.147776799350154],
                      [-72.83666842603981, -32.14227030497247],
                      [-72.83510998548654, -32.13686276044801],
                      [-72.83470920950475, -32.13137255420634],
                      [-72.83411227336282, -32.12587352032316],
                      [-72.83332858112495, -32.12043803424432],
                      [-72.83428248114542, -32.11496393569451],
                      [-72.83384185508189, -32.109471181881396],
                      [-72.8340614479338, -32.10399943691556],
                      [-72.83311496087772, -32.09856807165694],
                      [-72.83262237377735, -32.093028395631464],
                      [-72.83272855540237, -32.087503030036316],
                      [-72.83305103285551, -32.081946626693345],
                      [-72.83292564943015, -32.07648509914992],
                      [-72.83193163779876, -32.07110711704314],
                      [-72.83096915438507, -32.06571028881157],
                      [-72.8301892953443, -32.060380056441055],
                      [-72.8288474905845, -32.055178896602975],
                      [-72.82800779079113, -32.04994360080214],
                      [-72.82717493066029, -32.044841766257925],
                      [-72.8258818515745, -32.03978080252669],
                      [-72.82576729070517, -32.03466167072015],
                      [-72.82462576044077, -32.029712704387634],
                      [-72.82452526593765, -32.02469166642126],
                      [-72.82235378248014, -32.02005988762406],
                      [-72.82127159847903, -32.01536874093064],
                      [-72.82002616255681, -32.01064819701667],
                      [-72.81972007645837, -32.00585939729078],
                      [-72.81841190352937, -32.00128415916938],
                      [-72.81640394293859, -31.996902713451416],
                      [-72.81448641604162, -31.992593504318474],
                      [-72.81258232147614, -31.988398969716474],
                      [-72.80991310370715, -31.98456999521619],
                      [-72.80872181018209, -31.980351651081467],
                      [-72.80717526111849, -31.976330052688883],
                      [-72.80449014567509, -31.972739736874697],
                      [-72.80197749312701, -31.969213895429085],
                      [-72.79930967932201, -31.96583183425164],
                      [-72.79759047271179, -31.96212700731711],
                      [-72.7953000845259, -31.958730813735418],
                      [-72.79299602156959, -31.955442986197312],
                      [-72.78970316939728, -31.95282209581389],
                      [-72.78721972607607, -31.949836540600817],
                      [-72.78491596968787, -31.946702472480123],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_23",
                    partNumb: 23,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -32.162191014604666],
                      [-72.83301315520944, -32.1566019192918],
                      [-72.83304849335775, -32.151061631613835],
                      [-72.83188319858492, -32.14555948814393],
                      [-72.83103678272825, -32.14003130262006],
                      [-72.8310721734496, -32.13461746727475],
                      [-72.83201769957051, -32.129117808535035],
                      [-72.83162345544201, -32.12362595019024],
                      [-72.83163663529415, -32.11822523142619],
                      [-72.83132397730897, -32.11269094225328],
                      [-72.83128292332856, -32.107225517366146],
                      [-72.83094566319737, -32.10173834664641],
                      [-72.83120771722314, -32.09626628459622],
                      [-72.83128791639632, -32.09067808962243],
                      [-72.82972972056184, -32.08527778203153],
                      [-72.82880656935913, -32.07980082711973],
                      [-72.82758996387244, -32.07456456493361],
                      [-72.82710483781159, -32.06918530649444],
                      [-72.82691576151592, -32.0638239832297],
                      [-72.82609504906009, -32.05860075281902],
                      [-72.82485585310798, -32.05356041889824],
                      [-72.82380021721623, -32.048512971377576],
                      [-72.82272902250405, -32.043404779741664],
                      [-72.82203458340695, -32.03820564502761],
                      [-72.82151064116165, -32.033176118566836],
                      [-72.8194568548303, -32.02842873279945],
                      [-72.81758209729001, -32.023783070735185],
                      [-72.8164869155555, -32.018998793221],
                      [-72.81628476713695, -32.01413008395919],
                      [-72.81487836195133, -32.00947779230622],
                      [-72.81412695923294, -32.00479145121404],
                      [-72.8118091968279, -32.000518773155235],
                      [-72.81109190895725, -31.996004044392674],
                      [-72.80957553301282, -31.991744045599777],
                      [-72.80756382958701, -31.98765098035129],
                      [-72.80522326803869, -31.983766201955845],
                      [-72.80332224980653, -31.979761702857754],
                      [-72.80241895991841, -31.975606934368297],
                      [-72.79950180897433, -31.972364800960367],
                      [-72.79781993918782, -31.968638095883453],
                      [-72.79552722173437, -31.965118045601354],
                      [-72.79436025450126, -31.961260030371992],
                      [-72.79124127291821, -31.958415316287493],
                      [-72.78904280423922, -31.95502541910802],
                      [-72.78600551881071, -31.952261968336582],
                      [-72.78310425744385, -31.949544922128446],
                      [-72.78072907349069, -31.946540334878176],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_24",
                    partNumb: 24,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8333, -32.16670000000001],
                      [-72.83384371077236, -32.16121288948445],
                      [-72.83275794436146, -32.15575567920167],
                      [-72.83274525506845, -32.150288790335324],
                      [-72.83286738080157, -32.1448309974344],
                      [-72.83236666089296, -32.13939059122306],
                      [-72.83278700587823, -32.134067586033275],
                      [-72.83291277741868, -32.1286387522776],
                      [-72.83134919703981, -32.12343103972086],
                      [-72.83092394689736, -32.11804706384792],
                      [-72.83094318026035, -32.112724662069276],
                      [-72.83177449720408, -32.10731480970366],
                      [-72.8314938543027, -32.101861386857586],
                      [-72.8300949522275, -32.096572944695794],
                      [-72.83037640257454, -32.091151016222845],
                      [-72.82993140504868, -32.085724457565675],
                      [-72.82973927212122, -32.080332912769585],
                      [-72.82905838535295, -32.07495002777975],
                      [-72.82965660338401, -32.06965369619261],
                      [-72.828519618479, -32.06437252485046],
                      [-72.82831668154802, -32.059080612738036],
                      [-72.82752571923396, -32.05400766743727],
                      [-72.82750447181914, -32.04879023724583],
                      [-72.82628963184708, -32.04383578070623],
                      [-72.82423094101357, -32.039149106609955],
                      [-72.82261005600837, -32.03436150209209],
                      [-72.82105488673417, -32.029601433275595],
                      [-72.81950858047033, -32.02500212117792],
                      [-72.81846879968002, -32.02027344111595],
                      [-72.81741089971096, -32.015643770441606],
                      [-72.81665023858118, -32.01102660999047],
                      [-72.8154827863691, -32.00661707712741],
                      [-72.81341933565132, -32.002449847625726],
                      [-72.8118787371451, -31.998265933123722],
                      [-72.8111766046321, -31.993947003845772],
                      [-72.8096645082133, -31.989873272639883],
                      [-72.80778569303342, -31.98589712917355],
                      [-72.80608282648333, -31.981990059118267],
                      [-72.8046825158407, -31.97807385967297],
                      [-72.80315395686627, -31.974210876053743],
                      [-72.80117380980846, -31.97059511023253],
                      [-72.7991696121023, -31.967009102332195],
                      [-72.79728741742268, -31.963457312817418],
                      [-72.79478885397423, -31.960350127342195],
                      [-72.79330646848994, -31.95682752157226],
                      [-72.79053792772876, -31.953972518057395],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_25",
                    partNumb: 25,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -32.162191014604666],
                      [-72.83324318852243, -32.1566037924291],
                      [-72.83289813626422, -32.151058030289775],
                      [-72.83201532555469, -32.145551626034816],
                      [-72.83269079324803, -32.140163604184764],
                      [-72.83190163331226, -32.13469761437236],
                      [-72.83182934345471, -32.12915496320316],
                      [-72.83152406318867, -32.12365993992049],
                      [-72.83166693857069, -32.118162023486676],
                      [-72.83171039039759, -32.112642337627946],
                      [-72.83122946179246, -32.10717181133371],
                      [-72.83015106353058, -32.101782181755006],
                      [-72.82906392272231, -32.0964218240025],
                      [-72.8287094314134, -32.090988907334456],
                      [-72.82762262064158, -32.08563909896272],
                      [-72.82685683427528, -32.080181542348],
                      [-72.82583429327359, -32.07488902401752],
                      [-72.82564867996818, -32.069545580646874],
                      [-72.8258231183834, -32.06425629090275],
                      [-72.82434231928256, -32.05908243998982],
                      [-72.82332956294469, -32.053963513048224],
                      [-72.82257690691188, -32.04883772655327],
                      [-72.82083660447518, -32.043937257089844],
                      [-72.81974828938434, -32.03898691945016],
                      [-72.81734388121374, -32.03436012553183],
                      [-72.8167168113094, -32.02942712814445],
                      [-72.8155428207973, -32.0247049271229],
                      [-72.81429672546561, -32.02000092659791],
                      [-72.81378696807633, -32.01527858807587],
                      [-72.81204489487381, -32.010876923242094],
                      [-72.81018918092603, -32.00655354020088],
                      [-72.80915642771058, -32.00215171749084],
                      [-72.80769424548895, -31.99785796531735],
                      [-72.80623873212153, -31.99370921607048],
                      [-72.80491438423714, -31.989552527404598],
                      [-72.8028397975208, -31.98566221828768],
                      [-72.8014000608354, -31.981689211670677],
                      [-72.79916834663938, -31.978064744806087],
                      [-72.79782721871922, -31.974251972644062],
                      [-72.79604905554429, -31.970573502849074],
                      [-72.79396590876435, -31.967082645454504],
                      [-72.79172808269, -31.963838544031688],
                      [-72.78949866696286, -31.960555735750223],
                      [-72.787322563608, -31.95726114814255],
                      [-72.78447193528783, -31.954432894469527],
                      [-72.78161363234555, -31.95172539807691],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_26",
                    partNumb: 26,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8287093100998, -32.164445424422524],
                      [-72.82844281354934, -32.15905380067135],
                      [-72.82737890127868, -32.15365551792224],
                      [-72.82630411967324, -32.14830340645213],
                      [-72.82693595761955, -32.142859004395476],
                      [-72.82791854222569, -32.13746071886398],
                      [-72.82702692769433, -32.132126695071264],
                      [-72.82787508833623, -32.126795268371914],
                      [-72.82858294335506, -32.12137479621751],
                      [-72.82833701467025, -32.115927369653235],
                      [-72.82814227417069, -32.110695299848246],
                      [-72.82784541620198, -32.10529389980864],
                      [-72.82590745864204, -32.10007995978004],
                      [-72.82586736731066, -32.09464654627155],
                      [-72.82481886173925, -32.08930762003212],
                      [-72.82394110703984, -32.08401262820389],
                      [-72.82352970895384, -32.07866849321916],
                      [-72.82389025878699, -32.073296894391056],
                      [-72.82255819774069, -32.068053043187255],
                      [-72.8216964452175, -32.06281662700383],
                      [-72.82136906111076, -32.057654661978184],
                      [-72.82085527686486, -32.05248625429937],
                      [-72.81984725231591, -32.04741441332343],
                      [-72.81945632525883, -32.0424093420273],
                      [-72.8177183975569, -32.03762650740738],
                      [-72.81630400881794, -32.03286775924562],
                      [-72.81541617434506, -32.02808095712211],
                      [-72.8148529366114, -32.02335133128854],
                      [-72.81333367359919, -32.018774824764144],
                      [-72.81251767517067, -32.01414530042493],
                      [-72.81028720668307, -32.00991561419708],
                      [-72.8101267855573, -32.005353848041],
                      [-72.80845049981532, -32.00115923504095],
                      [-72.80728978988253, -31.996824986161542],
                      [-72.8050677022697, -31.992927901570543],
                      [-72.8031948012166, -31.989048365806187],
                      [-72.80135309403701, -31.985167621029106],
                      [-72.79854698290738, -31.981786766049364],
                      [-72.79736835804486, -31.97788572375186],
                      [-72.79448659404216, -31.974730623658647],
                      [-72.79256366933664, -31.97127263292603],
                      [-72.78993758961963, -31.968211592758404],
                      [-72.78864900554652, -31.964619420633984],
                      [-72.78679663895652, -31.961285070705156],
                      [-72.78462675791654, -31.958181102743257],
                      [-72.78196485442565, -31.95540355906488],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_27",
                    partNumb: 27,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.82870908397439, -32.16895440820159],
                      [-72.82818943454289, -32.16346371121166],
                      [-72.82958151724637, -32.158148509661906],
                      [-72.8304812286534, -32.152729523267084],
                      [-72.82932224701479, -32.14737629508444],
                      [-72.82979085151896, -32.14192836623905],
                      [-72.82957238266307, -32.13655180558314],
                      [-72.82817634128104, -32.13127816748342],
                      [-72.82776084856486, -32.12601228391625],
                      [-72.82680626603933, -32.12070246103467],
                      [-72.82675789150058, -32.11537143133474],
                      [-72.82718787825422, -32.110039003911986],
                      [-72.82726702289635, -32.10477028340903],
                      [-72.82739166407066, -32.099455195563316],
                      [-72.82648152662341, -32.09411262253017],
                      [-72.82557982323317, -32.08890982169206],
                      [-72.82372926776688, -32.08374441688569],
                      [-72.82205912930038, -32.078590579355],
                      [-72.82091380539777, -32.07338281896673],
                      [-72.81929799597461, -32.06832369302845],
                      [-72.81882474412362, -32.06318111307539],
                      [-72.81898612802256, -32.05803153567337],
                      [-72.81745634116547, -32.05301968822527],
                      [-72.81672554450041, -32.04808606350044],
                      [-72.8150069327173, -32.04339684464903],
                      [-72.81371780578051, -32.03869769833738],
                      [-72.81262582470333, -32.03393877078079],
                      [-72.81156493403766, -32.02932355175011],
                      [-72.81127731077034, -32.024710632906206],
                      [-72.81014788871825, -32.020281127227435],
                      [-72.80868480351609, -32.01599364848661],
                      [-72.80649383641027, -32.011930378231824],
                      [-72.80505803627064, -32.007771293267],
                      [-72.80288640978097, -32.003818326905446],
                      [-72.80155505895976, -31.99972864919346],
                      [-72.79917905343224, -31.996018192589695],
                      [-72.79727313771653, -31.99234171279688],
                      [-72.79505304785582, -31.988801711908216],
                      [-72.79389637579078, -31.985008066397604],
                      [-72.79157854681901, -31.98168339904334],
                      [-72.78981485535806, -31.978194559426164],
                      [-72.78790181674977, -31.974837859411224],
                      [-72.78669421126176, -31.971328525955844],
                      [-72.78457356995753, -31.9681556226078],
                      [-72.78227963524817, -31.965162332988044],
                      [-72.78044473470607, -31.96211338450106],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_28",
                    partNumb: 28,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -32.17120898217765],
                      [-72.83312704217356, -32.165670645364685],
                      [-72.83322620241152, -32.16023615479214],
                      [-72.83288415359863, -32.15481479924697],
                      [-72.83221929270174, -32.14949571841721],
                      [-72.83251519702105, -32.144171515928804],
                      [-72.83180663795473, -32.138770298151904],
                      [-72.83141665746436, -32.13346999899819],
                      [-72.83158377838743, -32.12818073403927],
                      [-72.83134223192641, -32.12275076470345],
                      [-72.83175102403086, -32.11739423615884],
                      [-72.83050285740197, -32.11208737390821],
                      [-72.83023535215214, -32.10668692993014],
                      [-72.8309958613273, -32.10128225951373],
                      [-72.82939087553797, -32.09600321545572],
                      [-72.82828891765244, -32.09077110031441],
                      [-72.8281062995371, -32.085350474022356],
                      [-72.82665832269227, -32.080164332191565],
                      [-72.82584106865548, -32.074910876719294],
                      [-72.82671388572125, -32.06961687233979],
                      [-72.82645606496905, -32.064413021116195],
                      [-72.82613983083797, -32.05920973094664],
                      [-72.82572792636525, -32.054036170855774],
                      [-72.82511276729925, -32.0489321562405],
                      [-72.82495427644744, -32.04383633851074],
                      [-72.82491314539098, -32.03886534530647],
                      [-72.82426142562147, -32.03395332262005],
                      [-72.82242470360922, -32.02937525169291],
                      [-72.8219440466867, -32.02461800805851],
                      [-72.82044175290754, -32.020089294378394],
                      [-72.81870271934747, -32.01570392311775],
                      [-72.8178343862085, -32.01114391470506],
                      [-72.81774541198708, -32.00655071625786],
                      [-72.81680223904573, -32.002107529487844],
                      [-72.81625933327327, -31.997682942192146],
                      [-72.81393525685809, -31.993805755690158],
                      [-72.81206368553292, -31.989845219505234],
                      [-72.81018013662231, -31.985890492126497],
                      [-72.8083453590026, -31.982130223373904],
                      [-72.8069714009493, -31.978225571132437],
                      [-72.80457739262472, -31.974768132649587],
                      [-72.80297653147528, -31.971090815978826],
                      [-72.79991856624866, -31.96813307828545],
                      [-72.79760433213819, -31.964911054858575],
                      [-72.79523021559642, -31.961789254577955],
                      [-72.79299269913587, -31.958594188769695],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_29",
                    partNumb: 29,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83789091602557, -32.168954408201586],
                      [-72.83769378159616, -32.16337270170944],
                      [-72.83810501321888, -32.157838566835835],
                      [-72.83806836248422, -32.152383171732126],
                      [-72.83694119907918, -32.146912317284425],
                      [-72.83803983580009, -32.14140040244755],
                      [-72.83754281317138, -32.13586223845719],
                      [-72.8376284671389, -32.13026170831951],
                      [-72.838024343813, -32.12473807043301],
                      [-72.83871017011022, -32.119188202665754],
                      [-72.83777634521454, -32.11363589135717],
                      [-72.83778767897253, -32.10812711197222],
                      [-72.83730496813732, -32.102679832002735],
                      [-72.83649804628362, -32.09716691901682],
                      [-72.83578396845537, -32.09160909763173],
                      [-72.83594579723723, -32.086069027056396],
                      [-72.83621701179058, -32.08055598632243],
                      [-72.83542824046538, -32.07517408813722],
                      [-72.83440012687973, -32.06984145896544],
                      [-72.83234275859652, -32.064740845356646],
                      [-72.83067857198849, -32.059648686426605],
                      [-72.82997286900509, -32.05450742478429],
                      [-72.82935384040974, -32.04931239477336],
                      [-72.82945255475329, -32.044172699120644],
                      [-72.82858233277369, -32.03915627028866],
                      [-72.82745500019792, -32.03427276393928],
                      [-72.82663602337684, -32.029456168614566],
                      [-72.82559567837566, -32.02463560292761],
                      [-72.82447524223335, -32.019913900853034],
                      [-72.82301282276279, -32.01526495274028],
                      [-72.8221794268214, -32.0105877510061],
                      [-72.820395474088, -32.006285631437976],
                      [-72.81889508389243, -32.00193466530096],
                      [-72.81778993540323, -31.99751536707444],
                      [-72.81592022345177, -31.993356174888035],
                      [-72.81382336114173, -31.98940358946888],
                      [-72.8120365263381, -31.985350458088508],
                      [-72.80938369454958, -31.98168340540516],
                      [-72.80724678694249, -31.977950642094335],
                      [-72.80588229922743, -31.973996286032722],
                      [-72.80325358919653, -31.970576352374245],
                      [-72.80141767144194, -31.966914697601368],
                      [-72.79867431088122, -31.963783441800608],
                      [-72.79655363425276, -31.960445634460278],
                      [-72.79374983512803, -31.957559287016824],
                      [-72.79137786272643, -31.954404855256584],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_30",
                    partNumb: 30,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83789068990019, -32.164445424422524],
                      [-72.83717382383553, -32.1588156365652],
                      [-72.83609595836423, -32.153253587495286],
                      [-72.83559811061653, -32.147674320901245],
                      [-72.83560626200217, -32.14210380918431],
                      [-72.83613057741483, -32.13660651662624],
                      [-72.83698884402946, -32.131077505314266],
                      [-72.83528549720167, -32.125672651907465],
                      [-72.83490924208986, -32.12011436396929],
                      [-72.83490088037945, -32.11461173336461],
                      [-72.83489426833818, -32.10909029129247],
                      [-72.83486573888929, -32.10364591498818],
                      [-72.83445701763893, -32.098153274820135],
                      [-72.8335691761452, -32.09271809366659],
                      [-72.83301397721188, -32.087239075814274],
                      [-72.83248601594904, -32.08173912460328],
                      [-72.83249551511014, -32.07635965604963],
                      [-72.83107029725863, -32.07102178967549],
                      [-72.83115871573706, -32.06562193219252],
                      [-72.83007754969096, -32.06042393467947],
                      [-72.82892711528172, -32.05523372157897],
                      [-72.82897230377671, -32.05000409574613],
                      [-72.82733265323587, -32.04501862755994],
                      [-72.82557651965082, -32.04015901901274],
                      [-72.8244547270186, -32.03518664937645],
                      [-72.82385754447277, -32.030184120666426],
                      [-72.82277130564809, -32.02529752335991],
                      [-72.82137208946585, -32.02052541376831],
                      [-72.82068896410946, -32.015803401632716],
                      [-72.81859946932403, -32.011357722346226],
                      [-72.81669492660143, -32.00702804609667],
                      [-72.81489628629863, -32.00273332003819],
                      [-72.81292802880978, -31.998563546103775],
                      [-72.81164640254809, -31.994195883786755],
                      [-72.80916077681988, -31.990311534997115],
                      [-72.80715814648684, -31.98631973941081],
                      [-72.8051573951032, -31.982551888293916],
                      [-72.80290350989874, -31.978807625732923],
                      [-72.8012550490793, -31.974952700925847],
                      [-72.79969646759659, -31.971193660527415],
                      [-72.79664838205815, -31.968186413246855],
                      [-72.79420059677587, -31.964891587550987],
                      [-72.79130653952284, -31.961945204910112],
                      [-72.7885659966577, -31.959074057902562],
                      [-72.78544191653114, -31.956529687730008],
                      [-72.78292888201145, -31.953560965792715],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_31",
                    partNumb: 31,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -32.162191014604666],
                      [-72.83249352329233, -32.156725456598025],
                      [-72.83231100697516, -32.151309339851004],
                      [-72.83060847576157, -32.14591510260391],
                      [-72.8312998758398, -32.14045477956105],
                      [-72.83151786731695, -32.134936685271484],
                      [-72.82958617878343, -32.129644696222634],
                      [-72.83010898687166, -32.124175007922425],
                      [-72.82907988248375, -32.1188656947106],
                      [-72.82800198042085, -32.11350989633881],
                      [-72.82706534919838, -32.108196790522776],
                      [-72.8261297819614, -32.10282573921061],
                      [-72.82578275363217, -32.097390147327054],
                      [-72.82465611543165, -32.09208966121289],
                      [-72.82225768274131, -32.08702578153387],
                      [-72.82192363769748, -32.08173860667699],
                      [-72.82272766609664, -32.076382427918865],
                      [-72.821768657607, -32.07116358943612],
                      [-72.82097508701605, -32.065872314923745],
                      [-72.82107731329451, -32.060563341155266],
                      [-72.8204214758634, -32.05540854698471],
                      [-72.82077960420742, -32.05022235796862],
                      [-72.8193680011917, -32.04518437529304],
                      [-72.81807992476784, -32.04023061032773],
                      [-72.81631068353357, -32.035482586571604],
                      [-72.8150403772231, -32.0307249202916],
                      [-72.81545116158307, -32.02586016477263],
                      [-72.81368017017566, -32.02138142322542],
                      [-72.81234413892155, -32.01676301299485],
                      [-72.8098501542996, -32.012662524139955],
                      [-72.808705501064, -32.00829702012497],
                      [-72.80772895381783, -32.003884367785],
                      [-72.80623352489519, -31.999756391044677],
                      [-72.80417659331721, -31.99576754974177],
                      [-72.80234308606144, -31.99173367904194],
                      [-72.80056358508969, -31.98776822564875],
                      [-72.79887913855993, -31.983888855309395],
                      [-72.79630960655854, -31.980452222887966],
                      [-72.79406794253536, -31.97698497979644],
                      [-72.79167084008303, -31.973641763526633],
                      [-72.78961961546489, -31.970324160998707],
                      [-72.7878416927934, -31.9668872028855],
                      [-72.78540417474474, -31.963809552624106],
                      [-72.78352596955102, -31.960505231260917],
                      [-72.78178045367962, -31.957205203499154],
                      [-72.77915758122971, -31.954429308503077],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_32",
                    partNumb: 32,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8333, -31.83330564440415],
                      [-72.83338787443883, -31.829722475668046],
                      [-72.83434448303177, -31.826261791806584],
                      [-72.8351579134832, -31.822960856152456],
                      [-72.83616096098176, -31.81968503214381],
                      [-72.83672878719315, -31.816375059970422],
                      [-72.83706531614357, -31.813078186749944],
                      [-72.83718666130802, -31.809834332366073],
                      [-72.83788017825654, -31.806720050290778],
                      [-72.83750758242961, -31.803591570271507],
                      [-72.83778775287388, -31.80051714307588],
                      [-72.83778112641787, -31.79740001209094],
                      [-72.83850332190163, -31.794379980698427],
                      [-72.83801139633343, -31.79140383492245],
                      [-72.83795293639503, -31.788458330064127],
                      [-72.83774681874579, -31.785547643567345],
                      [-72.83814725664128, -31.782642245170056],
                      [-72.83822695829204, -31.779762604806074],
                      [-72.83844514058308, -31.7769058227091],
                      [-72.83841766022188, -31.774158366466295],
                      [-72.83852895020235, -31.77142041502983],
                      [-72.83934924543942, -31.768750740981492],
                      [-72.83921932871975, -31.7660553011783],
                      [-72.83962823936588, -31.763410686399418],
                      [-72.83958131969264, -31.760796268987615],
                      [-72.83950983806531, -31.75824829820522],
                      [-72.83982317559541, -31.75571673577678],
                      [-72.83959939381201, -31.753266912685124],
                      [-72.83915670894704, -31.75092424074555],
                      [-72.83893759878431, -31.748589185529067],
                      [-72.83832872659927, -31.746350444138372],
                      [-72.83810787255449, -31.744088975004793],
                      [-72.8380177125101, -31.741877046399956],
                      [-72.83790016786568, -31.739701849573542],
                      [-72.83781778649481, -31.73758631802241],
                      [-72.8373989543414, -31.735563038644322],
                      [-72.83700378410525, -31.73364083924593],
                      [-72.83642800241667, -31.731737303595537],
                      [-72.8359948434614, -31.729880296660284],
                      [-72.83549875593219, -31.728100270734842],
                      [-72.8350682849315, -31.72631293505828],
                      [-72.83493966714215, -31.724539523304777],
                      [-72.83437777471707, -31.722878637908565],
                      [-72.8340091152753, -31.721234249778103],
                      [-72.8333410409165, -31.71971468138982],
                      [-72.83258872366491, -31.718274945392736],
                      [-72.83223177547062, -31.716782392415496],
                      [-72.83176440032135, -31.715385157098346],
                      [-72.83133228501907, -31.713990136679865],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_33",
                    partNumb: 33,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -31.828796653881856],
                      [-72.83365185957467, -31.825281430695934],
                      [-72.83394493301827, -31.821883056607316],
                      [-72.8347127542885, -31.818506735536747],
                      [-72.83473331564461, -31.81510873827809],
                      [-72.83596530107043, -31.811911329682424],
                      [-72.83588904252292, -31.808656696621423],
                      [-72.83549377995139, -31.80540333395116],
                      [-72.83600795904066, -31.802211325249523],
                      [-72.83617301569637, -31.799032289337],
                      [-72.83693413281415, -31.7960043346854],
                      [-72.83712946366266, -31.792975586649426],
                      [-72.83711471359379, -31.78994133757944],
                      [-72.83706342538902, -31.78694069580024],
                      [-72.83678637438216, -31.784002922991252],
                      [-72.83772508702991, -31.78117759319338],
                      [-72.83785696591634, -31.778298074606056],
                      [-72.83814947892647, -31.775475817505033],
                      [-72.83804456350325, -31.77267877725622],
                      [-72.83912929220885, -31.770040952230186],
                      [-72.8388424237374, -31.76732269258005],
                      [-72.83891943516227, -31.764623102503023],
                      [-72.83920459085925, -31.761943884065186],
                      [-72.83903943268969, -31.75934705921703],
                      [-72.83865274063163, -31.756758448162355],
                      [-72.83868942081983, -31.754210652818323],
                      [-72.83890110247792, -31.751796060948536],
                      [-72.83889398349598, -31.749354815049223],
                      [-72.83874888622134, -31.747027727052444],
                      [-72.8387694916206, -31.744743675171193],
                      [-72.83917330992178, -31.742453472674846],
                      [-72.83904071994606, -31.74021447342759],
                      [-72.8388872333829, -31.738033642948643],
                      [-72.83883802113795, -31.735941135902667],
                      [-72.83860714326383, -31.733856212220314],
                      [-72.83840211792668, -31.73187969712135],
                      [-72.83791515067163, -31.729982497648862],
                      [-72.83781696121005, -31.72805283438833],
                      [-72.83742988579091, -31.726196113262187],
                      [-72.83670058661903, -31.724468053072606],
                      [-72.83613976869893, -31.7227964570336],
                      [-72.83550793503345, -31.72118517785765],
                      [-72.83536225987687, -31.719487585396397],
                      [-72.83470971531854, -31.71793404438163],
                      [-72.83412535223262, -31.71642381838177],
                      [-72.83360384468496, -31.714951204396954],
                      [-72.83326360957341, -31.713502555124418],
                      [-72.83285755046136, -31.71209128767457],
                      [-72.83255985294852, -31.710696413645344],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_34",
                    partNumb: 34,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8287259680736, -31.83105106732564],
                      [-72.82896049239524, -31.827462229527324],
                      [-72.83001457754689, -31.82403062510771],
                      [-72.83036024462396, -31.820583260388442],
                      [-72.83107661951209, -31.81721328098618],
                      [-72.83167722211701, -31.813912389630083],
                      [-72.83205166869784, -31.810646998429366],
                      [-72.83224640484069, -31.807447144737818],
                      [-72.83305684873021, -31.804255188171933],
                      [-72.83352358206803, -31.801106936120924],
                      [-72.83366935583359, -31.797964371232975],
                      [-72.83416624368958, -31.794892225620178],
                      [-72.83415447715181, -31.791850001272056],
                      [-72.83388274298682, -31.788857340331344],
                      [-72.83394757293259, -31.78586046884443],
                      [-72.83357953729258, -31.782922316601386],
                      [-72.83319220449008, -31.780048557396018],
                      [-72.83288105437587, -31.77713893599996],
                      [-72.83273339678541, -31.774267871656726],
                      [-72.83285930547194, -31.771490134063956],
                      [-72.83237267481383, -31.768782344064682],
                      [-72.8326540607865, -31.766012282252362],
                      [-72.83312958591101, -31.763276416366683],
                      [-72.8332698587019, -31.760589098315126],
                      [-72.83337927826409, -31.757911056732723],
                      [-72.83323306130897, -31.755230729902696],
                      [-72.83255057452169, -31.752688901972537],
                      [-72.83256599033686, -31.7501585507216],
                      [-72.83230144454132, -31.747694610422144],
                      [-72.83186294728353, -31.745327531365344],
                      [-72.83176395639444, -31.7429848868367],
                      [-72.83160477095744, -31.740735434132937],
                      [-72.83162986490083, -31.73850864647455],
                      [-72.83144032689266, -31.736321365185148],
                      [-72.83068797800804, -31.73431433248967],
                      [-72.83027320392296, -31.732274069961257],
                      [-72.83000744573711, -31.73030702287861],
                      [-72.829919317913, -31.728359365999847],
                      [-72.82950080707191, -31.726477177063206],
                      [-72.82919820890123, -31.724625365928063],
                      [-72.82893126618596, -31.72286220260495],
                      [-72.8287890185729, -31.72110318253893],
                      [-72.82793988176918, -31.71956386955035],
                      [-72.82712097229647, -31.718054747123215],
                      [-72.82657492238822, -31.716547698745654],
                      [-72.82587860959079, -31.715085921813195],
                      [-72.82518067141609, -31.713680105515362],
                      [-72.82463513431888, -31.712296500317706],
                      [-72.82425682193623, -31.710900213890394],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_35",
                    partNumb: 35,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.82872574359011, -31.835560059338125],
                      [-72.82902803459879, -31.83195759561246],
                      [-72.82963186719421, -31.828443239657222],
                      [-72.82998576493473, -31.824898432023797],
                      [-72.82978262979812, -31.821435672662687],
                      [-72.83069837366341, -31.818110230596016],
                      [-72.83104217763041, -31.814752252998474],
                      [-72.83098791020076, -31.81142572864636],
                      [-72.83200615785746, -31.808246061130145],
                      [-72.83283818191526, -31.805084983028788],
                      [-72.83287928368392, -31.80192481033188],
                      [-72.8325839102754, -31.79875990173227],
                      [-72.83311701793363, -31.79568360656245],
                      [-72.83331394061412, -31.792666238571258],
                      [-72.8333332169646, -31.789637413409682],
                      [-72.83355935484435, -31.78667847677355],
                      [-72.83391124436359, -31.783788394723015],
                      [-72.83386067965725, -31.780894779128865],
                      [-72.83376730051046, -31.778015235445054],
                      [-72.83444253555277, -31.77525139139276],
                      [-72.83483446258899, -31.77249745278911],
                      [-72.83421237795103, -31.76974273206246],
                      [-72.83418179347537, -31.767019493670205],
                      [-72.83409443223968, -31.764336368140288],
                      [-72.83442772459543, -31.761663088564585],
                      [-72.83482051815109, -31.75902679050092],
                      [-72.8348007735399, -31.756412049182156],
                      [-72.83442859268023, -31.753893731658707],
                      [-72.83466388676925, -31.75145472441903],
                      [-72.83397295346907, -31.7491083953483],
                      [-72.8339656552754, -31.74674107527403],
                      [-72.83349472209031, -31.744527116077755],
                      [-72.83294988582088, -31.742369319726578],
                      [-72.83254896726383, -31.740196694195937],
                      [-72.83163784056255, -31.73821129293347],
                      [-72.83136469701905, -31.736168700995304],
                      [-72.83128330720288, -31.73415095742523],
                      [-72.83076749768455, -31.73220670763839],
                      [-72.83001290942836, -31.730373863839457],
                      [-72.8291274971139, -31.728640867504012],
                      [-72.82852699665872, -31.726878184472675],
                      [-72.82787373286074, -31.725200772960193],
                      [-72.82710112519729, -31.723620985190387],
                      [-72.82611122066696, -31.72214824871036],
                      [-72.82525403555138, -31.72068835708013],
                      [-72.8246591164069, -31.71916620295449],
                      [-72.82406922865343, -31.7176812526148],
                      [-72.82327561000496, -31.716353178193895],
                      [-72.8228292962236, -31.71495111207902],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_36",
                    partNumb: 36,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -31.837814637921657],
                      [-72.83374112871502, -31.834235986517918],
                      [-72.83436836547689, -31.830719515477252],
                      [-72.83559127830907, -31.827332305431078],
                      [-72.83604642867587, -31.823900433414785],
                      [-72.83662852798449, -31.820597877534297],
                      [-72.83721622277271, -31.817352785026355],
                      [-72.83689490691742, -31.814066892400167],
                      [-72.83768064447186, -31.810852095585002],
                      [-72.83809869096707, -31.807694163764786],
                      [-72.83896680375899, -31.804607343977878],
                      [-72.83914542467441, -31.80154900025123],
                      [-72.83881167991312, -31.79849646146447],
                      [-72.83872717693411, -31.79544425973637],
                      [-72.83951364672723, -31.792505591272672],
                      [-72.83926154478372, -31.78956253634247],
                      [-72.83897659408998, -31.786714603949132],
                      [-72.83866024406352, -31.783875153600103],
                      [-72.83843756177137, -31.781050795110897],
                      [-72.8387162821967, -31.778226952988767],
                      [-72.83841034102545, -31.7754590486239],
                      [-72.83811053600293, -31.772708077396917],
                      [-72.83785417255774, -31.769973931037363],
                      [-72.83758153848264, -31.767282622757886],
                      [-72.83772681990544, -31.76458311017009],
                      [-72.83816707059658, -31.76195796392949],
                      [-72.83752380496954, -31.759466896036237],
                      [-72.83742632653811, -31.756928552143457],
                      [-72.83689231469113, -31.754537539226384],
                      [-72.8367395029331, -31.752135527173188],
                      [-72.8367144403557, -31.74980056677536],
                      [-72.83609762328072, -31.7475531298078],
                      [-72.835629417588, -31.74534472223449],
                      [-72.83507066725815, -31.74318302011426],
                      [-72.83466571135058, -31.74107169974343],
                      [-72.83401288842828, -31.73905232914974],
                      [-72.83377020294411, -31.737033019681974],
                      [-72.83331690853942, -31.735089499556448],
                      [-72.83281313140542, -31.733216299431252],
                      [-72.83237989807178, -31.7313432360438],
                      [-72.83170346729304, -31.72960457865606],
                      [-72.83103416404465, -31.727922350844914],
                      [-72.83036225263602, -31.726264418505963],
                      [-72.82984326508983, -31.724603660040696],
                      [-72.8291020449685, -31.723053615900376],
                      [-72.82836893522642, -31.721547731803955],
                      [-72.82786520433508, -31.7200355217007],
                      [-72.82725527439032, -31.71860204097876],
                      [-72.82669562560149, -31.717193063279883],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_37",
                    partNumb: 37,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83787425640992, -31.835560059338125],
                      [-72.83901965652412, -31.83206675037683],
                      [-72.83964464572827, -31.8286354151791],
                      [-72.83956457628354, -31.82514693433161],
                      [-72.84007594357759, -31.82173578703204],
                      [-72.84119857633657, -31.818532445674595],
                      [-72.84186284862358, -31.815275397295775],
                      [-72.84208331906169, -31.81200513739035],
                      [-72.84255487422912, -31.808829678917494],
                      [-72.84248573237029, -31.805736280090645],
                      [-72.84269360675079, -31.802656244222586],
                      [-72.84327938051855, -31.79962903389744],
                      [-72.84332239715464, -31.79668030505615],
                      [-72.84325065241251, -31.79372255442085],
                      [-72.84354323723477, -31.79082460895121],
                      [-72.84343634913469, -31.787897186943034],
                      [-72.84317823842215, -31.785026388222704],
                      [-72.8439506187209, -31.782254575242092],
                      [-72.84396229269886, -31.779495107948595],
                      [-72.84452856125992, -31.776766548098326],
                      [-72.84438782365218, -31.774035746091815],
                      [-72.84399304532776, -31.771395395970963],
                      [-72.84368312291929, -31.768724921126687],
                      [-72.84361702648168, -31.76613937604094],
                      [-72.84338515564177, -31.763510258319055],
                      [-72.84308172251411, -31.760938066442012],
                      [-72.84347388459699, -31.75843498707854],
                      [-72.84327822804346, -31.75602641658325],
                      [-72.84291377239587, -31.75363901246995],
                      [-72.84206743231371, -31.75141923706713],
                      [-72.84165596797253, -31.749168962218704],
                      [-72.84121070008811, -31.74695439996248],
                      [-72.84063240196814, -31.744828421353006],
                      [-72.83991004334109, -31.742773768449535],
                      [-72.8393915716878, -31.74071561528243],
                      [-72.8385142725577, -31.738783948073365],
                      [-72.83843985987782, -31.73677473744862],
                      [-72.83772181727528, -31.73494016280768],
                      [-72.83696739808117, -31.733133497491302],
                      [-72.83611746158627, -31.731426195719997],
                      [-72.83508091684838, -31.72980112224093],
                      [-72.83432771108289, -31.728123579677316],
                      [-72.83381048865202, -31.72642950377927],
                      [-72.83326155922212, -31.724838425336443],
                      [-72.83248385792264, -31.723322996484164],
                      [-72.83205182462649, -31.721784535687434],
                      [-72.8313179360053, -31.720351286286828],
                      [-72.83060183552188, -31.718945998774053],
                      [-72.83001920919922, -31.717537401019765],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_38",
                    partNumb: 38,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83787403192642, -31.83105106732564],
                      [-72.83826814553697, -31.82749362800485],
                      [-72.83911180716368, -31.82410656510649],
                      [-72.84050391481563, -31.82086785446869],
                      [-72.84112173383447, -31.81756843563585],
                      [-72.84200524698583, -31.81435898773596],
                      [-72.84324595046317, -31.81126305360386],
                      [-72.84355277719715, -31.808091221249136],
                      [-72.84387901216469, -31.804996514301997],
                      [-72.8441614401796, -31.80196446957255],
                      [-72.84442289120813, -31.798876007515105],
                      [-72.84490579977236, -31.795913128128948],
                      [-72.8453240860273, -31.79301196176096],
                      [-72.8459756166125, -31.790105789943453],
                      [-72.84648175302164, -31.78727682528174],
                      [-72.84683899564988, -31.78446672813603],
                      [-72.84729644479562, -31.781665482092087],
                      [-72.84801363702137, -31.778931025633124],
                      [-72.84829794974809, -31.776269231713027],
                      [-72.84849569926423, -31.773569858329324],
                      [-72.84876624980237, -31.770900080398217],
                      [-72.84842937796675, -31.768310935582175],
                      [-72.84850278689674, -31.765727391304807],
                      [-72.84850799631016, -31.763158263824412],
                      [-72.84882608726144, -31.760624202490185],
                      [-72.84868468315157, -31.7581637924805],
                      [-72.84875158086855, -31.75582323831709],
                      [-72.84929015345058, -31.753479678255424],
                      [-72.84867568726476, -31.751275637085858],
                      [-72.84807200443967, -31.749096925275317],
                      [-72.8477581760301, -31.74692707409101],
                      [-72.84749743966535, -31.744776814537047],
                      [-72.8470278773585, -31.742718818181974],
                      [-72.84697379002043, -31.740638354637934],
                      [-72.84634691411648, -31.73867297961873],
                      [-72.8460725867238, -31.736729195523164],
                      [-72.8454513285619, -31.73486225513907],
                      [-72.84493909060741, -31.733009200237333],
                      [-72.84449457733888, -31.731214093275504],
                      [-72.84450345175831, -31.729420544507615],
                      [-72.8438640245005, -31.72774085501392],
                      [-72.84331848253623, -31.726079136012192],
                      [-72.84279254570511, -31.724533319353238],
                      [-72.84193812948313, -31.723074953412457],
                      [-72.8415696461481, -31.721555548244286],
                      [-72.84106284810333, -31.72010022832735],
                      [-72.84052694803076, -31.71866111908446],
                      [-72.84000338154871, -31.717287273923358],
                      [-72.83946935942666, -31.715952730922652],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_39",
                    partNumb: 39,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -31.828796653881856],
                      [-72.83432699144853, -31.82540514846597],
                      [-72.83541781909743, -31.82206157533294],
                      [-72.83609536500202, -31.818733717760534],
                      [-72.8373008803065, -31.815488671684854],
                      [-72.8381501608248, -31.81229306887021],
                      [-72.83864828396692, -31.80917036090228],
                      [-72.83866977793109, -31.805959748430645],
                      [-72.83859977867355, -31.802826602118074],
                      [-72.83888020758806, -31.79976566460627],
                      [-72.83891365962154, -31.796698834478597],
                      [-72.83902287919257, -31.793703673447318],
                      [-72.83880427077186, -31.790724300092865],
                      [-72.83902505154882, -31.78778617916509],
                      [-72.83929528667122, -31.78487825267133],
                      [-72.83950630559438, -31.781980565189127],
                      [-72.83928398025098, -31.779117242422345],
                      [-72.83924210672639, -31.776312048104234],
                      [-72.83895830903799, -31.773519163676244],
                      [-72.83890278343657, -31.770775792338025],
                      [-72.83943382437877, -31.768101100564703],
                      [-72.83971547182148, -31.765451892265354],
                      [-72.84001875194383, -31.762793948532778],
                      [-72.83960740112525, -31.760206502435896],
                      [-72.83928541165695, -31.757626584501057],
                      [-72.83932155432062, -31.755041941230125],
                      [-72.83886324891135, -31.752572045256876],
                      [-72.83876586893342, -31.750180775456617],
                      [-72.83863573877258, -31.7477835391327],
                      [-72.83802454503717, -31.74548411712316],
                      [-72.83800520921422, -31.743165252815096],
                      [-72.83781598038338, -31.74091057013106],
                      [-72.83743740622991, -31.7387451693841],
                      [-72.83721524406633, -31.736587678734256],
                      [-72.83673167079303, -31.734514889950752],
                      [-72.83691842105867, -31.732467317476594],
                      [-72.83646886336369, -31.730487985004675],
                      [-72.83598372478777, -31.72860522389608],
                      [-72.83602060743209, -31.726740790736187],
                      [-72.83542732020655, -31.725003241192425],
                      [-72.8352045065794, -31.7232621034227],
                      [-72.83483393641826, -31.72154039884634],
                      [-72.83448155280801, -31.719894220090364],
                      [-72.83370941325956, -31.71837476870976],
                      [-72.83303579258256, -31.71690053106361],
                      [-72.83255064914401, -31.715407358320455],
                      [-72.83199745368967, -31.713990265258875],
                      [-72.8313131979065, -31.71263931282298],
                      [-72.8309724772787, -31.711256288276104],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T12_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_40",
                    partNumb: 40,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8333, -31.83330564440415],
                      [-72.83382664721726, -31.829832524287582],
                      [-72.83463506863659, -31.82641553977894],
                      [-72.835016310015, -31.822963299332823],
                      [-72.8352021419463, -31.819542436148613],
                      [-72.83562339406062, -31.816244448089318],
                      [-72.83619607235086, -31.812939349512238],
                      [-72.83698725957177, -31.80981737050964],
                      [-72.83743251341839, -31.806670388968364],
                      [-72.8375927130305, -31.803507012654794],
                      [-72.83791501860598, -31.800369388711836],
                      [-72.8383332429621, -31.797335565217622],
                      [-72.83849505347041, -31.79435481495402],
                      [-72.83937157683617, -31.791433530966007],
                      [-72.83957628191605, -31.78848109856723],
                      [-72.83909755999568, -31.785620301271443],
                      [-72.83907020296836, -31.78271963243959],
                      [-72.83867131277246, -31.77991946769012],
                      [-72.83888323972414, -31.777102250273547],
                      [-72.83875620858352, -31.774395974392505],
                      [-72.8382030079499, -31.771688183498544],
                      [-72.8382747877046, -31.768978417278145],
                      [-72.83826216972676, -31.76631925075177],
                      [-72.83843426462424, -31.763673707405584],
                      [-72.83859788685207, -31.761103028176432],
                      [-72.8380685731477, -31.758578436998572],
                      [-72.8379641144269, -31.75606783809377],
                      [-72.83776204509854, -31.75363840440182],
                      [-72.83770910521484, -31.751309754240864],
                      [-72.83759190632686, -31.749016897339622],
                      [-72.83766199532987, -31.7467434303873],
                      [-72.83753877339903, -31.74450520023356],
                      [-72.83756009474634, -31.742308321924295],
                      [-72.83723918346112, -31.740213538978143],
                      [-72.83623972517256, -31.738298085267104],
                      [-72.83589554135814, -31.736339472241692],
                      [-72.83535862999499, -31.734422846335423],
                      [-72.83453010717963, -31.732609577278126],
                      [-72.83374697451279, -31.730865247720946],
                      [-72.83353868626729, -31.72905609305703],
                      [-72.83291885633069, -31.727347159464333],
                      [-72.8323315917832, -31.725678984688507],
                      [-72.83172436416359, -31.724108900916775],
                      [-72.83119779836593, -31.722547081777726],
                      [-72.83058465526864, -31.721019239270166],
                      [-72.83010691443133, -31.719506651209656],
                      [-72.82926722001689, -31.71816695466152],
                      [-72.82852550859744, -31.716865978556584],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_41",
                    partNumb: 41,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -31.828796653881856],
                      [-72.8331173607717, -31.825313397733662],
                      [-72.8330761860109, -31.821845455041007],
                      [-72.83334890364202, -31.818426901124244],
                      [-72.83430756948947, -31.81518798201008],
                      [-72.83463852332106, -31.811860710988604],
                      [-72.83512496590491, -31.808606958748506],
                      [-72.83544433986371, -31.80538961120751],
                      [-72.83537277289558, -31.80223640321619],
                      [-72.83456918469038, -31.799155016182336],
                      [-72.83394697576874, -31.796069788233886],
                      [-72.83411877660724, -31.792988748669153],
                      [-72.83409649071626, -31.789959187763074],
                      [-72.8339491835869, -31.78701716616449],
                      [-72.83323460839188, -31.784105279760755],
                      [-72.83284416274381, -31.781170011701544],
                      [-72.83265795123451, -31.77827960429606],
                      [-72.83350871596512, -31.775474025434836],
                      [-72.83397690753077, -31.772674527643126],
                      [-72.83391873463553, -31.769867753989775],
                      [-72.83443354186232, -31.76715914236129],
                      [-72.83456317386914, -31.764408209201207],
                      [-72.83423568457987, -31.761718534876145],
                      [-72.83381414699957, -31.759095074263488],
                      [-72.83377990933649, -31.75644768795322],
                      [-72.83382227432472, -31.75387524990242],
                      [-72.8337395148143, -31.751358888365093],
                      [-72.83330735471586, -31.748938130489325],
                      [-72.83330131803973, -31.746569281750276],
                      [-72.83271075584366, -31.744302513987183],
                      [-72.83228299812545, -31.742084166493317],
                      [-72.83220684305205, -31.739861167957404],
                      [-72.83193358524481, -31.737741991802462],
                      [-72.83189912749098, -31.7356427407794],
                      [-72.83158796961916, -31.733587818813767],
                      [-72.83132581369408, -31.731596922485934],
                      [-72.83098417955706, -31.729625149903367],
                      [-72.83066777463247, -31.72771016010929],
                      [-72.83064088195937, -31.725837830201055],
                      [-72.83004638017965, -31.724086355358427],
                      [-72.82956531131784, -31.72238161534762],
                      [-72.82873919959735, -31.72080817940895],
                      [-72.82838890388385, -31.719159505408083],
                      [-72.82798111060494, -31.717563185060897],
                      [-72.8275441339464, -31.716066049533],
                      [-72.82659328763658, -31.714773863202215],
                      [-72.82599140692638, -31.713383667448475],
                      [-72.82547485811526, -31.712034576305218],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_42",
                    partNumb: 42,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8287259680736, -31.83105106732564],
                      [-72.83002676889541, -31.82765111027],
                      [-72.82996099041318, -31.824110705454874],
                      [-72.83051981178991, -31.82063749863619],
                      [-72.83005772812255, -31.817211908214837],
                      [-72.82977997064073, -31.81390554315154],
                      [-72.8303234889958, -31.81067177949202],
                      [-72.8317825670924, -31.807603853533756],
                      [-72.83131972748365, -31.80438065223874],
                      [-72.83212339176862, -31.8012980501409],
                      [-72.83223657426839, -31.79821436028107],
                      [-72.83135513402712, -31.795168305799063],
                      [-72.83145738950606, -31.792119905430994],
                      [-72.83094859095777, -31.789110813429332],
                      [-72.83096342137047, -31.7861038607088],
                      [-72.83079807265298, -31.78318003788983],
                      [-72.83106036147696, -31.780227818769355],
                      [-72.83093445857796, -31.77732197683802],
                      [-72.83119154445737, -31.77446437800966],
                      [-72.8315836074575, -31.77165099007339],
                      [-72.83107598362974, -31.768918367725888],
                      [-72.83075859928674, -31.766186077055213],
                      [-72.83117645500694, -31.76344753205403],
                      [-72.83124679294612, -31.76074958956057],
                      [-72.83118279246679, -31.758058535842967],
                      [-72.83095075076119, -31.75549503078559],
                      [-72.83051922425665, -31.752946028848385],
                      [-72.83008011297683, -31.750471626781977],
                      [-72.82997655983061, -31.748062392432463],
                      [-72.82935029577445, -31.745763769513957],
                      [-72.8292310934139, -31.74345099432644],
                      [-72.82871619385233, -31.741283741280252],
                      [-72.82861696558498, -31.7390789419516],
                      [-72.82899845312198, -31.736931611618026],
                      [-72.82860046575867, -31.73493348380915],
                      [-72.82810266258058, -31.732959482639814],
                      [-72.82757842980413, -31.731039255482248],
                      [-72.82706006918966, -31.729155593457104],
                      [-72.82683942307109, -31.727284380289035],
                      [-72.82648078590192, -31.725496963750683],
                      [-72.8261668991, -31.723732707201844],
                      [-72.82542556232445, -31.72212607225953],
                      [-72.82463528111458, -31.720599184573796],
                      [-72.82368630109275, -31.719177968536226],
                      [-72.82329642476427, -31.717610424927123],
                      [-72.82276269697529, -31.71614394583547],
                      [-72.82205576703227, -31.714759906244705],
                      [-72.82140624160824, -31.713434031756268],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_43",
                    partNumb: 43,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.82872574359011, -31.835560059338125],
                      [-72.82916189642721, -31.831972569665272],
                      [-72.82921886270154, -31.828450457829497],
                      [-72.82980028437778, -31.825027293422075],
                      [-72.83053315551058, -31.821649436160232],
                      [-72.8313236012762, -31.818304751595093],
                      [-72.83083342209893, -31.81493968668942],
                      [-72.83151229237274, -31.81165022838771],
                      [-72.83219474016786, -31.808481031713328],
                      [-72.83228264657546, -31.805284162890533],
                      [-72.83237414481334, -31.802101957991916],
                      [-72.83301768249873, -31.798996144109577],
                      [-72.83284549054719, -31.79588777402779],
                      [-72.83322635978622, -31.792941228816954],
                      [-72.83339622634188, -31.789953015197217],
                      [-72.83415111265552, -31.787034175492252],
                      [-72.83386619616553, -31.784132511461433],
                      [-72.8345188436136, -31.78129648091557],
                      [-72.8348144398727, -31.77844963714739],
                      [-72.83489439626324, -31.775642375944358],
                      [-72.83436918175424, -31.772845517320345],
                      [-72.8338691159985, -31.770074725347435],
                      [-72.8337550417796, -31.767345248627922],
                      [-72.83402658911119, -31.764662063825007],
                      [-72.83396839645096, -31.761980262522894],
                      [-72.83359070152844, -31.75935298494232],
                      [-72.83328185233711, -31.756842101647532],
                      [-72.83336165290501, -31.75435701626028],
                      [-72.83351934336561, -31.75190329131691],
                      [-72.83292613391036, -31.749588357071595],
                      [-72.83234154866327, -31.747314465643388],
                      [-72.8317308629317, -31.745127209925663],
                      [-72.83101389596567, -31.742977379560518],
                      [-72.83087731726634, -31.74082006796426],
                      [-72.83047558781287, -31.738769703640894],
                      [-72.82976003628275, -31.736818135853802],
                      [-72.8288442054245, -31.734961729030474],
                      [-72.82863903656553, -31.733008213208954],
                      [-72.82831778798095, -31.73111292269098],
                      [-72.8274563453354, -31.729447222782778],
                      [-72.82685646252857, -31.7277028370459],
                      [-72.82637819088008, -31.725990548403605],
                      [-72.82542406506681, -31.724490387908194],
                      [-72.82465413792136, -31.722940554143666],
                      [-72.82390257603603, -31.721479537148493],
                      [-72.82283533970326, -31.720174906684285],
                      [-72.82204619781939, -31.71879406594919],
                      [-72.82104228148138, -31.71755273639478],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_44",
                    partNumb: 44,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -31.837814637921657],
                      [-72.83358364656198, -31.834208186441273],
                      [-72.83443151714647, -31.830806590763718],
                      [-72.83473671818916, -31.827311831546613],
                      [-72.83528505287384, -31.8239826716378],
                      [-72.83559369374626, -31.82058107186656],
                      [-72.83595705873351, -31.81730103223507],
                      [-72.8367115334955, -31.814130826011894],
                      [-72.83781334322616, -31.810998970453245],
                      [-72.83776670772548, -31.80779740760015],
                      [-72.83771845431905, -31.804674586599536],
                      [-72.83773559551531, -31.801555460345835],
                      [-72.83777295873452, -31.79845843345743],
                      [-72.83783090662088, -31.795449921191864],
                      [-72.83795014358671, -31.792441227098088],
                      [-72.83851328645291, -31.78952967448909],
                      [-72.83806098546377, -31.786603392208786],
                      [-72.83767227893777, -31.78372531781165],
                      [-72.83775388364083, -31.78095337103259],
                      [-72.83740398568742, -31.77813400996709],
                      [-72.8376953755333, -31.775345853452166],
                      [-72.83815591134845, -31.772588704010147],
                      [-72.83765924787421, -31.769893139878082],
                      [-72.83747125502224, -31.767188840223227],
                      [-72.83735695932906, -31.764506536846984],
                      [-72.83696387737763, -31.761933669816653],
                      [-72.83736647764168, -31.759408936477453],
                      [-72.8369392662234, -31.756968355610226],
                      [-72.83628614118827, -31.75465428994656],
                      [-72.83612102399222, -31.752361073238358],
                      [-72.83590818266605, -31.750062370371083],
                      [-72.8351521257926, -31.747925987275366],
                      [-72.83446817677618, -31.74578828527538],
                      [-72.83426981102414, -31.74367998191388],
                      [-72.83382851284686, -31.741614427907766],
                      [-72.83353359850648, -31.73961721866285],
                      [-72.83302255762938, -31.737673612684606],
                      [-72.83220670599377, -31.735840002360046],
                      [-72.8315073086967, -31.73399666648353],
                      [-72.83081169034031, -31.732279346187056],
                      [-72.83005183148143, -31.730573299926064],
                      [-72.8293274381665, -31.728926335451906],
                      [-72.8286828630851, -31.72727120751326],
                      [-72.82789411155665, -31.72571193183421],
                      [-72.82723338223222, -31.72415743609223],
                      [-72.82649174221366, -31.722712184737954],
                      [-72.8255053621415, -31.72141952942868],
                      [-72.82498294007777, -31.719967687151097],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_45",
                    partNumb: 45,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83787425640992, -31.835560059338125],
                      [-72.83781798159903, -31.832010575634936],
                      [-72.83874762926744, -31.828541938270817],
                      [-72.8392641419056, -31.825102166882125],
                      [-72.83925616016226, -31.821730283065488],
                      [-72.83915890829245, -31.81840169235377],
                      [-72.83960066174562, -31.815101906392314],
                      [-72.84072928674678, -31.81199019424057],
                      [-72.84132730018086, -31.808816149807654],
                      [-72.84213783746064, -31.805720408880575],
                      [-72.84264632699123, -31.802709438207867],
                      [-72.8423397929811, -31.799640034013038],
                      [-72.84281990547603, -31.796629547356975],
                      [-72.84320778352212, -31.79367029079348],
                      [-72.84287133299209, -31.790759581195854],
                      [-72.84340710124269, -31.787865113727932],
                      [-72.84392705748591, -31.785049072536406],
                      [-72.84369365025283, -31.782251337476794],
                      [-72.84342946075529, -31.77945047107525],
                      [-72.84318031368406, -31.77672479460455],
                      [-72.84325884276555, -31.774069031175273],
                      [-72.84358591736112, -31.77140260004911],
                      [-72.84311668061176, -31.768756679125325],
                      [-72.84278968946005, -31.76614862082249],
                      [-72.84273076473042, -31.76360606840805],
                      [-72.84217204299364, -31.761129984019338],
                      [-72.84174626090935, -31.75867646403854],
                      [-72.8414406291683, -31.756261767585023],
                      [-72.84085445600681, -31.75394573718784],
                      [-72.8405854191853, -31.75163422544839],
                      [-72.84059833069595, -31.74943117868457],
                      [-72.84035929935125, -31.747262855335805],
                      [-72.84031378221934, -31.745123241968443],
                      [-72.84009532096935, -31.743011023982902],
                      [-72.83995989650636, -31.740950827283683],
                      [-72.8393258070099, -31.73903001299797],
                      [-72.8391729877831, -31.737043893488174],
                      [-72.83882361316573, -31.735136552452737],
                      [-72.83791946592734, -31.733410127246668],
                      [-72.83730604221898, -31.73166096211002],
                      [-72.83666082779378, -31.72999102522976],
                      [-72.83651248863555, -31.728232209896518],
                      [-72.83577224971292, -31.726683618856367],
                      [-72.8354135446811, -31.725050143416627],
                      [-72.83446832605533, -31.72364521815157],
                      [-72.83335755392923, -31.722378918520832],
                      [-72.8325272796772, -31.721047360523457],
                      [-72.8316445644616, -31.71974859666706],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_46",
                    partNumb: 46,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83787403192642, -31.83105106732564],
                      [-72.8385878567041, -31.82764953930491],
                      [-72.83891984349907, -31.824158341603965],
                      [-72.83959730445343, -31.820782852697057],
                      [-72.83981312155856, -31.817452042196216],
                      [-72.83984829421571, -31.814152893467774],
                      [-72.84018193017195, -31.810899048268737],
                      [-72.84105216446567, -31.80775212291526],
                      [-72.8411692558987, -31.804576800770906],
                      [-72.84084833922458, -31.80152515462573],
                      [-72.84088248926224, -31.798519618306855],
                      [-72.84090397286091, -31.795487209807018],
                      [-72.84076932815275, -31.79248418117082],
                      [-72.84112925757312, -31.78956067855098],
                      [-72.84087921151306, -31.786649192078812],
                      [-72.84115095666698, -31.78376553339662],
                      [-72.84107972939336, -31.780954418606658],
                      [-72.84129439692211, -31.778159217761885],
                      [-72.84103287238909, -31.775392011424188],
                      [-72.84098042333888, -31.772685041736246],
                      [-72.8411569181209, -31.76998757149015],
                      [-72.84092768788469, -31.76731394467603],
                      [-72.84126899970414, -31.764668168008615],
                      [-72.84149348934729, -31.762043522367247],
                      [-72.8416582892619, -31.759479911683993],
                      [-72.84125625063335, -31.756971053823747],
                      [-72.84022903303413, -31.754643561641124],
                      [-72.84037819838822, -31.752225080387465],
                      [-72.8401191262258, -31.749927513269874],
                      [-72.83963404729931, -31.74773220864191],
                      [-72.83912572377524, -31.74557707269066],
                      [-72.83876477044502, -31.743384256388495],
                      [-72.83859773129555, -31.741228577300024],
                      [-72.83807421550911, -31.739173913180544],
                      [-72.83759858203527, -31.737216112491193],
                      [-72.83718070819351, -31.73526607418453],
                      [-72.83659709464852, -31.733362318448936],
                      [-72.83656400832507, -31.731437745017384],
                      [-72.83605317207213, -31.729621157969355],
                      [-72.83562218689299, -31.727881203588097],
                      [-72.83565321501777, -31.72609142308417],
                      [-72.83522842606882, -31.724393661851007],
                      [-72.83461924619301, -31.722820666180017],
                      [-72.83396140914397, -31.72129949792065],
                      [-72.83344623353622, -31.719809281126544],
                      [-72.83246010895652, -31.718508354495192],
                      [-72.83205810702287, -31.717047117142513],
                      [-72.83157083377358, -31.71565028757241],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_47",
                    partNumb: 47,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -31.828796653881856],
                      [-72.8344108842576, -31.825412928259023],
                      [-72.83561321193785, -31.822072083600204],
                      [-72.83617547017313, -31.8187143188568],
                      [-72.83753381143455, -31.815543268432],
                      [-72.83812568023343, -31.81232655283946],
                      [-72.83858619300275, -31.80911758402726],
                      [-72.83878257009266, -31.80592053580589],
                      [-72.83932850370192, -31.80279173361099],
                      [-72.83889453024855, -31.799689903055803],
                      [-72.83970877281777, -31.79668783060333],
                      [-72.8395788050723, -31.793696557509644],
                      [-72.8403216646936, -31.790760047502115],
                      [-72.84023027915659, -31.78778759889032],
                      [-72.84025597722277, -31.78484931837099],
                      [-72.8398601086693, -31.781998185914144],
                      [-72.83991830079626, -31.779167390498436],
                      [-72.84010916323464, -31.776349670934934],
                      [-72.84003338818877, -31.773570650973493],
                      [-72.84042162098729, -31.77081950235813],
                      [-72.84024909517439, -31.768130793981463],
                      [-72.84044202147004, -31.765501843500285],
                      [-72.83966872712651, -31.762915785322328],
                      [-72.83980098010602, -31.760337039692335],
                      [-72.83920477531296, -31.75777705862155],
                      [-72.83950269137169, -31.755234382789233],
                      [-72.83915781995526, -31.752782303748003],
                      [-72.83906956868925, -31.750399099562625],
                      [-72.83909541665031, -31.74802579344409],
                      [-72.83944299389339, -31.74571906790816],
                      [-72.839332317876, -31.743476735520463],
                      [-72.83863548319184, -31.741340748444784],
                      [-72.83866128134463, -31.739216724218085],
                      [-72.83822186722723, -31.73716003564711],
                      [-72.83841251211632, -31.735094461017916],
                      [-72.83814282699171, -31.7331156661463],
                      [-72.83808264744604, -31.73114811089511],
                      [-72.8377790367528, -31.7292735206039],
                      [-72.83743636675528, -31.727454000970095],
                      [-72.8367411262105, -31.725780387805518],
                      [-72.83648665909216, -31.72405291048075],
                      [-72.83591589578234, -31.7224084739685],
                      [-72.83550261685657, -31.720817848896505],
                      [-72.83515444470818, -31.719260495728452],
                      [-72.83497951833007, -31.717698230941746],
                      [-72.83425354971156, -31.716323956693444],
                      [-72.83360853540027, -31.71496229362975],
                      [-72.83309677205507, -31.71361197238975],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T13_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_48",
                    partNumb: 48,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8333, -31.83330564440415],
                      [-72.83404660625824, -31.829844687804812],
                      [-72.8340167841338, -31.826377984286644],
                      [-72.83444070855377, -31.823027594635416],
                      [-72.83466758437531, -31.81973649002812],
                      [-72.835327123992, -31.816431504562775],
                      [-72.83619594472034, -31.81323000377309],
                      [-72.83694745707447, -31.810100989724088],
                      [-72.83690328531516, -31.806913752142048],
                      [-72.83655467859015, -31.80379628719565],
                      [-72.8369340654235, -31.800719726892744],
                      [-72.83729491789963, -31.797691381107754],
                      [-72.83644872025592, -31.794720162022656],
                      [-72.83683846965886, -31.79180306163879],
                      [-72.83659302061362, -31.78889733829743],
                      [-72.83687522920044, -31.78595081971947],
                      [-72.83757786774305, -31.78308854670264],
                      [-72.83678326250823, -31.780284570998383],
                      [-72.83696838506506, -31.777475621825808],
                      [-72.83730724016598, -31.774714338909707],
                      [-72.8373090199565, -31.771997117170123],
                      [-72.83756460032048, -31.76930333460433],
                      [-72.83806050239447, -31.766644710311688],
                      [-72.83790546340046, -31.76397546709845],
                      [-72.8380732143896, -31.761407973670302],
                      [-72.83815053718565, -31.758884376643287],
                      [-72.83810133907235, -31.75643293303526],
                      [-72.83788979515148, -31.754028744917438],
                      [-72.83718200826424, -31.751762637333602],
                      [-72.83640364707647, -31.749584828009606],
                      [-72.8365297853175, -31.747333404635874],
                      [-72.83600624600024, -31.74519366207577],
                      [-72.83517134810475, -31.743173086587127],
                      [-72.8346633676291, -31.741112141547926],
                      [-72.83425011742733, -31.73910198990644],
                      [-72.8338263089488, -31.737145731559743],
                      [-72.83341888235262, -31.735248050389206],
                      [-72.83264986195194, -31.733482110161184],
                      [-72.83183408848828, -31.731747793880135],
                      [-72.83125091090938, -31.729996334866634],
                      [-72.83070043986484, -31.72831602731353],
                      [-72.82950272772828, -31.726906032438993],
                      [-72.82879430510839, -31.725345227771456],
                      [-72.82805890515624, -31.72383675828612],
                      [-72.82705511105613, -31.722478537391684],
                      [-72.82593392783994, -31.721229588550425],
                      [-72.82522929628051, -31.719850106016146],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_49",
                    partNumb: 49,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -31.828796653881856],
                      [-72.83350228929906, -31.82528472060348],
                      [-72.83345015229676, -31.821832431191076],
                      [-72.83438995698603, -31.818492224711083],
                      [-72.83481223433115, -31.815166918084316],
                      [-72.83525754754652, -31.811870558440514],
                      [-72.83567735810257, -31.808660359845145],
                      [-72.83526525013649, -31.80547563325415],
                      [-72.83498130791902, -31.80230434993644],
                      [-72.8352637821176, -31.79919166490696],
                      [-72.8355487469056, -31.796100218041836],
                      [-72.83527395698165, -31.793041056666652],
                      [-72.83578796474971, -31.79005056561954],
                      [-72.8358759727361, -31.787056906409173],
                      [-72.83575853473428, -31.784107147108028],
                      [-72.8360691195428, -31.78121949483247],
                      [-72.83646130847158, -31.778400253540568],
                      [-72.83597265700298, -31.77558317454838],
                      [-72.83535478633563, -31.772803442398825],
                      [-72.83594828916682, -31.77004720786369],
                      [-72.8359129363383, -31.767307267140826],
                      [-72.83610612932355, -31.76458658777432],
                      [-72.83589849419504, -31.761910432662287],
                      [-72.83589709878694, -31.7592859098637],
                      [-72.8362784796691, -31.75672478783179],
                      [-72.83618538977385, -31.754277922828717],
                      [-72.8361816017349, -31.75185617973679],
                      [-72.83628180086374, -31.74947535550887],
                      [-72.83622945904726, -31.74718583553974],
                      [-72.8360679330041, -31.744923119435793],
                      [-72.8352248199812, -31.742785176913795],
                      [-72.8354138548582, -31.740603261797435],
                      [-72.83544559067505, -31.73846747938659],
                      [-72.83494929608266, -31.736466564473126],
                      [-72.83462140638926, -31.734469886466595],
                      [-72.83446962244143, -31.732503928518007],
                      [-72.83403095963911, -31.730660678724018],
                      [-72.83346282983034, -31.728884433810286],
                      [-72.83268464762557, -31.72718335428811],
                      [-72.83257566811228, -31.725392622913667],
                      [-72.83187265863636, -31.723750229262084],
                      [-72.83108814530446, -31.72219682043308],
                      [-72.83059638416054, -31.72061675916421],
                      [-72.83013392855632, -31.719108791168278],
                      [-72.82992088722375, -31.7175604505387],
                      [-72.82929153410838, -31.71615582316448],
                      [-72.82876815896508, -31.714792701232426],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_50",
                    partNumb: 50,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8287259680736, -31.83105106732564],
                      [-72.82965026905703, -31.827548534461684],
                      [-72.8300227999017, -31.82409776994369],
                      [-72.83078039389136, -31.82071638154049],
                      [-72.8318070875323, -31.817400581578188],
                      [-72.83172297080645, -31.814080224841355],
                      [-72.83208926436592, -31.81078560003424],
                      [-72.83217269081536, -31.80758007609065],
                      [-72.83202236446564, -31.804380465117813],
                      [-72.83262522083407, -31.801303667096104],
                      [-72.8327622528277, -31.798151796298182],
                      [-72.83237509909443, -31.795084246975097],
                      [-72.83248132634074, -31.79204056942467],
                      [-72.83210666741222, -31.789066123833113],
                      [-72.83175586816, -31.78609449781701],
                      [-72.83226791793652, -31.783158236649864],
                      [-72.83163984911943, -31.78025804297143],
                      [-72.83167986983763, -31.77739549735115],
                      [-72.83158932908272, -31.774632411182022],
                      [-72.83187598657952, -31.771851437705955],
                      [-72.83214409778734, -31.76908234520138],
                      [-72.83156836023446, -31.76634189487491],
                      [-72.83145832409879, -31.763689122717583],
                      [-72.83142068103648, -31.76097579483495],
                      [-72.83110476433407, -31.75835702909555],
                      [-72.83100875590885, -31.755782303400924],
                      [-72.8306592328148, -31.753312362510908],
                      [-72.82974800384515, -31.75098005950891],
                      [-72.8295476945695, -31.74860261878488],
                      [-72.82928138439918, -31.7463074400201],
                      [-72.82850885235811, -31.74412720821491],
                      [-72.82824512059575, -31.741931446912695],
                      [-72.82793731908829, -31.739812083033645],
                      [-72.82737381095532, -31.73776777603786],
                      [-72.8273889002809, -31.73568987245748],
                      [-72.82683879832305, -31.733741363041247],
                      [-72.82639609178005, -31.73180861754521],
                      [-72.8256296514415, -31.730015106597186],
                      [-72.82527700407539, -31.728163445940222],
                      [-72.8244925628749, -31.726476753005556],
                      [-72.82381729172305, -31.724813398039778],
                      [-72.82315333506702, -31.723209698981567],
                      [-72.82264674902531, -31.721592413651845],
                      [-72.82202799561674, -31.720056942739646],
                      [-72.8210397829769, -31.718729035082074],
                      [-72.82022838256896, -31.71737276698737],
                      [-72.81970019691497, -31.71594209366476],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_51",
                    partNumb: 51,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.82872574359011, -31.835560059338125],
                      [-72.82948119734982, -31.831996276371697],
                      [-72.82972766246108, -31.82843147602067],
                      [-72.83083137501363, -31.825081990227876],
                      [-72.83121868622928, -31.821695755063402],
                      [-72.83094962304344, -31.818304523127388],
                      [-72.83118682619791, -31.814997724165735],
                      [-72.83097171925766, -31.81167703533269],
                      [-72.83100153520438, -31.80842036926799],
                      [-72.83132397241764, -31.805233927362455],
                      [-72.83202423760794, -31.8021035490825],
                      [-72.83234086106815, -31.7989939287314],
                      [-72.83239018609119, -31.79599336639765],
                      [-72.83294352328, -31.79294950351736],
                      [-72.83252239757763, -31.789996013378197],
                      [-72.8329850492383, -31.787045501397973],
                      [-72.83262518692574, -31.78410619317573],
                      [-72.8325857232509, -31.78118282747708],
                      [-72.83300861140131, -31.778323419906737],
                      [-72.83286720965481, -31.775497793914273],
                      [-72.83321308721187, -31.772683792973055],
                      [-72.83299001971874, -31.769890874451455],
                      [-72.83283347976815, -31.767126209347747],
                      [-72.83297708061541, -31.764415882038303],
                      [-72.83292156985594, -31.761750380065568],
                      [-72.83260533086106, -31.7592265382681],
                      [-72.83222740893346, -31.756728479290143],
                      [-72.83231254031311, -31.754278831551954],
                      [-72.83170455935114, -31.7519460275552],
                      [-72.83124882667308, -31.749667945851392],
                      [-72.8306993833393, -31.747442506656625],
                      [-72.82992076068827, -31.74532908324738],
                      [-72.82913485941171, -31.74324745850913],
                      [-72.82848640875444, -31.74123935702867],
                      [-72.82781911935416, -31.739225877221095],
                      [-72.82766962214433, -31.737225734390016],
                      [-72.82697974194645, -31.73532750005304],
                      [-72.82663230114366, -31.73342305501559],
                      [-72.82610513971686, -31.731622744439832],
                      [-72.82500883268432, -31.730063453026425],
                      [-72.82427026982157, -31.728426599009715],
                      [-72.82348661989388, -31.726811590372673],
                      [-72.82268206606011, -31.725290065632393],
                      [-72.82197147480407, -31.723756715057323],
                      [-72.82100877858007, -31.722350082673202],
                      [-72.82024945632084, -31.720907671884525],
                      [-72.8197001424909, -31.719423043124316],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_52",
                    partNumb: 52,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -31.837814637921657],
                      [-72.83409542531501, -31.834377592318383],
                      [-72.83416780722341, -31.830835411003125],
                      [-72.83437993403162, -31.82738201911564],
                      [-72.83497101218009, -31.823979950175172],
                      [-72.83553659683442, -31.820627138290913],
                      [-72.83544803672608, -31.817331690203787],
                      [-72.835177260774, -31.814060150613393],
                      [-72.8351077660912, -31.810868938230147],
                      [-72.83555454900059, -31.807678710406424],
                      [-72.83567478705113, -31.804592279121156],
                      [-72.83634668747098, -31.801511561610234],
                      [-72.83643874565992, -31.798432399556376],
                      [-72.83628693196945, -31.795454172586993],
                      [-72.83664225246972, -31.792481223996436],
                      [-72.83653548474852, -31.78954568865093],
                      [-72.83714245967758, -31.786643011052647],
                      [-72.83714338144415, -31.78374030294498],
                      [-72.83709587950379, -31.780879695024247],
                      [-72.83760530642401, -31.778112804464847],
                      [-72.83723867029879, -31.775384224635058],
                      [-72.83717091581784, -31.772620597129325],
                      [-72.83653184744693, -31.76993858380065],
                      [-72.8364349716349, -31.76721470287281],
                      [-72.83613388892475, -31.764563895285665],
                      [-72.8362907882681, -31.762053136470364],
                      [-72.83585499446406, -31.759577286932497],
                      [-72.83589888901935, -31.75713032805497],
                      [-72.83594932031775, -31.75474167724855],
                      [-72.83529044444168, -31.752521643270374],
                      [-72.8352073288424, -31.750242983604423],
                      [-72.83445377285227, -31.748106514392337],
                      [-72.83416078929457, -31.74594663880401],
                      [-72.83385968700713, -31.743824634698466],
                      [-72.83348666766527, -31.741834193287623],
                      [-72.83344532337387, -31.739783927005018],
                      [-72.83274910900055, -31.737917129961126],
                      [-72.83185941052243, -31.736136428048507],
                      [-72.83102928756048, -31.734392933433465],
                      [-72.83025630665547, -31.732711993546687],
                      [-72.8294881981213, -31.73102442486282],
                      [-72.8285954527945, -31.729462244623],
                      [-72.82757288484433, -31.727985892194035],
                      [-72.82655770970094, -31.726556608342587],
                      [-72.82605066272009, -31.72500508704091],
                      [-72.82506096803009, -31.72368185565058],
                      [-72.82453040179118, -31.722221077901843],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_53",
                    partNumb: 53,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83787425640992, -31.835560059338125],
                      [-72.83804857302385, -31.83202859179904],
                      [-72.83830608435962, -31.82853151180671],
                      [-72.83951605204588, -31.82522871582781],
                      [-72.83998938846305, -31.821890939975493],
                      [-72.84024261383468, -31.818647542814368],
                      [-72.84035286934692, -31.815391638494685],
                      [-72.84141893123731, -31.81226691276057],
                      [-72.84194820407231, -31.80911722438065],
                      [-72.84253492154852, -31.80604526965087],
                      [-72.84323335476253, -31.803055189442695],
                      [-72.8433540315766, -31.800019171798205],
                      [-72.84342769068094, -31.79702638826834],
                      [-72.84384771236026, -31.794069601686033],
                      [-72.84360444419384, -31.7911809913086],
                      [-72.84320637881775, -31.788325384010456],
                      [-72.8433642818469, -31.785532906148454],
                      [-72.84358008724048, -31.78269182519111],
                      [-72.84341777656374, -31.779907366554095],
                      [-72.84296020086535, -31.77716620772669],
                      [-72.84267378246112, -31.77446489124198],
                      [-72.84328377243754, -31.771853684919733],
                      [-72.84308092734783, -31.769221873259333],
                      [-72.84289143273722, -31.766604674671303],
                      [-72.84288669591781, -31.764037722882254],
                      [-72.84294232086509, -31.761547658588043],
                      [-72.84247567398175, -31.75914551104207],
                      [-72.84232991258877, -31.756790033552168],
                      [-72.84182882550738, -31.754532577180807],
                      [-72.84132850623088, -31.75233240961045],
                      [-72.8404878212712, -31.750242646021366],
                      [-72.83994038103097, -31.748120978132803],
                      [-72.84003373862036, -31.745973195696568],
                      [-72.83969692158036, -31.74389506453405],
                      [-72.83959824157061, -31.741860363169142],
                      [-72.83864332113585, -31.7400332624974],
                      [-72.83833778227319, -31.738101262038132],
                      [-72.83765747897856, -31.736307179508955],
                      [-72.8367697982709, -31.734603772991584],
                      [-72.83628885939909, -31.732843186560466],
                      [-72.8353796246374, -31.731299586294696],
                      [-72.83463015341214, -31.729695962231272],
                      [-72.83426890374001, -31.72802814987895],
                      [-72.8335210882699, -31.726505768668588],
                      [-72.83297695380934, -31.724969345641338],
                      [-72.83190527800943, -31.723674393776818],
                      [-72.83149799140881, -31.722163314976623],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_54",
                    partNumb: 54,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83787403192642, -31.83105106732564],
                      [-72.83863683110984, -31.827602670875958],
                      [-72.83827849782023, -31.824130698709418],
                      [-72.83925774445699, -31.820811682724933],
                      [-72.83923505819524, -31.817481428052176],
                      [-72.83979942896426, -31.814325498022633],
                      [-72.83999093104555, -31.81111074735787],
                      [-72.84102959634491, -31.808082616240366],
                      [-72.84067505932654, -31.80493453944332],
                      [-72.8415064316049, -31.80193446025203],
                      [-72.84123341451865, -31.798865154009775],
                      [-72.84103582761959, -31.795814991723773],
                      [-72.84060132890691, -31.79284400461123],
                      [-72.8415277820319, -31.789973953014293],
                      [-72.84099733207458, -31.7870991542162],
                      [-72.84117323119969, -31.784299211596476],
                      [-72.84115265173519, -31.78149698734896],
                      [-72.84047861898436, -31.778730098846765],
                      [-72.84043684445449, -31.7759944429902],
                      [-72.84083192586353, -31.773263348394433],
                      [-72.84064397074427, -31.770524780869952],
                      [-72.84108649382513, -31.767848188900327],
                      [-72.84155114528154, -31.765209697831555],
                      [-72.84116471334778, -31.76270084009488],
                      [-72.84114849037014, -31.760213376885943],
                      [-72.8412141730685, -31.757730938330717],
                      [-72.84071906612245, -31.75535004441397],
                      [-72.84027674837974, -31.75302540125],
                      [-72.83999815587329, -31.750772489050618],
                      [-72.84002879286412, -31.74854499465497],
                      [-72.8398691701571, -31.746383023325198],
                      [-72.83977130373984, -31.74423163626092],
                      [-72.83954816746702, -31.742161820722675],
                      [-72.83911595841752, -31.740165465885195],
                      [-72.83912857062033, -31.73814204220478],
                      [-72.83858582631703, -31.736288676217292],
                      [-72.83763046939364, -31.734526716216582],
                      [-72.83693798131706, -31.73276344082541],
                      [-72.83600995672056, -31.731088182898514],
                      [-72.83563065407017, -31.72935311930166],
                      [-72.83504683659979, -31.72771704530712],
                      [-72.83449474689361, -31.726085455016143],
                      [-72.83358269383527, -31.72464456329869],
                      [-72.83296477762471, -31.723108967359547],
                      [-72.83210911161905, -31.721741647933463],
                      [-72.83126799191623, -31.720415563734697],
                      [-72.83079507407669, -31.71899616220166],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_55",
                    partNumb: 55,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -31.828796653881856],
                      [-72.83397018967521, -31.825392633551267],
                      [-72.83463746501573, -31.822010046536132],
                      [-72.83541147955691, -31.81871032878482],
                      [-72.83550376269434, -31.81533472976655],
                      [-72.83567956009423, -31.812034069470222],
                      [-72.83592918865169, -31.808766066215775],
                      [-72.83679165404958, -31.805632761927793],
                      [-72.83686833765343, -31.802517157543345],
                      [-72.8370125782229, -31.799429943998113],
                      [-72.83766559945576, -31.796376420641533],
                      [-72.83785650192308, -31.79342528053683],
                      [-72.83760488039027, -31.79046644643652],
                      [-72.83760170029527, -31.78751384040143],
                      [-72.83786864088518, -31.784610775158278],
                      [-72.83780427135117, -31.781762452323527],
                      [-72.8371809497735, -31.778935565896262],
                      [-72.8369107595519, -31.776208702835163],
                      [-72.8365053342266, -31.773423536954642],
                      [-72.83623777485869, -31.770647353486652],
                      [-72.83606665904733, -31.76793502621651],
                      [-72.83621006170077, -31.76524532673878],
                      [-72.8357419230256, -31.762590205754595],
                      [-72.83559785797489, -31.759970124427372],
                      [-72.83524068417869, -31.757385365345023],
                      [-72.8349720003092, -31.754879623439194],
                      [-72.83404779517241, -31.752517925202795],
                      [-72.83376366159456, -31.750121753489697],
                      [-72.83334057889218, -31.747850186048854],
                      [-72.8329556890551, -31.7455807110753],
                      [-72.83230450355558, -31.74341542832945],
                      [-72.83238006614542, -31.741223230851894],
                      [-72.8317716152591, -31.73914119169131],
                      [-72.83150553541024, -31.73703871186808],
                      [-72.83104376091745, -31.73508612943682],
                      [-72.83096171384783, -31.73307837797557],
                      [-72.83059684662726, -31.73117839669212],
                      [-72.82982549745297, -31.72941876922501],
                      [-72.82872929623339, -31.72780927258127],
                      [-72.82829000834303, -31.72607112234956],
                      [-72.82746042344164, -31.724456484256272],
                      [-72.82656890994203, -31.722935310389452],
                      [-72.8257446451866, -31.72143316129848],
                      [-72.8251771695006, -31.719896896695097],
                      [-72.82414248634738, -31.718599864158836],
                      [-72.82355921335248, -31.717145420036378],
                      [-72.82301549503495, -31.71575860256194],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T14_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_56",
                    partNumb: 56,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8333, -31.83330564440415],
                      [-72.83398379547852, -31.829830711128846],
                      [-72.83386883351068, -31.82633259474469],
                      [-72.8344789951359, -31.822957140727716],
                      [-72.8351638130861, -31.819607122535444],
                      [-72.83516331267295, -31.816275280792166],
                      [-72.83543392609344, -31.813049168541294],
                      [-72.8361385898916, -31.809843551226635],
                      [-72.83629518217536, -31.8067018672012],
                      [-72.8362451940685, -31.803607184178727],
                      [-72.83628889904156, -31.800563506925787],
                      [-72.83685860186604, -31.797576151122446],
                      [-72.83605209524822, -31.79459545418456],
                      [-72.83601163093896, -31.79160974526732],
                      [-72.8362732420225, -31.78868450607792],
                      [-72.8363170897246, -31.785792469446406],
                      [-72.83587465473163, -31.782913681116813],
                      [-72.83639529354367, -31.780105053627793],
                      [-72.83644789654227, -31.777325875388623],
                      [-72.83681649096135, -31.77454477926588],
                      [-72.8364895652898, -31.77184590547203],
                      [-72.83647932925936, -31.76914887634723],
                      [-72.83671275703145, -31.766432824935336],
                      [-72.83625664386526, -31.763801503699764],
                      [-72.83664644905055, -31.761265993123846],
                      [-72.83645928250701, -31.758779495978086],
                      [-72.83590389363795, -31.756403363362466],
                      [-72.83593693111729, -31.75401355749784],
                      [-72.8353560862586, -31.751783766767527],
                      [-72.83520887101929, -31.74952488472577],
                      [-72.83459278374367, -31.747359688855575],
                      [-72.83392738524778, -31.745307570200715],
                      [-72.83360795137519, -31.743206997446155],
                      [-72.8329764582253, -31.74125254656897],
                      [-72.83228077601262, -31.73930336171981],
                      [-72.8315698039803, -31.737439541988092],
                      [-72.83102126445672, -31.73557604750896],
                      [-72.83037664004058, -31.73378174425676],
                      [-72.83005455481275, -31.73197070984762],
                      [-72.82986359780553, -31.730176022982572],
                      [-72.82923819160578, -31.728547076548143],
                      [-72.8288569235033, -31.726872629772583],
                      [-72.82815329830366, -31.725325462466262],
                      [-72.82712741086536, -31.723953012697166],
                      [-72.82628599636807, -31.722578892959294],
                      [-72.82528396471628, -31.721308880948047],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_57",
                    partNumb: 57,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -31.828796653881856],
                      [-72.8345397844752, -31.825454750662587],
                      [-72.83549133041325, -31.82213810479683],
                      [-72.83517274408189, -31.818762252527033],
                      [-72.83480223415366, -31.81542090377809],
                      [-72.83490256831072, -31.812145749240347],
                      [-72.83493503684831, -31.808868782096837],
                      [-72.83522875743196, -31.805653205427433],
                      [-72.83588115304818, -31.80253620132668],
                      [-72.83531900747474, -31.799439438906937],
                      [-72.83622732731502, -31.796442993403197],
                      [-72.83669911336604, -31.79347153722612],
                      [-72.83611759827603, -31.79053906202677],
                      [-72.83597602412407, -31.78756820849048],
                      [-72.83541626374928, -31.784712297996435],
                      [-72.83510554084876, -31.78181010928164],
                      [-72.83545254579735, -31.778960197861775],
                      [-72.83542495144768, -31.776190599228116],
                      [-72.83550200167862, -31.773417931816017],
                      [-72.83495022400473, -31.77066638060099],
                      [-72.83474305917703, -31.767914022780957],
                      [-72.83440551030935, -31.765190475880807],
                      [-72.83447635493337, -31.76250653090986],
                      [-72.83460799368326, -31.759876863456043],
                      [-72.83418605978999, -31.757411126991585],
                      [-72.83423493759172, -31.754944905900377],
                      [-72.8335101816213, -31.752621277197044],
                      [-72.83286721772808, -31.75034590494938],
                      [-72.83257348213905, -31.74802507868492],
                      [-72.83240648273508, -31.74579398820277],
                      [-72.8318769873452, -31.74361783109804],
                      [-72.83163269023112, -31.741471028226353],
                      [-72.83124725124257, -31.73943831030122],
                      [-72.83087956639916, -31.737383003990278],
                      [-72.83025038722012, -31.735471818722296],
                      [-72.82935833694931, -31.733666617009646],
                      [-72.82912253748732, -31.731770740553646],
                      [-72.8286665409465, -31.729951298916742],
                      [-72.82792855605496, -31.728250683599153],
                      [-72.82731112888891, -31.726572387236622],
                      [-72.82692352410376, -31.724897207967004],
                      [-72.82661614992476, -31.723237405814896],
                      [-72.82599436974432, -31.721726600060407],
                      [-72.82485452011431, -31.720462523357213],
                      [-72.82385642762709, -31.71917332446473],
                      [-72.82296925659986, -31.717879736342663],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_58",
                    partNumb: 58,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.8287259680736, -31.83105106732564],
                      [-72.82860244162777, -31.827561147232725],
                      [-72.8297303799124, -31.82419480657147],
                      [-72.8301756797899, -31.820799421933238],
                      [-72.82951959010857, -31.81743500269738],
                      [-72.83043743728636, -31.81423667352111],
                      [-72.83062229028585, -31.811015904370283],
                      [-72.83011957311342, -31.80783048628536],
                      [-72.83086145842361, -31.80464184473101],
                      [-72.83044730048312, -31.80148303007491],
                      [-72.83011185098451, -31.798350490878505],
                      [-72.82978070175191, -31.795271941028535],
                      [-72.83003328306573, -31.792267125233373],
                      [-72.83092718018149, -31.78932228144148],
                      [-72.83117381956859, -31.78631728771091],
                      [-72.83106912740932, -31.78340417172386],
                      [-72.83104856193292, -31.780535828032612],
                      [-72.83093728307051, -31.777725273356303],
                      [-72.83116263678912, -31.774913652174373],
                      [-72.83088528993073, -31.772130753906456],
                      [-72.83001907445383, -31.769424720945747],
                      [-72.82916706099844, -31.76671680366802],
                      [-72.8294091709306, -31.763938403649874],
                      [-72.82910020712467, -31.761280872804488],
                      [-72.82899899964208, -31.758644785833884],
                      [-72.82865649734349, -31.756173803575233],
                      [-72.82801258994958, -31.75375758374321],
                      [-72.82798206839036, -31.751325371359485],
                      [-72.82730660176023, -31.749045906608593],
                      [-72.82662914515164, -31.746857499179207],
                      [-72.8256993730366, -31.74474337524703],
                      [-72.82545863948052, -31.742551131471938],
                      [-72.82483893602884, -31.74048482891849],
                      [-72.82478954589257, -31.738391267379992],
                      [-72.8240461483898, -31.736440058918397],
                      [-72.82347574878914, -31.73455446091229],
                      [-72.8233064433899, -31.732611595449075],
                      [-72.82253766922281, -31.730831827597058],
                      [-72.82184076793494, -31.729106887307157],
                      [-72.82106633259367, -31.72746215765629],
                      [-72.82051133864822, -31.7258047216168],
                      [-72.8195473653497, -31.724346887708965],
                      [-72.8186735707638, -31.722866647197467],
                      [-72.817850905779, -31.721413887046307],
                      [-72.81697961023626, -31.72002605189783],
                      [-72.81630774741076, -31.718591906536858],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_59",
                    partNumb: 59,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.82872574359011, -31.835560059338125],
                      [-72.82859701990036, -31.832015894576994],
                      [-72.82866784583148, -31.828488015440644],
                      [-72.8287746695638, -31.825030366305445],
                      [-72.82911171566815, -31.821587630839176],
                      [-72.82923753816826, -31.818192366125288],
                      [-72.82946243409486, -31.81489649940611],
                      [-72.82956154581532, -31.811611319806904],
                      [-72.82983137544142, -31.80839530421135],
                      [-72.82914020999331, -31.805230895692045],
                      [-72.82905335871288, -31.80202978461844],
                      [-72.82920977198312, -31.79896374876763],
                      [-72.8293600615279, -31.795899052330554],
                      [-72.82865246312956, -31.792885578278526],
                      [-72.82818698983786, -31.789906461272604],
                      [-72.82723145170227, -31.78701076027843],
                      [-72.8267082963248, -31.784042144850638],
                      [-72.82677468051611, -31.781113713640163],
                      [-72.82642212820213, -31.778250085411315],
                      [-72.82628572953448, -31.77543680978545],
                      [-72.8261835340238, -31.77259146003633],
                      [-72.8257067218948, -31.769796383248153],
                      [-72.82612986778942, -31.767020013795623],
                      [-72.82568005463555, -31.764371164725024],
                      [-72.82558721990358, -31.761717022050114],
                      [-72.8250650269723, -31.759136247618137],
                      [-72.82436220758922, -31.756707271685567],
                      [-72.8246453511331, -31.754221109214836],
                      [-72.8242142939228, -31.751831452226355],
                      [-72.82395653395167, -31.74951966517554],
                      [-72.82289270413769, -31.74740212123542],
                      [-72.82230153616784, -31.745211902699],
                      [-72.82151824845268, -31.74315610708844],
                      [-72.82059882467726, -31.741167399402116],
                      [-72.81987637760028, -31.739192199409267],
                      [-72.81934945154214, -31.737211467066132],
                      [-72.81883294296472, -31.735327505237795],
                      [-72.8183130648548, -31.733473751433984],
                      [-72.81733843802814, -31.73180209741469],
                      [-72.8165282757468, -31.73015525017819],
                      [-72.81547694540193, -31.728618510104692],
                      [-72.81449317062234, -31.72708454040738],
                      [-72.81393990419016, -31.725441499824598],
                      [-72.81286071136803, -31.724113255387856],
                      [-72.81179623625783, -31.72276433837308],
                      [-72.81038818752495, -31.72168716006332],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_60",
                    partNumb: 60,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -31.837814637921657],
                      [-72.83385953210492, -31.834258301031355],
                      [-72.83426313195228, -31.830804741001],
                      [-72.83442731844063, -31.827379836158567],
                      [-72.83462572251955, -31.823969781170895],
                      [-72.83540661629003, -31.820648438986293],
                      [-72.83526875348592, -31.817332846704243],
                      [-72.83503885231246, -31.8140844763777],
                      [-72.83582550950327, -31.810940763091065],
                      [-72.83685644076532, -31.807854689924273],
                      [-72.83743408838646, -31.804739421943175],
                      [-72.8379635957077, -31.801662773741768],
                      [-72.83790857527488, -31.79860123170212],
                      [-72.83844147527842, -31.795628167454506],
                      [-72.83855185620064, -31.792707777629573],
                      [-72.83899968862976, -31.78981889400628],
                      [-72.83882779361717, -31.78696706339418],
                      [-72.83884460593255, -31.784105264541648],
                      [-72.83853459241999, -31.781300590628682],
                      [-72.83782513706309, -31.778534437870583],
                      [-72.83766067043369, -31.775777926762302],
                      [-72.83767134965522, -31.773019515150597],
                      [-72.83762002808768, -31.770313275301444],
                      [-72.83747955100542, -31.76770026392365],
                      [-72.83754795678473, -31.765152386455515],
                      [-72.83660997435155, -31.762739223130808],
                      [-72.8367024474565, -31.76027829710429],
                      [-72.83649118154926, -31.757900996633634],
                      [-72.83561476317288, -31.755682746293054],
                      [-72.83467808298894, -31.753550092831016],
                      [-72.83449695138125, -31.751326582093284],
                      [-72.83396045287047, -31.749186289546888],
                      [-72.83324047927724, -31.747120346033103],
                      [-72.83304969341008, -31.74500782767443],
                      [-72.83210215458391, -31.743099701584345],
                      [-72.83106466366706, -31.74129724750033],
                      [-72.83014331051079, -31.739519185353384],
                      [-72.82921133444955, -31.7377587562141],
                      [-72.82851813801175, -31.735977042842457],
                      [-72.8276679657434, -31.734302062781463],
                      [-72.82671382011803, -31.732699352828078],
                      [-72.82535173919702, -31.731365723930605],
                      [-72.8244054355743, -31.72984289689493],
                      [-72.82345360164183, -31.728363675365404],
                      [-72.82205573722985, -31.727211725746702],
                      [-72.82099078650268, -31.725857037971835],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_61",
                    partNumb: 61,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83787425640992, -31.835560059338125],
                      [-72.83795983543845, -31.831984221095684],
                      [-72.8382816401102, -31.828526285320056],
                      [-72.8385290744844, -31.825099756128868],
                      [-72.83865776445613, -31.821742080642796],
                      [-72.8399203506298, -31.81859443641028],
                      [-72.83971389069406, -31.81532837042684],
                      [-72.83984479916239, -31.812160861921853],
                      [-72.83968767709106, -31.808971557489464],
                      [-72.83963028644553, -31.805855380090854],
                      [-72.83975575493345, -31.802755612936984],
                      [-72.84049929424978, -31.799794377794306],
                      [-72.84106710339367, -31.796795466186353],
                      [-72.84167173236497, -31.793916671589482],
                      [-72.84093116736473, -31.791043327113734],
                      [-72.84038213131306, -31.78815389249234],
                      [-72.84082028435188, -31.785305214731782],
                      [-72.8403672290625, -31.782525116497997],
                      [-72.84001937107041, -31.779732664684545],
                      [-72.84072427918125, -31.77700914105292],
                      [-72.84060939833833, -31.77428635378893],
                      [-72.84031862470063, -31.771610191781683],
                      [-72.84014224971743, -31.76897996664345],
                      [-72.8396471335611, -31.766405999668073],
                      [-72.83946798749164, -31.763876183460624],
                      [-72.83926550544636, -31.76142802601573],
                      [-72.8389462039569, -31.759034882931736],
                      [-72.83836076519911, -31.756765926581703],
                      [-72.83821052176629, -31.75443162768763],
                      [-72.83819147056538, -31.75220954335237],
                      [-72.83738591044866, -31.750141741429967],
                      [-72.83689809255837, -31.748038093016206],
                      [-72.83667503292342, -31.745907969532983],
                      [-72.83605299413159, -31.743918334168068],
                      [-72.83534900016474, -31.741956746449297],
                      [-72.83473936008946, -31.740060627961743],
                      [-72.83369137417877, -31.738329720556894],
                      [-72.83270978561374, -31.736611799008507],
                      [-72.83225907881997, -31.73478870981428],
                      [-72.83105618730498, -31.733282018870096],
                      [-72.83018877509353, -31.731673972145128],
                      [-72.82928714262385, -31.73012948697924],
                      [-72.82864414887881, -31.728522867084408],
                      [-72.82769040461336, -31.727121062839338],
                      [-72.82670085439301, -31.725745607383224],
                      [-72.8258332168492, -31.724365468691328],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_62",
                    partNumb: 62,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83787403192642, -31.83105106732564],
                      [-72.83817416178054, -31.82755104950321],
                      [-72.83891121226927, -31.824203099979034],
                      [-72.83953952829562, -31.82088571942155],
                      [-72.83976559439806, -31.81754378537716],
                      [-72.84013383344416, -31.81435295394868],
                      [-72.8400983590892, -31.81111539188973],
                      [-72.84043255333472, -31.807967632877503],
                      [-72.84085069999492, -31.804848543182498],
                      [-72.8407035827049, -31.801866829684823],
                      [-72.84111025540705, -31.798872794713898],
                      [-72.84079844732364, -31.795850007200453],
                      [-72.8406048735216, -31.792888874815937],
                      [-72.84004183616517, -31.790025685405194],
                      [-72.84079205327367, -31.787165878888445],
                      [-72.84100421719852, -31.78429115042244],
                      [-72.84079803284241, -31.781458943212137],
                      [-72.8408593170871, -31.77865143821714],
                      [-72.84052964368698, -31.77592740658481],
                      [-72.84079733187531, -31.77320188950689],
                      [-72.84082705722972, -31.77048737343018],
                      [-72.84110768242054, -31.76783232180847],
                      [-72.84106066339571, -31.765201036427925],
                      [-72.84094579713764, -31.76261639072129],
                      [-72.84114077189213, -31.760089942521514],
                      [-72.84049872768588, -31.757708327962277],
                      [-72.84001031109534, -31.755396700317682],
                      [-72.83999371516225, -31.75307124546041],
                      [-72.84025686254913, -31.75083999103517],
                      [-72.839645808985, -31.74868323837109],
                      [-72.83912083918362, -31.746553098714536],
                      [-72.838660494228, -31.74448363364752],
                      [-72.83760125623715, -31.742593655884345],
                      [-72.83706624824505, -31.74058528674397],
                      [-72.83678032946776, -31.73859627456719],
                      [-72.83596675181403, -31.736784102682023],
                      [-72.83559117557934, -31.73491979006213],
                      [-72.83538659625258, -31.733068164108214],
                      [-72.83524613922515, -31.731251664414234],
                      [-72.83451979768597, -31.729627351520467],
                      [-72.83381431754702, -31.728063658351253],
                      [-72.8330284804977, -31.726525964458663],
                      [-72.8321265320457, -31.725102037477896],
                      [-72.8316018092456, -31.723579047242428],
                      [-72.83099731780744, -31.722101982150466],
                      [-72.83012417261713, -31.720773205228262],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_63",
                    partNumb: 63,
                    timeStep: "00, 01:00",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [-72.83330000000001, -31.828796653881856],
                      [-72.83368334751924, -31.82537402239925],
                      [-72.83407236896579, -31.821985463654762],
                      [-72.83487235658652, -31.818702812962712],
                      [-72.83466786492305, -31.815422111148116],
                      [-72.8354572834025, -31.812190211059473],
                      [-72.83612269540559, -31.80905898134759],
                      [-72.83579714358355, -31.805843550408287],
                      [-72.83617090717837, -31.802717964059106],
                      [-72.83578066915464, -31.799602954987723],
                      [-72.83614117871969, -31.79659456216574],
                      [-72.83609033763885, -31.793561214186685],
                      [-72.83556542602645, -31.790646427303436],
                      [-72.83554047472762, -31.78766373139961],
                      [-72.83533011695246, -31.784720743500795],
                      [-72.8358402248198, -31.781864462475923],
                      [-72.83601115636068, -31.77901930737457],
                      [-72.83595441115074, -31.776213611523698],
                      [-72.83640424734882, -31.773484011387662],
                      [-72.83703044474005, -31.7707397231265],
                      [-72.8372061988488, -31.76801681254596],
                      [-72.83660959661837, -31.76538110769281],
                      [-72.83588000478869, -31.762775645291157],
                      [-72.83583412368365, -31.760199319024405],
                      [-72.83524167408366, -31.757720998660947],
                      [-72.83430334805583, -31.755363667526368],
                      [-72.8338562041274, -31.75295243801368],
                      [-72.83384610313072, -31.75058558886339],
                      [-72.83326248200214, -31.74836500625602],
                      [-72.83368577967612, -31.746104058789072],
                      [-72.8336773428296, -31.74389654393183],
                      [-72.83324130472191, -31.74180206194546],
                      [-72.83334160155388, -31.73967914959429],
                      [-72.83281115852779, -31.737706409582675],
                      [-72.83260684012416, -31.735712497659936],
                      [-72.83187536647944, -31.73387466298783],
                      [-72.83125721713806, -31.732026130889984],
                      [-72.83076828155606, -31.730196747240843],
                      [-72.83012323726436, -31.728473232435466],
                      [-72.82955614199425, -31.72677385923108],
                      [-72.82882241170049, -31.72522984713417],
                      [-72.82808347233939, -31.723699456437902],
                      [-72.82733306118685, -31.72221276380381],
                      [-72.82670927067794, -31.720723232607057],
                      [-72.82582795937755, -31.719381822363424],
                      [-72.82493567062482, -31.718093060225904],
                    ],
                    when: {
                      timespans: [
                        {
                          start: "2023-Aug-12T15_00Z",
                          end: "2023-Aug-14T12_00Z",
                        },
                      ],
                    },
                  },
                  properties: {
                    name: "COPd_direct_64",
                    partNumb: 64,
                    timeStep: "00, 01:00",
                  },
                },
              ],
            },
          };
          
          // const opti = parseJsonToGeoJson(data)
          // const newdata = JSON.stringify(opti,null, 2)
          // console.log(newdata)
                   

   

        useEffect(() => {
        
            const coordinates = document.getElementById('coordinates');

            if (map.current) return; // initialize map only once
                map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [lng, lat],
                zoom: zoom
            });
            
            map.current.on('load', () => {
                map.current.addLayer({
                    id: 'data',
                    type: 'circle',
                    source: {
                      type: 'geojson',
                      data: prueba2 // replace this with the url of your own geojson
                    }
                  });
                  
                  document
                  .getElementById("slider")
                  .addEventListener("input", function (e) {
                    const hour = parseInt(e.target.value);
                    // update the map
                    map.current.setFilter("data", [
                      "==",
                      ["number", ["get", "Hour"]],
                      hour
                    ]);
        
                    // converting 0-23 hour to AMPM format
                    var ampm = hour >= 12 ? "PM" : "AM";
                    var hour12 = hour % 12 ? hour % 12 : 12;
        
                    // update text in the UI
                    document.getElementById("active-hour").innerText = hour12 + ampm;
                  });
                 
                });
               
         
            map.current.on('move', () => {
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
                        type: 'Point',
                        coordinates: [lng, lat]
                    },
                    place_name: 'Lat: ' + lat + ' Lng: ' + lng,
                    place_type: ['coordinate'],
                    properties: {},
                    type: 'Feature'
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
                placeholder: 'Try: -40, 170',
                mapboxgl: mapboxgl,
                reverseGeocode: true
                })
            );




            const marker = new mapboxgl.Marker({
                draggable: true
                })
                .setLngLat([-71.5956, -33.0247])
                .addTo(map.current);
                 

                function onDragEnd() {
                    const lngLat = marker.getLngLat();
                        coordinates.innerHTML = `Latitude: ${lngLat.lat}<br /> Longitude: ${lngLat.lng}`;
                    }
                 
                marker.on('dragend', onDragEnd)





            

           
                       
        },[]);



  return (
    <>
    <div>
        <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        <div className="text-black " id="coordinates"></div>
        </div>
        <div ref={mapContainer} className="map-container" style={{ height: "45rem", width:'110em' }}>

        </div>
        <div id='console'>
      <div className="session" id="sliderbar">
          <h2>Hour: <label id="active-hour">12PM</label></h2>
          <input
            id="slider"
            className="row"
            type="range"
            min="0"
            max="23"
            step="1"
            value={range}
            onChange={e=>setRange(e.target.value)}
          />
        </div>
      </div>
    </div>
    

    </>
   
  )
}

export default Mapboox