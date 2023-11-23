import useHydrodynamic from '../hooks/useHidrodinamyc';
import { useEffect,useState } from 'react';
import Alerta from './Alerta';


const FormularioCompleto = () => {

  const {SubmitMDP,handleMDP,datosMdp,dat,setDatosMdp} = useHydrodynamic()

  const [alerta,setAlerta] = useState({})
  useEffect(()=>{
    if(dat?._id){
      setDatosMdp({
        fechaInicio:dat.fechaInicio, //FALTA
        fechaTermino:dat.fechaTermino, //FALTA
        latitudNorte:dat.latitudNorte,
        latitudSur:dat.latitudSur,
        longitudOriente:dat.longitudOriente,
        longitudPoniente:dat.longitudPoniente,
        emergencia:dat.emergencia       //FALTA
 
     })

    }
   
   },[dat])


 
  const FormMDP = e =>{
    e.preventDefault()


    if(Object.values(datosMdp).includes('')){
      setAlerta({msg: 'Hay Campos Vacios',error:true })
      return;
    }   
    SubmitMDP(datosMdp)

    setAlerta({ msg:'Solicitud Enviada'})
    setDatosMdp('')

  }



  const {msg} = alerta
  return (
    <>
    
      <div className="px-6 space-y-4 md:space-y-6 sm:p-8 bg-red-900 rounded-lg mx-3">
      <form onSubmit={FormMDP}>
          <h1 className="text-white font-bold text-xl text-center capitalize">modelo de deriva de particulas(MDP)</h1>

          {msg &&<Alerta
              alerta={alerta}
            />}

          {/* GRUPOOOO 1 */}
      <div className="grid grid-cols-2 mt-4 bg ">
      
        <div className="flex flex-col items-center mr-2">

          {/* GRUPOOOO 1 */}

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize ">IDSolicitud</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='ID solicitud' name='IDSolicitud' value={datosMdp.IDSolicitud} onChange={e => handleMDP(e)}  />
       

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">CoordParticlas</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='Coordenadas Particulas' 
                name='coordParticulas' 
                value={datosMdp.coordParticulas} 
                onChange={e => handleMDP(e)} />

          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize mt-2">fecha Inicio</label>
          <input type="datetime-local" placeholder='Fecha Inicio' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"
                value={datosMdp.fechaInicio}
                name="fechaInicio"
                onChange={e => handleMDP(e)}/>
  
          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">Diferencia de hora UTC</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='Diferencia de hora UTC' 
                name='diferenciaHorario' 
                value={datosMdp.diferenciaHorario} 
                onChange={e => handleMDP(e)} />

       
          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">resolucion Radio</label>
          <input  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='resolucion Radio' 
                  name='resolucionRadio' 
                  value={datosMdp.resolucionRadio} 
                  onChange={e => handleMDP(e)} />
          
          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">deltaRepeticion</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"   placeholder='Repeticion' 
                name='deltaRepeticion' 
                value={datosMdp.deltaRepeticion} 
                onChange={e => handleMDP(e)}/>


                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">latitud norte</label>
                            <input type="text" name="latitudNorte" id="latitudNorte" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder="latitudNorte" 
                            value={datosMdp.latitudNorte}
                            onChange={e => handleMDP(e)} />
                             <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">longitud oriente</label>
                            <input type="text" name="longitudOriente" id="longitudOriente" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder="longitudOriente" 
                            value={datosMdp.longitudOriente}
                            onChange={e => handleMDP(e)} 
                            />
                 
</div>


    <div className="flex flex-col items-center mr-2">
    <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize">random walk</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='ramdon walk' 
                name='randomWalk' 
                value={datosMdp.randomWalk} 
                onChange={e => handleMDP(e)} />
            <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">Numero de particulas a modelar</label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='Numero de particulas a modelar' 
                    name='nroPart' 
                    value={datosMdp.nroPart} 
                    onChange={e => handleMDP(e)} />
                              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize mt-2">fecha termino</label>
          <input type="datetime-local" placeholder='Fecha Termino' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"
                value={datosMdp.fechaTermino}
                name="fechaTermino"
                onChange={e => handleMDP(e)} />

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">Radio Origen</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='Latitud Oriente' 
                name='radioOrigen' 
                value={datosMdp.radioOrigen} 
                onChange={e => handleMDP(e)} />

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">Numero de Repeticion</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='Nro Repeticiones' 
                name='nroRepeticion' 
                value={datosMdp.nroRepeticion} 
                onChange={e => handleMDP(e)} />

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">capas</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='capas' 
                name='capa' 
                value={datosMdp.capa} 
                onChange={e => handleMDP(e)} />


          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">latitud sur</label>
          <input type="text" name="latitudSur" id="latitudSur" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder="latitudSur" 
                value={datosMdp.latitudSur}
                onChange={e => handleMDP(e)}  />
                           

              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">longitud poniente</label>
              <input type="text" name="longitudPoniente" id="longitudPoniente" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder="longitudPoniente" 
                    value={datosMdp.longitudPoniente}
                    onChange={e => handleMDP(e)}  />
                           
      </div>
      </div>
           
                        <label htmlFor="name" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white mt-3 text-center ">emergencia</label>
                            <input type="radio" name="emergencia" id="emergencia" className="block w-full "
                            value='true'
                            onChange={e => handleMDP(e)} 
                            checked={datosMdp.emergencia ==='true'}
                        
                            />
      <hr  className='mt-5'/>

          {/* GRUPOOO 2 */}
        <div className='grid grid-cols-2 mt-4 bg '>
          <div className="flex flex-col items-center mr-2">


            <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">area Emergida</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='area Emergida' value={datosMdp.areaEmergida} name='areaEmergida' onChange={e => handleMDP(e)}/>

            <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">area Sumergida</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='areaSumergida' value={datosMdp.areaSumergida} name='areaSumergida' onChange={e => handleMDP(e)}/>

            </div>




            {/* GRUPOOOOOO 2 */}


            <div className="flex flex-col items-center mr-2">
            <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">cdObjetoEmergido</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='cdObjetoEmergido' value={datosMdp.cdObjetoEmergido} name='cdObjetoEmergido' onChange={e => handleMDP(e)}/> 
            




            <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">cdObjetoSumergido</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='cdObjetoSumergido' value={datosMdp.cdObjetoSumergido} name='cdObjetoSumergido' onChange={e => handleMDP(e)}/>

            
            
            </div>
        </div>
        <hr  className='mt-5'/>

        {/* GRUPOOOOOO 3 */}
        <div className='grid grid-cols-2 mt-4 bg '>
          <div className="flex flex-col items-center mr-2">
          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-3">analisis Leeway</label>
            <input type="radio" name="analisisLeeway" id="analisisLeeway" className="block w-full mt-2 "
                            value='true'
                            onChange={e => handleMDP(e)} 
                            checked={datosMdp.analisisLeeway ==='true'}
                            placeholder='analisis Leeway'
                        
                            />


            <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize  mt-5">analisis Deterministico</label> 
          <input type="radio" name="analisisDeterministico" id="analisisDeterministico" className="block w-full mt-3 "
                            value='true'
                            onChange={e => handleMDP(e)} 
                            checked={datosMdp.analisisDeterministico ==='true'}
                            placeholder='analisis Leeway'
                        
                            />

          


          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-5">analisisDirecto</label>

          <input type="radio" name="analisisDirecto" id="analisisDirecto" className="block w-full mt-2 "
                            value='true'
                            onChange={e => handleMDP(e)} 
                            checked={datosMdp.analisisDirecto ==='true'}
                            placeholder='analisis Directo'
                        
                            />

          
                    
          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-3">SDxy</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5 mt-1" placeholder='SDxy' value={datosMdp.SDxy} name='SDxy' onChange={e => handleMDP(e)}/>
          </div>






          <div className="flex flex-col items-center mr-2"> 
          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">pendiente</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='pendiente' value={datosMdp.pendiente} name='pendiente' onChange={e => handleMDP(e)}/>
          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize  mt-2">multiplicador de viento</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='Multiplicador de Viento' value={datosMdp.multViento} name='multViento' onChange={e => handleMDP(e)} />

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">multiplicador de corriente</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='multiplicador de corriente' name='multCorriente' value={datosMdp.multCorriente} onChange={e => handleMDP(e)}/>
          
          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">intercepto</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='intercepto' value={datosMdp.intercepto} name='intercepto' onChange={e => handleMDP(e)} />




          
          
          
           </div>
        </div>


        <input className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-400  mt-5" type="submit" />
      </form>
      </div>
    
    </>
  )
}

export default FormularioCompleto