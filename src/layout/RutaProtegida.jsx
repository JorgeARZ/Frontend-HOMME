import {Navigate,Outlet} from 'react-router-dom'
const RutaProtegida = () => {
  let isLogged = localStorage.getItem('token')
  if(!isLogged){
    return  <Navigate to="/"/>
  }
  return (
    <>
    <Outlet/>
    </>
  )
}

export default RutaProtegida