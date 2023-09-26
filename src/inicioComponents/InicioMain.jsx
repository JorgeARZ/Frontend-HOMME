import ScrollAnimation from './ScrollAnimation'
import Gif from '../img/imagen2.gif'

import logo from '../logo/Logocolor.png'
const InicioMain = () => {

  return (
    <>
    <section className='bg-white'>
        <div className='py-8 px-4  mt-24 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 lg:mt-24'>
            
        <div className='grid place-items-center'>
        <img src={logo} className='h-32' />
        </div>
            
        <h1 className="mb-4 text-4xl font-extrabold text-black-900 md:text-5xl lg:text-4xl capitalize">hydrodynamic ocean models for maritime emergencies
        </h1>
        </div>
        
    </section> 
    <hr className="my-6 border-red-900 sm:mx-auto lg:my-8"/> 


    <div className="max-w-screen-xl text-center mt-10 px-8 xl:px-16 mx-auto" id="mision">
    <p className='text-center text-red-900 font-bold text-4xl capitalize'>sobre nosotros</p>
        <ScrollAnimation>
            <div className='grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16'>
                <div className='flex flex-col justify-center'>
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-red-900 ">¿QUE HACEMOS? 
                    </h1>
                    <p className="text-red-900 mt-2 mb-6 text-xl  ">
                    HOMME es una herramienta de soporte antes emergencias marítimas para proyectar y pronosticar elementos a la deriva en el océano con especial énfasis en zonas costeras
                    </p>
                    <h2 className='text-3xl lg:text-4xl xl:text-5xl font-medium text-red-900'>¿POR QUE?</h2>
                    <p className='text-red-900 mt-2 mb-6 text-xl'> Porque evitar pérdidas humanas y daños en el ecosistema es nuestra prioridad, entendemos que cada caso merece y exige nuestra máxima capacidad motivacional y analítica, ya que a final de cuentas, salvaguardar una vida y proteger un ecosistema, es un logro invaluable.</p>
                  
                </div>
                <ScrollAnimation className={'flex w-full'}>
                    <img src={Gif} />
                </ScrollAnimation>
            </div>
        </ScrollAnimation>
        </div> 
        <hr className="my-6 border-red-900 sm:mx-auto lg:my-8"/>

</>

  )
}

export default InicioMain