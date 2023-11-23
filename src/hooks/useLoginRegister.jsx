import {useContext} from 'react'
import LoginRegisterContext from '../context/LoginRegisterProvider'

//Extraer valores
const useLoginRegister = () =>{
    return useContext(LoginRegisterContext)
}


export default useLoginRegister