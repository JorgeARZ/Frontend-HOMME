import integrante from '../img/pablo.jpeg'
import integrante2 from '../img/integrante2.jpg'
import itnegrante3 from '../img/cristofer.jpg'
import integrante4 from '../img/integrante.jpg'  
const InicioTecnologia = () => {
  return (
    <>
    {/* <!-- Page Container --> */}
<div className="flex items-center justify-center min-h-screen bg-white py-12" id='equipo'>
    <div className="flex flex-col">


        <div className="flex flex-col mt-8">
            {/* <!-- Meet the Team --> */}
            <div className="container max-w-7xl px-4">
                {/* <!-- Section Header --> */}
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                        {/* <!-- Header --> */}
                        <h1 className="text-red-900 text-4xl font-bold mb-8">
                            Equipo de Trabajo
                        </h1>

                        {/* <!-- Description --> */}
                        {/* <p className="text-gray-700 text-lg font-light">
                        nuestro equipo esta dedicado al desarrollo contininuo
                        </p> */}
                    </div>
                </div>

                {/* <!-- Team Members --> */}
                <div className="flex flex-wrap">
                    {/* <!-- Member #1 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src={integrante}/>
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-red-900 text-2xl font-bold mb-1 capitalize">
                                    pablo cordova
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-red-900 font-bold mb-2 capitalize">
                                    <h1 className='text-2xl text-red-900 font-bold'>director</h1>
                                    <p className='text-xl text-red-900 font-medium'>oceanografo msc en ingenieria civil</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Member #2 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src={integrante2}/>
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-red-900 text-2xl font-bold mb-1 capitalize">
                                    raul flores
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                    <h1 className='text-2xl text-red-900 font-bold'>PhD in civil engineering</h1>
                                    <p className='text-xl text-red-900 font-medium'>Profesor Asistente Departamento de Obras Civiles</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Member #3 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src={itnegrante3}/>
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-red-900 text-2xl font-bold mb-1 capitalize">
                                    cristopher mora
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                    <h1 className="text-red-900 text-xl font-bold mb-1 capitalize">licenciado en oceanografia</h1>
                                    <p  className='text-xl text-red-900 font-medium capitalize'>jefe area de emprendimiento red ocean HOMME</p>
                                </div>

                               
                            </div>
                        </div>
                    </div>

                    {/* <!-- Member #4 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src={integrante4}/>
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-red-900 text-2xl font-bold mb-1 capitalize">
                                      jorge rojas
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                    <h1 className="text-red-900 text-xl font-bold mb-1 capitalize">ingeniero en informatica</h1>
                                    <p  className='text-xl text-red-900 font-medium capitalize'>jefe area informatica red ocean HOMME</p>
                                </div>

                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default InicioTecnologia