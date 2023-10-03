import axios from "axios"
import FormData from "form-data"
import { useState } from "react"
const ShowBathy = () => {
    const [idBathy,setidBathy] = useState('')
    const [showBathy,setshowBathy] = useState([])

    const submitBathy = e =>{
        e.preventDefault()

       

        const token = localStorage.getItem('token')
    
        let data = new FormData();
        data.append('IDSolicitud', idBathy);

        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://34.176.175.133:3000/requests/bathymetry',
        headers: { 
            'x-token': token, 
            // ...data.getHeaders()
        },
        data : data
        };

        axios.request(config)
        .then((response) => {
            setshowBathy(response.data);
        })
        .catch((error) => {
        console.log(error);
        });

    }
  return (
   <form onSubmit={ submitBathy}>
    <div>
        <h1 className="text-center font-black text-4xl mt-5 capitalize">show bathy</h1>
        <div className="text-center">
            <label htmlFor="" className="capitalize text-xl font-medium mr-3">ID batrimetria</label>
            <input type="text" className="border border-black" value={idBathy} onChange={e=>setidBathy(e.target.value)} />
            <input type="submit" value="enviar" className="text-white bg-red-800 hover:text-black font-medium ml-3 p-1 rounded-md px-5 capitalize mt-2" />
        </div>

        <div className="bg-white mt-3 sm:w-full xl:px-12 ">
            <div className="overflow-x-auto border-x border-t">
                <table className="table-auto w-full">
                    <thead className="border-b">
                        <tr className="bg-red-900 text-white capitalize ">
                            <th className="p-2 font-bold">respuesta</th>
                            <th className="p-2 font-bold">fecha peticion</th>
                            <th className="p-2 font-bold">tiempo estimado</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b text-center">
                            <td className="p-4">{showBathy.message}</td>
                            <td className="p-4">{showBathy.fechaPeticion}</td>
                            <td className="p-4">{showBathy.TiempoEstimado}</td>
                        </tr>
                    </tbody>

                </table>

            </div>
        </div>
    </div>

   </form>
  )
}

export default ShowBathy