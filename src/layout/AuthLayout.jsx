import { Outlet } from "react-router-dom"
const AuthLayout = () => {
  
  return (
    <>  
           {/* para inyectar varios componente */}
            <Outlet/>
    </>
  )
}

export default AuthLayout