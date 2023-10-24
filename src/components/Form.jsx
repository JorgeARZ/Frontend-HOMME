
// import DatePicker,{DateObject} from "react-multi-date-picker"
// import TimePicker from "react-multi-date-picker/plugins/time_picker";
// import "react-datepicker/dist/react-datepicker.css";
import useHydrodynamic from '../hooks/useHidrodinamyc';
// import Alerta from './Alerta';


const Form = () => {

  //codigo FUNCIONAL SOLO FALTA EL TEMA DEL A HORA

    //EXTRAYENDO DATOS DEL CONTEXT HYDRODINAMY
    const {handleChangeDatos,datos,SubmitHydro} = useHydrodynamic()

     const EnviarDatos = e =>{
      e.preventDefault()

      if(Object.values(datos).includes('')){
      console.log('todo los campos son obligatorios')
        return
    }   
      //Submit Hidro Axios request Post formulario
        SubmitHydro(datos)
    }
  return (
    <>
    <div className='flex flex-col items-center justify-center px-5 lg:py-0'>
      <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-red-900 mb-10">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form onSubmit={EnviarDatos}>

            <h1 className="text-white font-bold text-xl text-center capitalize">modelo hidrodinamico</h1>
                        <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">fecha Inicio</label>
                                <input type="date" placeholder='Fecha Inicio' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                                value={datos.fechaInicio}
                                name="fechaInicio"
                                onChange={e => handleChangeDatos(e)} /> 
                        </div>
                        <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize mt-2">fecha termino</label>
                                <input type="date" placeholder='Fecha Termino' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                                value={datos.fechaTermino}
                                name="fechaTermino"
                                onChange={e => handleChangeDatos(e)} /> 
                          </div>

                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">latitud norte</label>
                            <input type="text" name="latitudNorte" id="latitudNorte" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="latitudNorte" required="" 
                            value={datos.latitudNorte}
                            onChange={e => handleChangeDatos(e)}
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">latitud sur</label>
                            <input type="text" name="latitudSur" id="latitudSur" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="latitudSur" required="" 
                            value={datos.latitudSur}
                            onChange={e => handleChangeDatos(e)}
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">longitud oriente</label>
                            <input type="text" name="longitudOriente" id="longitudOriente" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="longitudOriente" required=""  
                            value={datos.longitudOriente}
                            onChange={e => handleChangeDatos(e)}
                            />
                            </div>
                                           <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">longitud poniente</label>
                            <input type="text" name="longitudPoniente" id="longitudPoniente" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="longitudPoniente" required="" 
                            value={datos.longitudPoniente}
                            onChange={e =>handleChangeDatos(e)}
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">emergencia</label>
                            <input type="text" name="emergencia" id="emergencia" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="emergencia" required="" 
                            value={datos.emergencia}
                            onChange={e => handleChangeDatos(e)}
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