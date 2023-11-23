
import { useState } from 'react';
import useHydrodynamic from '../hooks/useHidrodinamyc';
import axiosRequest from '../config/axiosRequest';


const ShowMdp = () => {

    const [getID,setgetID] = useState('')
    const {setMdpGeojson} = useHydrodynamic()

    const MDP = e =>{
        e.preventDefault()
            const token = localStorage.getItem('token')

            let data = new FormData();
            data.append('IDSolicitud', getID);

            let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/mdpp',
            headers: { 
                'x-token': token, 
                // ...data.getHeaders()
            },
                data : data
            };

            axiosRequest.request(config)
            .then((response) => {
                setMdpGeojson(response.data);
            })
            .catch((error) => {
            console.log(error);
            });
    }



            return (
                <form onSubmit={MDP}>
                <div>
                    <h1 className="text-center font-black text-4xl mt-5 capitalize">show MDP</h1>
                    <div className="text-center">
                        <label htmlFor="" className="capitalize text-xl font-medium mr-3">ID MDP</label>
                        <input type="text"  value={getID} onChange={e=>setgetID(e.target.value)}  className="border border-black"/>
                        <input type="submit" value="enviar" className="text-white bg-red-800 hover:text-black font-medium ml-3 p-1 rounded-md px-5 capitalize mt-2" />
                    </div>
                </div>
               </form>
            )
            }

export default ShowMdp