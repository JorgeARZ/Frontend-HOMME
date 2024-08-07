import { createContext, useState, useEffect, children } from "react";
import FormData from "form-data";
import axiosUsers from "../config/axios";
import axiosModeling from "../config/axiosModeling";

// import Alerta from "../components/Alerta";

const HydrodynamicContext = createContext();

export const HydrodynamicProvider = ({ children }) => {

  const [ViewDatos, setViewDatos] = useState([]);
  const [mdpCheck, setMdpCheck] = useState([]);
  const [loginData,setloginData] =useState({})
  const [edit,setEdit] = useState({})


  //Obtener Modelos Hidrodinamicos/MDP
  useEffect(() => {
    let data = new FormData();
    const token = localStorage.getItem("token");
    if (!token) return;
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "/requests",
      headers: {
        "x-token": token,
        //   ...data.getHeaders()
      },
      data: data,
    };

    axiosUsers
      .request(config)
      .then((response) => {
        setViewDatos([response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  },[loginData]);

  //Datos formulario HIDRODINAMICO
  const [datos, setDatos] = useState({
    fechaInicio: new Date(Date.UTC()),
    fechaTermino: new Date(Date.UTC()),
    latitudNorte: "",
    latitudSur: "",
    longitudOriente: "",
    longitudPoniente: "",
    emergencia: false,
  });

  const [datosMdp, setDatosMdp] = useState({
    IDSolicitud: "",
    fechaInicio: new Date(Date.UTC()),
    fechaTermino: new Date(Date.UTC()),
    latitudNorte: "",
    latitudSur: "",
    longitudOriente: "",
    longitudPoniente: "",
    emergencia: false,
    multViento: "",
    multCorriente: "",
    nroPart: "",
    coordParticulas: "",
    diferenciaHorario: "",
    radioOrigen: "",
    resolucionRadio: "",
    nroRepeticion: "",
    deltaRepeticion: "",
    capa: "",
    analisisDirecto: false, // boolean
    analisisDeterministico: false, //Boolean
    pendiente: "",
    intercepto: "",
    SDxy: "",
    areaEmergida: "",
    areaSumergida: "",
    cdObjetoEmergido: "",
    cdObjetoSumergido: "",
    analisisLeeway: false, //boolean
    randomWalk: "",
  });

  //Changte datos Formulario MDP
  const handleMDP = (e) => {
    setDatosMdp({
      ...datosMdp,
      [e.target.name]: e.target.value,
    });
  };
  //Change de Datos formulario HIDRODINAMICO
  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  //Submit HIDRODINAMICO
  const SubmitHydro = async () => {
    const token = localStorage.getItem("token");
    let data = new FormData();
    data.append("fechaInicio", datos.fechaInicio);
    data.append("fechaTermino", datos.fechaTermino);
    data.append("latitudNorte", datos.latitudNorte);
    data.append("latitudSur", datos.latitudSur);
    data.append("longitudOriente", datos.longitudOriente);
    data.append("longitudPoniente", datos.longitudPoniente);
    data.append("emergencia", datos.emergencia);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/hidrodinamic",
      headers: {
        "x-token": token,
        //   ...data.getHeaders()
      },
      data: data,
    };

    axiosModeling
      .request(config)
      .then((response) => {
        setDatos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Submit Formulario MDP
  const SubmitMDP = () => {
    let data = new FormData();
    const token = localStorage.getItem("token");
    data.append("IDSolicitud", datosMdp.IDSolicitud);
    data.append("fechaInicio", datosMdp.fechaInicio);
    data.append("fechaTermino", datosMdp.fechaTermino);
    data.append("latitudNorte", datosMdp.latitudNorte);
    data.append("latitudSur", datosMdp.latitudSur);
    data.append("longitudOriente", datosMdp.longitudOriente);
    data.append("longitudPoniente", datosMdp.longitudPoniente);
    data.append("emergencia", datosMdp.emergencia);
    data.append("multViento", datosMdp.multViento);
    data.append("multCorriente", datosMdp.multCorriente);
    data.append("nroPart", datosMdp.nroPart);
    data.append("coordParticulas", datosMdp.coordParticulas);
    data.append("diferenciaHorario", datosMdp.diferenciaHorario); //Ojito
    data.append("radioOrigen", datosMdp.radioOrigen);
    data.append("resolucionRadio", datosMdp.resolucionRadio);
    data.append("nroRepeticion", datosMdp.nroRepeticion);
    data.append("deltaRepeticion", datosMdp.deltaRepeticion);
    data.append("capa", datosMdp.capa);
    data.append("analisisDirecto", datosMdp.analisisDirecto);
    data.append("analisisDeterministico", datosMdp.analisisDeterministico);
    data.append("pendiente", datosMdp.pendiente);
    data.append("intercepto", datosMdp.intercepto);
    data.append("SDxy", datosMdp.SDxy);
    data.append("areaEmergida", datosMdp.areaEmergida);
    data.append("areaSumergida", datosMdp.areaSumergida);
    data.append("cdObjetoEmergido", datosMdp.cdObjetoEmergido);
    data.append("cdObjetoSumergido", datosMdp.cdObjetoSumergido);
    data.append("analisisLeeway", datosMdp.analisisLeeway);
    data.append("randomWalk", datosMdp.randomWalk);

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

    axiosModeling
      .request(config)
      .then((response) => {
        setDatosMdp(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <HydrodynamicContext.Provider
        value={{
          handleChangeDatos,
          datos,
          setDatos,
          SubmitHydro,
          ViewDatos,
          SubmitMDP,
          handleMDP,
          datosMdp,
          setDatosMdp,
          mdpCheck,
          setMdpCheck,
          setloginData,
          edit,setEdit
        }}
      >
        {children}
      </HydrodynamicContext.Provider>
    </>
  );
};

export default HydrodynamicContext;
