import { useState } from "react"
import axios from "axios"


const ShowRequest = () => {

  const [idSolicitud,setidSolicitud] = useState('')
  const [ShowId,setShowId] = useState([])

    const Submit = e =>{
        e.preventDefault()


        const token = localStorage.getItem('token')
        let data = new FormData();
        data.append('IDSolicitud',idSolicitud);

        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://34.176.175.133:3000/requests/status',
        headers: { 
            'x-token': token, 
            // ...data.getHeaders()
        },
        data : data
        };

        axios.request(config)
        .then((response) => {
        setShowId((response.data));
        })
        .catch((error) => {
        console.log(error);
        });
         
    }
  return (
    <form onSubmit={Submit}>
      <div>
        <h1 className="font-black text-4xl text-center mb-5">Show Request</h1>
        <div className="text-center">
          <label className="text-xl font-medium mr-3">Ingrese ID Solicitud</label>
          <input type="text"  value={idSolicitud} onChange={e=>setidSolicitud(e.target.value)} className="border border-black"/>
          <input type="submit" value="enviar" className="text-white bg-red-800 hover:text-black font-medium ml-3 p-1 rounded-md px-5 capitalize" />
        </div>

        <div className="bg-white mt-5 sm:w-full xl:px-12"> 
        <div className="overflow-x-auto border-x border-t">
         <table className="table-auto w-full">
            <thead className="border-b">
               <tr className="bg-red-900 text-white">
                  <th className="text-left p-4 font-bold">
                     Respuesta
                  </th>
                  <th className="text-left p-4 font-bold">
                    Hora Ingreso
                  </th>
                  <th className="text-left p-4 font-bold">
                    Modelo Hidrodinamico
                  </th>
                  <th>Batimetria</th>
                  <th>Grilla</th>
                    <th>Tiempo Estimado</th>
               </tr>
            </thead>
            <tbody>
               <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">
                  {ShowId.message}
                  </td>
                  <td className="p-4">
                  {ShowId.fechaPeticion}
                  </td>
                  <td className="p-4">
                  {ShowId.estadoModeloHidrodinamico}
                  </td>
                  <td className="p-4">
                  {ShowId.estadoBarimetriaServer}
                  </td>
                  <td className="p-4">
                  {ShowId.estadoGrilla}
                  </td>
                  <td className="p-4">
                  {ShowId.TiempoEstimado}
                  </td>
               </tr>
              
                 

            </tbody>
         </table>
      </div>
      </div>
      </div>
    </form>
  )
}

export default ShowRequest