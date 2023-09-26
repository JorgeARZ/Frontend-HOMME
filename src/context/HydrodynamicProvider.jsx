import { createContext,useState,useEffect, children } from "react";
import axios from "axios";
import FormData from "form-data";

const HydrodynamicContext = createContext()

export const HydrodynamicProvider = ({children}) =>{

    const  [datos,setDatos] = useState({
        fechaInicio: '',
        fechaTermino: '',
        latitudNorte:'',
        latitudSur:'',
        longitudOriente:'',
        longitudPoniente:'',
        local:true
    })

    const [ViewDatos,setViewDatos] = useState([])

  
    //crear componente de error falta
    const [error,setError] = useState('')

    const handleChangeDatos = e =>{
        setDatos({
             ...datos,
             [e.target.name] : e.target.value
        })
     }

     //SubmitPaciente
    const  SubmitHydro = ()=>{
      const token = localStorage.getItem('token')
      let data = new FormData();
      data.append('fechaInicio', datos.fechaInicio);
      data.append('fechaTermino', datos.fechaTermino);
      data.append('latitudNorte', datos.latitudNorte);
      data.append('latitudSur', datos.latitudSur);
      data.append('longitudOriente',datos.longitudOriente);
      data.append('longitudPoniente',datos.longitudPoniente);
      data.append('local',datos.local);

      let config = {
        method: 'post',
          maxBodyLength: Infinity,
           url: 'http://34.176.175.133:3000/modeling/hidrodinamic',
          headers: { 
             'x-token': token, 
            //   ...data.getHeaders()
           },
            data : data

          
         };
      
         axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
         })
        .catch((error) => {
           console.log(error);
        });
     }

     
     //Obtener Modelos Hidrodinamicos
     useEffect(()=>{
      
      let data = new FormData();
      const token = localStorage.getItem('token')
      let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://34.176.175.133:3000/users/requests',
          headers: { 
            'x-token': token, 
          //   ...data.getHeaders()
          },
          data : data
        };
        
        axios.request(config)
        .then((response) => {
          setViewDatos([response.data]);
        })
        .catch((error) => {
          console.log(error);
        });   

     },[])

    return(
        <HydrodynamicContext.Provider
            value={{
                handleChangeDatos,  
                datos,
                setDatos,
                error,
                setError,
                SubmitHydro,
                ViewDatos

            }}
        
        >
            {children}
        </HydrodynamicContext.Provider>
    )
}

export default HydrodynamicContext;