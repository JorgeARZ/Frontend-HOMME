import {  useState } from "react";
import useHydrodynamic from "../hooks/useHidrodinamyc";
import axiosRequest from "../config/axiosRequest";
import { parseJsonToGeoJson } from "../utils/dataParserJsonToGeoJson";


const ShowMdp = () => {
  
  
  const [getID, setgetID] = useState("");
  const {setMdpCheck} = useHydrodynamic();


  const MDP = (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token");

    let data = new FormData();
    data.append("IDSolicitud", getID);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/mdpp",
      headers: {
        "x-token": token,
        // ...data.getHeaders()
      },
      data: data,
    };

    axiosRequest
      .request(config)
      .then((response) => {
        (response.data)

        let alldata = []
        const model = response.data.model;
        const resutlados = model.Resultados;

        resutlados.forEach((data) => {
           const geojson = data.GeoJSON;
           let result = parseJsonToGeoJson(geojson);
           const newData = result.features
           alldata = alldata.concat(newData)
           setMdpCheck(alldata)
        })
       })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={MDP}>
        <div>
          <h1 className="text-center capitalize font-bold text-4xl text-blue-950">
            show MDP
          </h1>
          <div className="text-center">
            <label htmlFor="" className="text-center capitalize font-bold text-2xl text-blue-950 mr-2">
              ID MDP
            </label>
            <input
              type="text"
              value={getID}
              onChange={(e) => setgetID(e.target.value)}
              className=" border border-blue-900 text-blue-950  rounded "

            />
            <input
              type="submit"
              value="enviar"
              className="capitalize  rounded-md bg-blue-950 px-4 py-1 ml-2 text-white focus:bg-gray-600 focus:outline-none hover:bg-blue-900"
              />
          </div>
        </div>
      </form>
    </>
  );
};

export default ShowMdp;
