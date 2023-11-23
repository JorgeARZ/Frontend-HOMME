import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Alerta from '../components/Alerta'
import axiosUsers from '../config/axios'


///REALIZAR CAMBIOOOOOOOOOS PENDIENTES !!! LOGIN PROVIDER CONTEXT INDEPENDIENTE


const Login = () => {

  // const {login,handleLogin,submitLogin} = useLoginRegister()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const [alerta,setAlerta] = useState('')
  const navigate=useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if([email,password].includes('')){
      setAlerta({
        msg:'Todos los campos son obligatorios',
        error:true
      })
      return
    }

    const login = new FormData()
    login.append('email', email)
    login.append('password',password)

  

   try{
    const {data} = await axiosUsers({
      method:'post',
      url:'/login',
      data:login,
      headers:{
        "Content-Type" : "multipart/"
      }
    })
      localStorage.setItem('token',data.token)
      localStorage.setItem('name',data.name)
    navigate('/index')
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


      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='mb-10 text-center'>
          <h1 className='capitalize font-bold text-5xl'>red ocean <span className='block text-red-700 text-9xl uppercase'>homme</span></h1>
          <p className='text-3xl font-bold'>Hydrodynamic Ocean Models for Maritime Emergencies</p>
        </div>
        <div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-red-900'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center'>Account</h1>
              {msg &&<Alerta
                    alerta={alerta}
                  
                  />}

              <form className='space-y-4 md-space-y-6' onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className='block mb-2 text-m font-medium text-white'>Email</label>
                  <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5' placeholder="name@company.com" required=""
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""   
                      value={password} 
                      onChange={e => setPassword(e.target.value)}/>
                  </div>

                  <button type="submit" className="w-full text-black bg-white hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                  <p className="text-sm font-medium text-white ">
                      Don’t have an account yet? {''}
                      <Link to="/registrar" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>

              </form>
          </div>
        </div>

      </div>

    </>
  )
}

export default Login