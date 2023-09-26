import { BrowserRouter,Routes,Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import RutaProtegida from "./layout/RutaProtegida"

import Login from "./Pag/Login"
import Registrar  from "./Pag/Registrar"
import Index from './Pag/Index'
import Inicio from './Pag/Inicio'


import { HydrodynamicProvider } from "./context/HydrodynamicProvider"


function App() {

  return (
    <BrowserRouter>

      <HydrodynamicProvider>
      <Routes>
         {/* Area Publica */}
        <Route path="/" element={<AuthLayout/>}>
          <Route  index  element= {<Inicio/>}/>
          <Route  path='login' element= {<Login/>}/>
          <Route path="registrar" element={<Registrar/>}/>
        </Route>
            {/* Area Privada */}
         <Route element={<RutaProtegida/>}>
              <Route path="/index" element={<Index/>}/>
         </Route>
      </Routes>
      </HydrodynamicProvider>

    </BrowserRouter>
  )
}

export default App
