import {Outlet,Link,Navigate} from 'react-router-dom'
import Logo from '../logo/Logocolor.png'
const RutaProtegida = () => {
  // let isLogged = localStorage.getItem('token')
  // if(!isLogged){
  //   return  <Navigate to="/"/>
  // }

  const name = localStorage.getItem('name')

  const cerrarSesion = ()=>{
     localStorage.removeItem('token')
     localStorage.removeItem('name')
     Navigate('/')

  }
  return (
    <>
    <header className="top-0 w-full  z-30 bg-white transition-all">
    <nav className=" max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
    <div className="col-start-1 col-end-2 flex items-center">
          <img src={Logo} className="h-12 w-auto"/>
        </div>
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
        <p className="text-red-900 font-bold capitalize lg:mr-3 mr-3 lg:text-xl">bienvenido <strong>{name}</strong></p>
          
          <Link to='/Mdp' className='font-medium  py-2 pl-5 sm:px-8 border border-red-900 text-red-900 bg-white outline-none rounded-l-full rounded-r-full hover:bg-red-900 hover:text-white  capitalize text-xl '>MDP</Link>
          <Link to='/Index' className='font-medium  py-2 pl-5 sm:px-8 border border-red-900 text-red-900 bg-white outline-none rounded-l-full rounded-r-full hover:bg-red-900 hover:text-white  capitalize text-xl '>MHD</Link>
          <Link to='/' className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-red-900 text-red-900 bg-white-500 outline-none rounded-l-full rounded-r-full hover:bg-red-900 hover:text-white capitalize text-xl " onClick={cerrarSesion}>sign out
          </Link>

        </div>
      </nav>
  </header>
    <Outlet/>
    </>
  )
}

export default RutaProtegida