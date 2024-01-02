import useHydrodynamic from "../hooks/useHidrodinamyc";

const ListadoSolicitudes = () => {
  const { ViewDatos } = useHydrodynamic();

  const resultados = [];

  {
    ViewDatos.forEach((employee) => {
      employee.data.forEach((datos) => {
        resultados.push(
          <>
            <tbody>
              <tr className="border-b text-center">
                <td className="p-4 font-bold">{datos._id}</td>
                <td className="p-4 font-bold">{datos.fechaInicio}</td>
                <td className="p-4 font-bold">{datos.fechaTermino}</td>
                <td className="p-4 font-bold">{datos.fechaPeticion}</td>
                <td className="p-4 font-bold">{datos.latitudNorte}</td>
                <td className="p-4 font-bold">{datos.latitudSur}</td>
                <td className="p-4 font-bold">{datos.longitudOriente}</td>
                <td className="p-4 font-bold">{datos.longitudPoniente}</td>
                <td className="p-4 font-bold">{datos.modelType}</td>
                <td className="p-4 font-bold">{datos.tiempoEstimado}</td>
                <td className="p-4 font-bold">{datos.requestStatus}</td>
                <td className="p-4 font-bold">{datos.emergencia}</td>
                {/* <button onClick={()=>setDat(datos)} className='p-4 font-bold'>Editar</button>  */}
              </tr>
            </tbody>
          </>
        );
      });
    });
  }
  return (
    <>
      {resultados.length ? (
        <>
          <h2 className="font-black text-3xl text-center mt-24">
            Si Hay Datos Hidrodinamicos
          </h2>
          <div className="mt-5">
            <div>
              <table className="table-auto w-full">
                <thead></thead>
                {resultados}
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center mt-24">
            No hay Datos hidrodinamicos
          </h2>
        </>
      )}
    </>
  );
};

export default ListadoSolicitudes;
