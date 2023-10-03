import HeaderNav from "../components/HeaderNav"
import Formulario from "../components/Form"
// import FormularioCompleto from '../components/FormularioCompleto'
import ListadoSolicitudes from "../components/ListadoSolicitudes" 
import ShowRequest from "../components/ShowRequest"
import ShowGrid from "../components/ShowGrid"
import ShowBathy from "../components/ShowBathy"
import Mapbox from "../components/Mapbox"


import { useState } from "react"

const Index = () => {


const [longitud, setLongitud] = useState(-71.5956);
const [latitud, setLatitud] = useState(-33.0247);



//Agregar longitud latitud de forma de muestra para identificar
//  cuadrante maximo 6° (para todo los lados)
//como definir el punto central (click lo mas ideal)


  return (
    <>

    <HeaderNav/>
     <div className="flex flex-col md:flex-row mt-5">
      <div className=' md:block  md:w-1/2 lg:w-1/3'>
        <Formulario/>
       </div> 
      <Mapbox latitud={latitud} longitud={longitud} /> 
    </div>
    <ListadoSolicitudes/>
    <div className="mt-24">
      <ShowRequest/>
    </div>
    <ShowGrid/>
    <ShowBathy/>



 
    {/* <Footer/>  */}
    </>
  )
}

export default Index