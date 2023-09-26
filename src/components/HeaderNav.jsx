import { useNavigate,Link } from "react-router-dom"
import Logo from '../logo/Logocolor.png'
// import useAuth from "../hooks/useAuth"
const HeaderNav = () => {
  const navigate = useNavigate()

  // const {auth} = useAuth()
  const name = localStorage.getItem('name')

  const cerrarSesion = ()=>{
     localStorage.removeItem('token')
     localStorage.removeItem('name')
     navigate('/')

  }
  return (
    <>



{/* DETALLES */}
<header className="top-0 w-full  z-30 bg-white transition-all">
    <nav className=" max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
    <div className="col-start-1 col-end-2 flex items-center">
          <img src={Logo} className="h-12 w-auto"/>
        </div>
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
        <p className="text-red-900 font-bold capitalize lg:mr-3 mr-3 lg:text-xl">bienvenido <strong>{name}</strong></p>
           <Link to='/' className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-red-900 text-red-900 bg-white-500 outline-none rounded-l-full rounded-r-full hover:bg-red-900 hover:text-white transition-all hover:shadow-orange capitalize text-xl " onClick={cerrarSesion}>sign out
          </Link>

        </div>
            {/* <div className="flex items-center lg:order-2 ">
                <p className="text-white font-bold capitalize ">bienvenido {name}</p>
                <Link to="/" className="text-white font-bold rounded-lg text-sm px-5 lg:px-5 py-2 lg:py-2.5 mr-2 ml-3 hover:bg-red-400 capitalize" onClick={cerrarSesion}>log out</Link>
                </div> */}
    </nav>
</header>

</>
  )
}

export default HeaderNav