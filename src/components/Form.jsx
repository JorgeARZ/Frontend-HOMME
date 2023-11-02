import useHydrodynamic from '../hooks/useHidrodinamyc';
import Alerta from './Alerta';
import {Link,Navigate} from 'react-router-dom'


const Form = () => {


    //EXTRAYENDO DATOS DEL CONTEXT HYDRODINAMY
    const {handleChangeDatos,datos,SubmitHydro,alerta,setAlerta} = useHydrodynamic()


     const EnviarDatos = e =>{
      e.preventDefault()

      if(Object.values(datos).includes('')){
        setAlerta({msg: 'Hay Campos Vacios',error:true })
        return
    }   
    setAlerta({})
  
      //Submit Hidro Axios request Post formulario
        SubmitHydro(datos)
  }

  const {msg} = alerta


  return (
    <>
    <div className='flex flex-col items-center justify-center px-5 lg:py-0'>
      <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-red-900 mb-10">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form onSubmit={EnviarDatos}>

            <h1 className="text-white font-bold text-xl text-center capitalize">modelo hidrodinamico</h1>
            {msg &&<Alerta
              alerta={alerta}
            />}

                        <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">fecha Inicio</label>
                                <input type="datetime-local" placeholder='Fecha Inicio' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                                value={datos.fechaInicio}
                                name="fechaInicio"
                                onChange={e => handleChangeDatos(e)}
                               
                                 /> 
                        </div>
                        <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize mt-2">fecha termino</label>
                                <input type="datetime-local" placeholder='Fecha Termino' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                                value={datos.fechaTermino}
                                name="fechaTermino"
                                onChange={e => handleChangeDatos(e)} /> 
                                
                          </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">latitud norte</label>
                            <input type="text" name="latitudNorte" id="latitudNorte" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="latitudNorte" 
                            value={datos.latitudNorte}
                            onChange={e => handleChangeDatos(e)}
                            
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">latitud sur</label>
                            <input type="text" name="latitudSur" id="latitudSur" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="latitudSur" 
                            value={datos.latitudSur}
                            onChange={e => handleChangeDatos(e)}
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">longitud oriente</label>
                            <input type="text" name="longitudOriente" id="longitudOriente" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="longitudOriente" 
                            value={datos.longitudOriente}
                            onChange={e => handleChangeDatos(e)}
                            />
                            </div>
                                           <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">longitud poniente</label>
                            <input type="text" name="longitudPoniente" id="longitudPoniente" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="longitudPoniente" 
                            value={datos.longitudPoniente}
                            onChange={e =>handleChangeDatos(e)}
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3 text-center ">emergencia</label>
                            <input type="radio" name="emergencia" id="emergencia" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                            value='true'
                            onChange={e => handleChangeDatos(e)}
                            checked={datos.emergencia ==='true'}
                          
                            />
                        </div>
                    
                        <input type="submit" className="w-full text-black bg-white hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5" />
      </form>        
      </div>
      </div>
      
    </div>
    </>
  )
}

export default Form