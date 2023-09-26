import {  useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

 
const Registrar =  () => {



  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const [alerta,setAlerta] = useState({})

  const submit =  async e =>{
    e.preventDefault()

    if([name,email,password].includes('')){
      setAlerta({msg: 'Hay Campos Vacios',error:true })
      return
    }
    if(password.length < 8 ){
      setAlerta({msg: 'Password Minimo 8 Caracteres',error:true })
      return
    }
   setAlerta({})

   const registar = new FormData()
   registar.append('name',name)
   registar.append('email', email)
   registar.append('password',password)
 
   try{
     await clienteAxios({
      method:'post',
      url:'http://34.176.175.133:3000/users/register',
      data: registar,
      headers:{
        "Content-Type" : "multipart/form-data"
      }

      
    });
    setAlerta({
      msg:'Usuario Creado Correctamente',
      error:false
    })
    

   }catch(error){
    setAlerta({
      msg:error.response.data.msg,
      error:true
    })
   }
 }

 const {msg} = alerta







  return (
    <>
   
               <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
               <div className='mb-10 text-center'>
                    <h1 className='capitalize font-bold text-5xl'>red ocean <span className='block text-red-700 text-9xl uppercase'>homme</span></h1>
                    <p className='text-3xl font-bold'>Hydrodynamic Ocean Models for Maritime Emergencies</p>
                </div>
                    <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-red-900">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white text-center">
                           Create Account
                        </h1>
                        {msg &&<Alerta
                            alerta={alerta}
                          
                          />}
                        <form className="space-y-4 md:space-y-6" onSubmit={submit} >
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="Users" required="" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="name@company.com" required=""
                             value={email}
                             onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="*********" required=""
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-400">Create an account</button>
                        <p className="text-sm  text-white font-medium">
                      Already have an account? {''}
                          <Link to="/login" className="font-medium text-white hover:underline capitalize">login here</Link>
                        </p>


                        </form>
                    </div>
               </div>
               </div>

                  
                     
    </>
  )
}

export default Registrar