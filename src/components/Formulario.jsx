import { useForm } from "react-hook-form"
import axios from 'axios'
import FormData from 'form-data'



const Formulario = () => {

    const {register,handleSubmit,formState: { errors }} = useForm()
    
      const onSubmit = (data) => {
          console.log(data)

      }
      // console.log(watch("example")) // watch input value by passing the name of it
      const EnvioDatos = ({fechaInicio ='2023-05-08 18:00:00.000',fechaTermino= '2023-05-09 18:00:00.000',latitudNorte='0',latitudSur='0',longitudOriente='0',longitudPoniente='0',local='true'}) =>{
        let data = new FormData();

        const token = localStorage.getItem('token')

        //agregar radio de 6grados y no menos de 3
    
        data.append('fechaInicio', fechaInicio);
        data.append('fechaTermino', fechaTermino);
        // data.append('file', fs.createReadStream('/C:/Users/CCTVal/Downloads/Sample-Spreadsheet-10-rows.csv')); //buscar libreria en remplazo FS
        data.append('latitudNorte', latitudNorte);
        data.append('latitudSur', latitudSur);
        data.append('longitudOriente',longitudOriente);
        data.append('longitudPoniente',longitudPoniente);
        data.append('local', local);
    
        let config = {
            method: 'post',
              maxBodyLength: Infinity,
               url: 'http://localhost:3000/modeling/hidrodinamic',
              headers: { 
                 'x-token': token, 
                  // ...data.getHeaders()
               },
              data : data
             };
          
             axios.request(config)
            .then((response) => {
               console.log(JSON.stringify(response.data));
             })
            .catch((error) => {
               console.log(error);
            });
    }
    
    

  return (
    <>
    <div className="flex flex-col items-center justify-center px-5 lg:py-0">
      <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-red-900 mb-10">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-3">
          {/* register your input into the hook by invoking the "register" function */}
          {/* include validation with required or other standard HTML validation rules */}
          <div>
            <label htmlFor="inicio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">fecha inicio</label>
            <input type="date" placeholder='Fecha Inicio' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" {...register("fechaInicio", { required: true,})} />
          </div>


          <div>
            <label htmlFor="termino" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white capitalize">fecha termino</label>
            <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='FechaTermino'{...register("fechaTermino", { required: true })} />
          </div>



          <div>
            <label htmlFor="longitud" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">latitud norte</label>
            <input   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='Latitud Norte'{...register("latitudNorte", { required: true })} />
          </div>


          <div>
            <label htmlFor="longitud" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">latitud sur</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='Latitud Sur' {...register("latitudSur", { required: true })} />
          </div>


          <div>
            <label htmlFor="longitud" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">latitud oriente</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='Latitud Oriente' {...register("longitudOriente", { required: true })}/>
          </div>



          <div>
            <label htmlFor="longitud" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">longitud poniente</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='Langitud Poniente' {...register("longitudPoniente", { required: true })} />
          </div>



          <div>
            <label htmlFor="longitud" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">datos locales</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='Datos'{...register("local", { required: true })} />
          </div>


          {/* <div>
            <label htmlFor="batimetria" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize" >batimetria</label>
            <input type="file" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='Batimetria'{...register("batimetria", { required: true })} />
          </div> */}


          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-400"/>
        </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default Formulario