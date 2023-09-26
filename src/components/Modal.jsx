// import './css/modal.css'
import CerrarBtn from '../logo/cerrar.svg'

const Modal = ({setModal}) => {
    const ocultarModal = ()=>{
        setModal(false)
    }
  return (
    <>
    <div className='bg-opacity-90 bg-black absolute overflow-hidden top-0 left-0 right-0 bottom-0'>
        <div className='absolute top-12 right-12  bottom-12'>
            <img src={CerrarBtn} alt="" onClick={ocultarModal} className='cursor-pointer h-5'/>
        </div>
        <form>
            <div>
                <h1 className='text-3xl text-center mt-10 uppercase text-white font-bold'>formulario</h1>
            </div>
            <div className='grid grid-cols-3 mt-4'>
                <div className='flex flex-col items-center'>
                    <label htmlFor="" className='text-white mb-2'>hola mundo</label>
                    <input type="date" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>

                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>

                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>

                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>


                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>

                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>

                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>

                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                </div>



                

                <div className='flex flex-col items-center'>
                    <label htmlFor="" className='text-white mb-2'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                </div>
                <div className='flex flex-col items-center'>
                    <label htmlFor="" className='text-white mb-2'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                    <label htmlFor="" className='text-white mb-2 mt-3'>hola mundo</label>
                    <input type="text" className='text-gray-900 rounded-lg p-0.5 border border-red-900' placeholder='hola mundo'/>
                </div>
                
                
            </div>

            <button type="submit" className=" text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-400">Ingresar</button>

        </form>
    </div>
       
    </>
  )
}

export default Modal