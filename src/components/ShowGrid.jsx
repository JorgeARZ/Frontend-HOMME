import axiosRequest from "../config/axiosRequest"
import FormData from "form-data"
import { useState } from "react"

const ShowGrid = () => {

    const [idGrid,setidGrid] = useState('')

    //Guardar Solicitud en state
    const [gridId,setgridId] = useState([])

    const SubmitGrid = e =>{
        e.preventDefault()

        let data = new FormData();
        data.append('IDSolicitud', idGrid);
        const token = localStorage.getItem('token')

        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: '/grid',
        headers: { 
            'x-token': token, 
            // ...data.getHeaders()
        },
        data : data
        };

        axiosRequest.request(config)
        .then((response) => {
            setgridId(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
    }
    


  return (
    <form className='mt-5' onSubmit={SubmitGrid}>
        <div>
            <h1 className='font-black text-4xl text-center mb-5 capitalize'>show grid</h1>
        </div>
        <div className="text-center">
            <label htmlFor="" className='text-xl font-medium mr-3 capitalize'>ingrese iD grilla</label>
            <input type="text"  value={idGrid} onChange={e=>setidGrid(e.target.value)} className="border border-black" />
            <input type="submit" name="" className='text-white bg-red-800 hover:text-black font-medium ml-3 p-1 rounded-md px-5 capitalize'/>
        </div>

        <div className="bg-white mt-5 sm:w-full xl:px-12">
        <div className="overflow-x-auto boder-x border-t">
        <table className="table-auto w-full">
            <thead className="border-b">
                <tr className="bg-red-900 text-white capitalize">
                    <th className="p-4 font-bold">respuesta</th>
                    <th className="p-4 font-bold">fecha de peticion</th>
                    <th className=" p-4 font-bold">tiempo estimado</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b text-center">
                    <td className="p-4">{gridId.message}</td>
                    <td className="p-4">{gridId.fechaPeticion}</td>
                    <td className="p-4">{gridId.TiempoEstimado}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
    </form>


    
  )
}

export default ShowGrid