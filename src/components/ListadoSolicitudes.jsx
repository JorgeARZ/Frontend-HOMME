import Solicitudes from './Solicitudes';
import useHydrodynamic from '../hooks/useHidrodinamyc';


const ListadoSolicitudes = () => {

      const {ViewDatos} = useHydrodynamic()


  return (
   <>
      {ViewDatos.length ? (
         <>
            <h2 className='font-black text-3xl text-center mt-24'>Si Hay Datos Hidrodinamicos</h2>

            {Object.keys(ViewDatos).map((data) =>{
                const values = ViewDatos[data]
                console.log(values)

                return(
                  <>
                  {Object.keys(values).map((value,index) =>{
                     const keys = values[value]
                     console.log(keys[0])
                  //   return <li key={keys}> asd{keys._id}</li>
                  })}
                 
                  </>
                )
               
            })}
         
         </>
      ) :(
         <>
            <h2 className='font-black text-3xl text-center mt-24'>No hay Datos hidrodinamicos</h2> 
         </>
      )}

      





      {/* <div className="bg-white mt-5 sm:w-full xl:px-12"> 
      <div className="overflow-x-auto border-x border-t">
         <table className="table-auto w-full">
            <thead className="border-b">
               <tr className="bg-red-900 text-white">
                  <th className="text-left p-4 font-bold">
                     
                  </th>
                  <th className="text-left p-4 font-medium">
                  </th>
                  <th className="text-left p-4 font-medium">
 
                  </th>
               </tr>
            </thead>
            <tbody>
               <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">

                  </td>
                  <td className="p-4">
                     2:30min
                  </td>
                  <td className="p-4">
                     XXXXXXX
                  </td>
               </tr>
               <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">
                     483290435
                  </td>
                  <td className="p-4">
                     1:20min
                  </td>
                  <td className="p-4">
                     XXXXXXX
                  </td>
                  
               </tr>
            </tbody>
         </table>
      </div>
      </div> */}
   {/* })} */}
   </>
    
  )
}

export default ListadoSolicitudes