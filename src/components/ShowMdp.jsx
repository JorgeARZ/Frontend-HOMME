import axios from 'axios';
import { useState } from 'react';


const ShowMdp = () => {

    const [getID,setgetID] = useState('')
    const [mdpDatos,setMdpDatos] = useState([])

    const MDP = e =>{
        e.preventDefault()
            const token = localStorage.getItem('token')

            let data = new FormData();
            data.append('IDSolicitud', getID);

            let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://34.176.175.133:3000/requests/mdpp',
            headers: { 
                'x-token': token, 
                // ...data.getHeaders()
            },
                data : data
            };

            axios.request(config)
            .then((response) => {
                setMdpDatos([response.data]);
            })
            .catch((error) => {
            console.log(error);
            });
    }

     const resultados = []
     {mdpDatos.forEach((mdp)=>{
        console.log(mdp)
     })}


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

                {resultados}
            
               </form>
            )
            }

export default ShowMdp