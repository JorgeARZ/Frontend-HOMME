
import Formulario from "../components/Form"
// import FormularioCompleto from '../components/FormularioCompleto'
import ListadoSolicitudes from "../components/ListadoSolicitudes" 
import ShowRequest from "../components/ShowRequest"
import ShowGrid from "../components/ShowGrid"
import ShowBathy from "../components/ShowBathy"
import ShowMdp from "../components/ShowMdp"
import Mapbox from "../components/Mapboox"



const Index = () => {

  return (
    <>
     <div className="flex flex-col md:flex-row mt-5">
      <div className=' md:block  md:w-1/2 lg:w-1/3'>
        <Formulario/>
       </div> 
        <Mapbox/> 
        </div>
        <ListadoSolicitudes/>
        <div className="mb-6 mt-12">
          <ShowMdp/>
          </div>
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