import useHydrodynamic from "../hooks/useHidrodinamyc";
import Alerta from "./Alerta";
import { useState } from "react";

const Form = () => {
  //EXTRAYENDO DATOS DEL CONTEXT HYDRODINAMY
  const { handleChangeDatos, datos, SubmitHydro } =
    useHydrodynamic();

  const [alerta, setAlerta] = useState({});

  const EnviarDatos = (e) => {
    e.preventDefault();

    if (Object.values(datos).includes("")) {
      setAlerta({ msg: "Hay Campos Vacios", error: true });
      return;
    }

    //Submit Hidro Axios request Post formulario
    SubmitHydro(datos);
    setAlerta({ msg: "Solicitud Enviada" });
  };

  const { msg } = alerta;

  return (
    <>
      <div className="mt-4 relative mx-auto max-w-md px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 flex justify-center items">
        <div className="w-full">
          <h1 className="text-center capitalize font-bold text-4xl text-blue-950">
            MDH
          </h1>
          {msg && <Alerta alerta={alerta} />}
          <div className="mt-5">
            <form onSubmit={EnviarDatos}>
              <div className="relative mt-3">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-blue-950 capitalize"
                >
                  fecha Inicio
                </label>
                <input
                  type="datetime-local"
                  name="fechaInicio"
                  value={datos.fechaInicio}
                  onChange={(e) => handleChangeDatos(e)}
                  className="border border-blue-900 text-gray-900  rounded  w-full"
                />
              </div>
              <div className="relative mt-3">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-blue-950 capitalize"
                >
                  fecha termino
                </label>
                <input
                  type="datetime-local"
                  value={datos.fechaTermino}
                  name="fechaTermino"
                  onChange={(e) => handleChangeDatos(e)}
                  className=" border border-blue-900 text-blue-950 rounded w-full"
                />
              </div>
              <div className="relative mt-3">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-blue-950 capitalize"
                >
                  latitud norte
                </label>
                <input
                  type="text"
                  name="latitudNorte"
                  value={datos.latitudNorte}
                  onChange={(e) => handleChangeDatos(e)}
                  className=" border border-blue-900 text-blue-950  rounded  w-full"
                />
              </div>
              <div className="relative mt-3">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-blue-950 capitalize"
                >
                  latitud sur
                </label>
                <input
                  type="text"
                  name="latitudSur"
                  value={datos.latitudSur}
                  onChange={(e) => handleChangeDatos(e)}
                  className=" border border-blue-900 text-blue-950  rounded  w-full"
                />
              </div>
              <div className="relative mt-3">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-blue-950 capitalize "
                >
                  longitud oriente
                </label>
                <input
                  type="text"
                  name="longitudOriente"
                  value={datos.longitudOriente}
                  onChange={(e) => handleChangeDatos(e)}
                  className=" border border-blue-900 text-blue-950  rounded  w-full"
                />
              </div>
              <div className="relative mt-3">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-blue-950 capitalize"
                >
                  longitud poniente
                </label>
                <input
                  type="text"
                  name="longitudPoniente"
                  value={datos.longitudPoniente}
                  onChange={(e) => handleChangeDatos(e)}
                  className=" border border-blue-900 text-blue-950  rounded w-full"
                />
              </div>
              <div className="relative mt-3">
                <label
                  htmlFor="name"
                  className="block text-center mb-2 text-sm font-medium text-blue-950 capitalize"
                >
                  emergencia
                </label>
                <input
                  type="radio"
                  name="emergencia"
                  value="true"
                  onChange={(e) => handleChangeDatos(e)}
                  checked={datos.emergencia === "true"}
                  className=" border border-blue-900 text-blue-950  rounded  w-full"
                />
              </div>
              <div className="my-6">
                <button
                  type="submit"
                  className="capitalize w-full rounded-md bg-blue-950 px-1 py-2 text-white focus:bg-gray-600 focus:outline-none hover:bg-blue-900"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Form;
