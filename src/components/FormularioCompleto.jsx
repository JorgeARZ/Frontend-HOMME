import { useForm } from "react-hook-form"

const FormularioCompleto = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data,'asdsad')
      console.log(watch("example")) // watch input value by passing the name of it

  return (
    <>
    
      <div className="px-6 space-y-4 md:space-y-6 sm:p-8 bg-red-900 rounded-lg mx-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-white font-bold text-xl text-center capitalize">modelo de deriva de particulas(MDP)</h1>
      <div className="grid grid-cols-2 mt-4 bg ">

        <div className="flex flex-col items-center mr-2">
          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize ">multiplicador de viento</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='Multiplicador de Viento' {...register("mulViento", { required: true,})} />



          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">multiplicador de corriente</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='multiplicador de corriente'{...register("multCorriente", { required: true })} />


          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">Numero de particulas a modelar</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='Numero de particulas a modelar'{...register("coordParticulas", { required: true })} />

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">Diferencia de hora UTC</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='Diferencia de hora UTC' {...register("diferenciaHorario", { required: true })} />


          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">Radio Origen</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='Latitud Oriente' {...register("radioOrigen", { required: true })}/>  

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">resolucion Radio</label>
          <input  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='resolucion Radio' {...register("resolucionRadio", { required: true })} />

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">Numero de Repeticion</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='Nro Repeticiones'{...register("nroRepeticion", { required: true })} />
          
          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">deltaRepeticion</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"   placeholder='Repeticion'{...register("Repeticion:", { required: true })} />

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">capas</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='capas'{...register("analisisDirecto:", { required: true })} />

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">analisisDirecto</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='analisisDirecto'{...register("analisisDirecto", { required: true })} />

       
        </div>
        <div className="flex flex-col items-center ml-2">
        <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize  ">analisis Deterministico</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='analisis  Deterministico'{...register("analisisDeterministico", { required: true })} />

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">pendiente</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='pendiente'{...register("pendiente", { required: true })} />

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">intercepto</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='intercepto'{...register("intercepto", { required: true })} />

          <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">SDxy</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='SDxy'{...register("SDxy", { required: true })} />

            <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">area Emergida</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='area Emergida'{...register("areaEmergida", { required: true })} />

            <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">area Sumergida</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='areaSumergida'{...register("areaSumergida", { required: true })} />

            <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">cdObjetoEmergido</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5" placeholder='cdObjetoEmergido'{...register("cdObjetoEmergido", { required: true })} />


            <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">cdObjetoSumergido</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='cdObjetoSumergido'{...register("cdObjetoSumergido", { required: true })} />


            <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">analisis Leeway</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='analisis Leeway'{...register("analisisLeeway", { required: true })} />

            <label htmlFor="" className="block mb-1 text-m font-normal text-white capitalize mt-2">random Walk</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1.5"  placeholder='random Walk'{...register("randomWalk", { required: true })} />
        </div>
        
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
      
        </div>
        <input className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-400  mt-5" type="submit" />
      </form>
      </div>
    
    </>
  )
}

export default FormularioCompleto