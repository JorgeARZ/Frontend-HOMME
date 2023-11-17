import useHydrodynamic from '../hooks/useHidrodinamyc';

const ListadoSolicitudes = () => {


      const {ViewDatos,setDat} = useHydrodynamic()




      
          const resultados = []
          
          {ViewDatos.forEach((employee)=>{
            employee.data.forEach((datos)=>{ 
                resultados.push(
                  <>

                  <tbody>   
                  <tr className="border-b text-center">
                     <th className="p-4 font-bold" >{datos._id}</th>
                     <th className="p-4 font-bold">{datos.fechaInicio}</th>
                     <th className="p-4 font-bold">{datos.fechaTermino}</th>
                     <th className="p-4 font-bold">{datos.fechaPeticion}</th>
                     <th className="p-4 font-bold">{datos.latitudNorte}</th>
                     <th className="p-4 font-bold">{datos.latitudSur}</th>
                     <th className="p-4 font-bold">{datos.longitudOriente}</th>
                     <th className="p-4 font-bold">{datos.longitudPoniente}</th>
                     <th className="p-4 font-bold">{datos.modelType}</th>
                     <th className="p-4 font-bold">{datos.tiempoEstimado}</th>
                     <th className="p-4 font-bold">{datos.requestStatus}</th>
                     <th className="p-4 font-bold">{datos.emergencia}</th>
                     <button onClick={()=>setDat(datos)} className='p-4 font-bold'>Editar</button>
                  </tr>
                  </tbody>
                  
                  </>
               )
            })
           
    })} 
  return (
   

   
   <>
      {resultados.length ? (
         <>
         <h2 className='font-black text-3xl text-center mt-24'>Si Hay Datos Hidrodinamicos</h2>
         <div className='mt-5'>
            <div>
               <table className="table-auto w-full">
               <thead>
               </thead>
               {resultados}
               </table>
            </div>
         </div>
   
         </>
      ) :(
         <>
            <h2 className='font-black text-3xl text-center mt-24'>No hay Datos hidrodinamicos</h2> 
         </>
      )}

   </>
    
  )
}

export default ListadoSolicitudes