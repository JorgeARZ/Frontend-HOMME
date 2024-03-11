import useHydrodynamic from "../hooks/useHidrodinamyc";
import { useEffect, useState } from "react";
import Alerta from "./Alerta";

const FormularioCompleto = () => {
  const { SubmitMDP, handleMDP, datosMdp,edit,setDatosMdp } =
    useHydrodynamic();

  const [alerta, setAlerta] = useState({});



  useEffect(()=>{
    if(edit?._id){
      setDatosMdp({
        fechaInicio:edit.fechaInicio, //FALTA
        fechaTermino:edit.fechaTermino, //FALTA
        latitudNorte:edit.latitudNorte,
        latitudSur:edit.latitudSur,
        longitudOriente:edit.longitudOriente,
        longitudPoniente:edit.longitudPoniente,
        emergencia:edit.emergencia       //FALTA
     })
    }

   },[edit])

  const FormMDP = (e) => {
    e.preventDefault();

    if (Object.values(datosMdp).includes("")) {
      setAlerta({ msg: "Hay Campos Vacios", error: true });
      return;
    }
    SubmitMDP(datosMdp);

    setAlerta({ msg: "Solicitud Enviada" });
    // setDatosMdp("");
  };

  const { msg } = alerta;
  return (
    <>
      <div className="mt-4 relative mx-auto max-w-md px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 flex justify-center items">
        <form onSubmit={FormMDP}>
          <h1 className="text-center capitalize font-bold text-4xl text-blue-950 ">
            modelo de deriva de particulas(MDP)
          </h1>

          {msg && <Alerta alerta={alerta} />}

          {/* GRUPOOOO 1 */}
          <div className="grid grid-cols-2 mt-4 bg ">
            <div className="flex flex-col items-center mr-2">
              {/* GRUPOOOO 1 */}

              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                IDSolicitud
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                name="IDSolicitud"
                value={datosMdp.IDSolicitud}
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                CoordParticlas
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                name="coordParticulas"
                value={datosMdp.coordParticulas}
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor="name"
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                fecha Inicio
              </label>
              <input
                type="datetime-local"
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.fechaInicio}
                name="fechaInicio"
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                Diferencia de hora UTC
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                name="diferenciaHorario"
                value={datosMdp.diferenciaHorario}
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                resolucion Radio
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                name="resolucionRadio"
                value={datosMdp.resolucionRadio}
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                deltaRepeticion
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                name="deltaRepeticion"
                value={datosMdp.deltaRepeticion}
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor="name"
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                latitud norte
              </label>
              <input
                type="text"
                name="latitudNorte"
                id="latitudNorte"
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.latitudNorte}
                onChange={(e) => handleMDP(e)}
              />
              <label
                htmlFor="name"
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                longitud oriente
              </label>
              <input
                type="text"
                name="longitudOriente"
                id="longitudOriente"
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.longitudOriente}
                onChange={(e) => handleMDP(e)}
              />
            </div>

            <div className="flex flex-col items-center mr-2">
              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                random walk
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                name="randomWalk"
                value={datosMdp.randomWalk}
                onChange={(e) => handleMDP(e)}
              />
              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                Numero de particulas
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                name="nroPart"
                value={datosMdp.nroPart}
                onChange={(e) => handleMDP(e)}
              />
              <label
                htmlFor="name"
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                fecha termino
              </label>
              <input
                type="datetime-local"
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.fechaTermino}
                name="fechaTermino"
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                Radio Origen
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                name="radioOrigen"
                value={datosMdp.radioOrigen}
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                Numero de Repeticion
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                name="nroRepeticion"
                value={datosMdp.nroRepeticion}
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                capas
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                name="capa"
                value={datosMdp.capa}
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor="name"
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                latitud sur
              </label>
              <input
                type="text"
                name="latitudSur"
                id="latitudSur"
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.latitudSur}
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor="name"
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                longitud poniente
              </label>
              <input
                type="text"
                name="longitudPoniente"
                id="longitudPoniente"
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.longitudPoniente}
                onChange={(e) => handleMDP(e)}
              />
            </div>
          </div>

          <label
            htmlFor="name"
            className="block text-xl mb-2 font-medium text-blue-950 mt-3 text-center"
          >
            emergencia
          </label>
          <input
            type="radio"
            name="emergencia"
            id="emergencia"
            className="block w-full"
            value="true"
            onChange={(e) => handleMDP(e)}
            checked={datosMdp.emergencia === "true"}
          />
          <hr className="mt-5" />

          {/* GRUPOOO 2 */}
          <div className="grid grid-cols-2 mt-4 bg ">
            <div className="flex flex-col items-center mr-2">
              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                area Emergida
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.areaEmergida}
                name="areaEmergida"
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                area Sumergida
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.areaSumergida}
                name="areaSumergida"
                onChange={(e) => handleMDP(e)}
              />
            </div>

            {/* GRUPOOOOOO 2 */}

            <div className="flex flex-col items-center mr-2">
              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                cdObjetoEmergido
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.cdObjetoEmergido}
                name="cdObjetoEmergido"
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                cdObjetoSumergido
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.cdObjetoSumergido}
                name="cdObjetoSumergido"
                onChange={(e) => handleMDP(e)}
              />
            </div>
          </div>
          <hr className="mt-5" />

          {/* GRUPOOOOOO 3 */}
          <div className="grid grid-cols-2 mt-4 bg ">
            <div className="flex flex-col items-center mr-2">
              <label
                htmlFor=""
                className="block text-xl  font-medium text-blue-950 mt-3 text-center"
              >
                analisis Leeway
              </label>
              <input
                type="radio"
                name="analisisLeeway"
                id="analisisLeeway"
                className="block w-full mt-2"
                value="true"
                onChange={(e) => handleMDP(e)}
                checked={datosMdp.analisisLeeway === "true"}
                placeholder="analisis Leeway"
              />

              <label
                htmlFor=""
                className="block text-xl  font-medium text-blue-950 mt-3 text-center"
              >
                analisis Deterministico
              </label>
              <input
                type="radio"
                name="analisisDeterministico"
                id="analisisDeterministico"
                className="block w-full mt-2 "
                value="true"
                onChange={(e) => handleMDP(e)}
                checked={datosMdp.analisisDeterministico === "true"}
                placeholder="analisis Leeway"
              />

              <label
                htmlFor=""
                className="block text-xl  font-medium text-blue-950 mt-3 text-center"
              >
                analisisDirecto
              </label>

              <input
                type="radio"
                name="analisisDirecto"
                id="analisisDirecto"
                className="block w-full mt-2"
                value="true"
                onChange={(e) => handleMDP(e)}
                checked={datosMdp.analisisDirecto === "true"}
                placeholder="analisis Directo"
              />
            </div>

            <div className="flex flex-col items-center mr-2">
              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                pendiente
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.pendiente}
                name="pendiente"
                onChange={(e) => handleMDP(e)}
              />
              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                multiplicador de viento
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.multViento}
                name="multViento"
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                multiplicador de corriente
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                name="multCorriente"
                value={datosMdp.multCorriente}
                onChange={(e) => handleMDP(e)}
              />

              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                intercepto
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.intercepto}
                name="intercepto"
                onChange={(e) => handleMDP(e)}
              />
              <label
                htmlFor=""
                className="block  text-sm font-medium text-blue-950 capitalize"
              >
                SDxy
              </label>
              <input
                className="border border-blue-900 text-gray-900  rounded  w-full"
                value={datosMdp.SDxy}
                name="SDxy"
                onChange={(e) => handleMDP(e)}
              />
            </div>
          </div>

          <input
            className="capitalize w-full rounded-md bg-blue-950 px-1 py-2 text-white focus:bg-gray-600 focus:outline-none hover:bg-blue-900 mt-4"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default FormularioCompleto;
