import useHydrodynamic from "../hooks/useHidrodinamyc";
import {  useState } from "react";


const ListadoSolicitudes = () => {
  const { ViewDatos,setEdit,setMdpCheck,mdpCheck } = useHydrodynamic();

  console.log(mdpCheck)

  

  const resultados = [];



    ViewDatos.forEach((employee) => {
      employee.data.forEach((datos) => {
        resultados.push(
          <>
            <tbody>
              <tr className="border-b text-center text-blue-950">
                {/* <button type="button" className="p-2 font-bold">{datos._id}</button> */}
                <td className="p-2 font-bold">{datos._id}</td>
                <td className="p-2 font-bold">{datos.modelType}</td>
                <td className="p-2 font-bold">{datos.tiempoEstimado}</td>
                <td className="p-2 font-bold">{datos.requestStatus}</td>
                <td className=" font-bold">{datos.emergencia}</td>
                {/* <button onClick={()=>setEdit(datos)} className='p-4 font-bold'>Editar</button>  */}
              </tr>
            </tbody>
          </>
        );
      });
    });
  


  return (
    <>
      {resultados.length ? (
        <>
          <h2 className="text-center capitalize font-bold text-4xl text-blue-950 mt-5 lg:mt-0">
            solicitudes
          </h2>
          <div className="flex items-center justify-center ml-6 mt-3">
            <div className="flex items-center justify-center min-h-[450px]">
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-white uppercase bg-blue-950 font-bold ">
                      <tr>
                        <th scope="col" className="py-3 px-6">
                          id
                        </th>
                        <th scope="col" className="py-3 px-6 ">
                          Model
                        </th>
                        <th scope="col" className="py-3 px-6">
                          time
                        </th>
                        <th scope="col" className="py-3 px-6">
                          status
                        </th>
                      </tr>
                    </thead>
                    {resultados}
                   
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-5">
            <div>
              <table className="w-full text-sm text-left shadow-xl text-blue-950 px-6 ring-1 rong-gray-900/5 sm:rounded-xl sm:px-10  justify-center items-center ml-6">
                <thead></thead> */}
          {/* {resultados} */}
          {/* </table>
            </div>
          </div> */}
        </>
      ) : (
        <>

          <h2 className="text-center capitalize font-bold text-4xl text-blue-950 mx-14">
            no hay solicitudes
          </h2>
        </>
      )}
    </>
  );
};

export default ListadoSolicitudes;
