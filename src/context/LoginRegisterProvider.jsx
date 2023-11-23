import { createContext,useState,children } from "react";
import {useNavigate} from 'react-router-dom'
import FormData from "form-data";
import axiosUsers from "../config/axios";
// import Cookies from 'js-cookie';

const LoginRegisterContext= createContext()

export const LoginRegisterProvider = ({children}) => {

    const navigate=useNavigate()

    //Extraer valores del login
    // const [extraer, setExtraer] = useState({})
    // console.log(extraer)

    //Login Datos
    const [login,setLogin] = useState({
        email:'',
        password:''
      })

      //HandleLogin
      const handleLogin = e =>{
        setLogin({
          ...login,
          [e.target.name]: e.target.value
        })
      }


      //Submit Login

      const submitLogin = () =>{
        let data = new FormData();
            data.append('email', login.email);
            data.append('password', login.password);

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: '/login',
                headers: { 
                // ...data.getHeaders()
                },
                data : data
            };
            localStorage.setItem('token',data.token)
            localStorage.setItem('name',data.name)
         navigate('/index')

         axiosUsers.request(config)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

      }


  return (
    <>
    <LoginRegisterContext.Provider
    value={{
        login,
        setLogin,
        handleLogin,
        submitLogin
    }}

    
    
    
    
    >
        {children}
    </LoginRegisterContext.Provider>
    </>
  )
}

export default LoginRegisterContext;