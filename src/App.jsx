import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";

import Login from "./Pag/Login";
import Registrar from "./Pag/Registrar";
import Index from "./Pag/Index";
import Mdp from "./Pag/Mdp";
import { HydrodynamicProvider } from "./context/HydrodynamicProvider";
import { LoginRegisterProvider } from "./context/LoginRegisterProvider";

function App() {
  return (
    <BrowserRouter>
    {/* <LoginRegisterProvider> */}
      <HydrodynamicProvider>
        {/* Area Publica */}
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
          </Route>
    
        {/* Area Privada */}
          <Route path='/' element={<RutaProtegida />}>
            <Route path="/index" element={<Index />} />
            <Route path="Mdp" element={<Mdp />} />
          </Route>
        </Routes>
      </HydrodynamicProvider>
      {/* </LoginRegisterProvider> */}
    </BrowserRouter>
  );
}

export default App;
