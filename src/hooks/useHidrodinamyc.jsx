import {useContext} from 'react'
import HydrodynamicContext from '../context/HydrodynamicProvider'

//Extraer Valors
const useHydrodynamic = () =>{
    return useContext(HydrodynamicContext)
}

export default useHydrodynamic