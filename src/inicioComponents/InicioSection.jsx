import ScrollAnimation from './ScrollAnimation'
import imagen from '../img/Imagen7.png'
const InicioSection = () => {
  return (
    <>
    <div className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16  mx-auto' id='tecnologia'>    
    <p className='text-center text-red-900 font-bold text-4xl capitalize'>tecnologia</p> 
        <div className='grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p y-8 my-12'>
        <ScrollAnimation className={'flex w-full justify-end'}>
                <img src={imagen} alt="" className='h-80' />
        </ScrollAnimation>
        <ScrollAnimation>
        <div className="flex flex-col items-center justify-center ml-auto w-full lg:w-10/12">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-red-900 ">¿COMO LO HACEMOS?</h1>
                    <p className='text-red-900 mt-2 mb-6 text-xl '>Mediante un sistema Web, rápido, simple e intuitivo, que incluye entre sus resultados modelos globales y locales de alta resolución acoplado al<strong>Modelo de Derivas de Partículas Múltiple (MDP+)</strong> desarrollado por Cordova&Flores (2022).  </p>
        </div>
        </ScrollAnimation>
        </div>   
    </div>
    <hr className="my-6 border-red-900 sm:mx-auto lg:my-8"/> 














    </>
  )
}

export default InicioSection