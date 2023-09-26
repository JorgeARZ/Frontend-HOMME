
// import Modal from '../components/Modal'
const Formulario = () => {

  // const [modal,setModal] = useState(false)

  // const handleSubmitModal = ()=>{
  //   setModal(true)
  // }
  return (
    <> 

<div className="flex flex-col items-center justify-center px-5 lg:py-0">
                    <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-red-900 mb-10">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white text-center">
                           Ingrese Datos
                        </h1>
                       
                        <form className="space-y-4 md:space-y-6" >
                        <div>
                            <label htmlFor="longitud" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Longitud</label>
                            <input type="text" name="longitud" id="longitud" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="Longitud" required="" 
                            
                            />
                        </div>
                        <div>
                            <label htmlFor="latitud" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Latitud</label>
                            <input type="text" name="latitud" id="latitud" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="Latitud" required=""
                              />
                        </div>
                        <div>
                            <label htmlFor="inicio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiempo de Inicio</label>
                            <input type="date" name="inicio" id="inicio" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" required=""
                              />
                        </div>
                        <div>
                            <label htmlFor="termino" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiempo de termino</label>
                            <input type="date" name="termino" id="termino" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" required=""
                              />
                        </div>
                        <div>
                            <label htmlFor="batimetria" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Batimetria</label>
                            <input type="file" name="batimetria" id="batimetria" className="bg-gray-50 border border-gray-300 text-gray-900  sm:text-sm rounded-lg  block w-full p-2.5"  required=""
                            
                            />
                        </div>
                        <button type="submit" className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-400">Ingresar</button>
                        </form>
                    </div>
               </div>
               </div>
           <div className="flex flex-col items-center justify-center px-5 lg:py-0">
                    <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  mb-10">
                        <button type="submit" className="w-full  bg-white font-bold text-xl rounded-lg  px-5 py-2.5 text-center  text-red-900 hover:text-white hover:bg-red-900 border-red-900 border " onClick={''}>Ingresar</button>
                    </div>
               {/* {modal && <Modal
                            setModal={setModal}
                          /> */}
               </div>



               
    </>
  )
}

export default Formulario